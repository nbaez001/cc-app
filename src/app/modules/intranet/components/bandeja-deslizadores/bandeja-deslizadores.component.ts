import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UNIDADES, TAMBOS, TIPOSVEHICULO, deslizadores } from 'src/app/common';
import { Deslizador } from 'src/app/model/deslizador.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe } from '@angular/common';
import { RegLubricantesAfines3Component } from './reg-lubricantes-afines3/reg-lubricantes-afines3.component';

@Component({
  selector: 'app-bandeja-deslizadores',
  templateUrl: './bandeja-deslizadores.component.html',
  styleUrls: ['./bandeja-deslizadores.component.scss']
})
export class BandejaDeslizadoresComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaDeslizador: Deslizador[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Deslizador>;

  bandejaGrp: FormGroup;
  messages = {
    'name': {
      'required': 'Field is required',
      'minlength': 'Insert al least 2 characters',
      'maxlength': 'Max name size 20 characters'
    }
  };

  formErrors = {
    'name': '',
  };

  columnsGrilla = [
    {
      columnDef: 'nomUnidad',
      header: 'Unidad',
      cell: (gen: Deslizador) => `${gen.nomUnidad}`
    }, {
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (gen: Deslizador) => `${gen.nomTambo}`
    }, {
      columnDef: 'codPatrimonio',
      header: 'Cod patrimonio',
      cell: (gen: Deslizador) => `${gen.codPatrimonio}`
    }, {
      columnDef: 'denominacion',
      header: 'Denominacion',
      cell: (gen: Deslizador) => `${gen.denominacion}`
    }, {
      columnDef: 'marca',
      header: 'Marca',
      cell: (gen: Deslizador) => `${gen.marca}`
    }, {
      columnDef: 'modelo',
      header: 'Modelo',
      cell: (gen: Deslizador) => `${gen.modelo}`
    }, {
      columnDef: 'tipo',
      header: 'Tipo',
      cell: (gen: Deslizador) => `${gen.tipo}`
    }, {
      columnDef: 'serie',
      header: 'Serie',
      cell: (gen: Deslizador) => `${gen.serie}`
    }, {
      columnDef: 'color',
      header: 'Color',
      cell: (gen: Deslizador) => `${gen.color}`
    }, {
      columnDef: 'estado',
      header: 'Estado',
      cell: (gen: Deslizador) => `${gen.estado}`
    }, {
      columnDef: 'potencia',
      header: 'Potencia',
      cell: (gen: Deslizador) => `${gen.potencia}`
    }
  ];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  get getUser() { return this.user; }

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
          tambo: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]]
        });

        this.definirTabla();
        this.inicializarVariables();
        clearInterval(validarIntervalo);
      }
    }, 100);
  }

  public inicializarVariables(): void {
    this.cargarUnidades();

    this.spinnerService.hide();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.unshift('id');
    this.displayedColumns.push('opt');
  }

  cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaDeslizador.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDeslizador);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == 20)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }

    this.cargarTambos();
  }

  cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idUnidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idUnidad: 0 });

    if (this.user.perfil.id == 1) {
      this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == 90)[0]);
    } else {
      if (this.user.perfil.id == 2) {
        this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == 0)[0]);
      } else {
        this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
      }
    }

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;

    this.listaDeslizador = deslizadores.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.listaDeslizador = this.listaDeslizador.filter(el => (el.idTambo == idTambo) || (0 == idTambo));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    let url = "/assets/files/reportes/deslizadores.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'deslizadores.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

  regVehiculo(obj): void {
    // console.log(obj);
    // const dialogRef = this.dialog.open(RegistrarVehiculoComponent, {
    //   width: '500px',
    //   data: { name: 'NERIO', animal: 'LEON' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  regLubricante(obj): void {
    const dialogRef = this.dialog.open(RegLubricantesAfines3Component, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
