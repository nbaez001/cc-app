import { Component, OnInit, ViewChild } from '@angular/core';
import { UNIDADES, TAMBOS, TIPOSVEHICULO, deslizadores } from 'src/app/common';
import { Deslizador } from 'src/app/model/deslizador.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
      columnDef: 'id',
      header: 'N°',
      cell: (gen: Deslizador) => `${gen.id}`
    }, {
      columnDef: 'codPatrimonio',
      header: 'Cod patrimonio',
      cell: (gen: Deslizador) => `${gen.codPatrimonio}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Unidad',
      cell: (gen: Deslizador) => `${gen.nomUnidad}`
    }, {
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (gen: Deslizador) => `${gen.nomTambo}`
    }, {
      columnDef: 'denominacion',
      header: 'Denominacion',
      cell: (gen: Deslizador) => `${gen.denominacion}`
    }, {
      columnDef: 'estado',
      header: 'Estado',
      cell: (gen: Deslizador) => `${gen.estado}`
    }, {
      columnDef: 'tieneSeguro',
      header: 'Tiene seguro',
      cell: (gen: Deslizador) => `${gen.tieneSeguro}`
    }, {
      columnDef: 'iniFechaVigencia',
      header: 'Inicio fecha vigencia',
      cell: (gen: Deslizador) => `${gen.iniFechaVigencia}`
    }, {
      columnDef: 'finFechaVigencia',
      header: 'Fin fecha vigencia',
      cell: (gen: Deslizador) => `${gen.finFechaVigencia}`
    }, {
      columnDef: 'isOperativo',
      header: 'Se encuentra operativo',
      cell: (gen: Deslizador) => `${gen.isOperativo}`
    }, {
      columnDef: 'ubicacionFisica',
      header: 'Ubicacion fisica',
      cell: (gen: Deslizador) => `${gen.ubicacionFisica}`
    }, {
      columnDef: 'motor',
      header: 'Motor',
      cell: (gen: Deslizador) => `${gen.motor}`
    }, {
      columnDef: 'potencia',
      header: 'Potencia',
      cell: (gen: Deslizador) => `${gen.potencia}`
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tambo: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
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
    // this.displayedColumns.push('opt');
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

    this.bandejaGrp.get('unidad').setValue(this.unidades[0]);

    this.cargarTambos();
  }

  cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idunidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idunidad: 0 });

    this.bandejaGrp.get('tambo').setValue(this.tambos[0]);

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
    console.log('Exportar');
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
}