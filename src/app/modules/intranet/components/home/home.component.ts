import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { Vehiculo } from 'src/app/model/vehiculo.model';
import { RegistrarVehiculoComponent } from './registrar-vehiculo/registrar-vehiculo.component';
import { RegistrarRevTecnicaComponent } from './registrar-rev-tecnica/registrar-rev-tecnica.component';
import { RegistrarSoatComponent } from './registrar-soat/registrar-soat.component';
import { RegistrarAsigCombustComponent } from './registrar-asig-combust/registrar-asig-combust.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UNIDADES, TAMBOS, TIPOSVEHICULO, VEHICULOS } from 'src/app/common';
import { RegArtEmergenciaComponent } from './reg-art-emergencia/reg-art-emergencia.component';
import { RegConductorComponent } from './reg-conductor/reg-conductor.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegLubricantesAfinesComponent } from './reg-lubricantes-afines/reg-lubricantes-afines.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  unidades = [];
  tambos = [];
  tiposvehiculo: any[] = [];
  listaVehiculos: Vehiculo[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Vehiculo>;

  bandejaGrp: FormGroup;
  messages = {
    'name': {
      'required': 'Field is required',
      'minlength': 'Insert al least 2 characters',
      'maxlength': 'Max name size 20 characters'
    },
    'email': {
      'required': 'Field is required',
      'email': 'Insert a valid email',
      'customEmail': 'Email domain should be dell.com'
    },
    'confirmEmail': {
      'required': 'Field is required',
      'email': 'Insert a valid email'
    },
    'phone': {
      'required': 'Phone is required'
    },
    'skill': {
      'name': {
        'required': 'Field is required',
        'minlength': 'Insert al least 5 characters',
        'maxlength': 'max name size 20 characters'
      },
      'years': {
        'required': 'Field is required',
        'min': 'Min value is 1',
        'max': 'Max value is 100'
      },
      'proficiency': {
        'required': 'option is required'
      }
    }
  };
  formErrors = {
    'name': '',
    'email': '',
    'confirmEmail': '',
    'phone': '',
    'skill': {
      'name': '',
      'years': '',
      'proficiency': ''
    }
  };
  columnsGrilla = [
    {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (vehiculo: Vehiculo) => `${vehiculo.unidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.tambo}`
    }, {
      columnDef: 'codPatrimonio',
      header: 'COD. PATRIMONIAL',
      cell: (vehiculo: Vehiculo) => `${vehiculo.codPatrimonio}`
    }, {
      columnDef: 'denominacion',
      header: 'DENOMINACION',
      cell: (vehiculo: Vehiculo) => `${vehiculo.denominacion}`
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (vehiculo: Vehiculo) => `${vehiculo.marca}`
    }, {
      columnDef: 'modelo',
      header: 'MODELO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.modelo}`
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.tipo}`
    }, {
      columnDef: 'serie',
      header: 'SERIE',
      cell: (vehiculo: Vehiculo) => `${vehiculo.serie}`
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (vehiculo: Vehiculo) => `${vehiculo.placa}`
    }, {
      columnDef: 'color',
      header: 'COLOR',
      cell: (vehiculo: Vehiculo) => `${vehiculo.color}`
    }, {
      columnDef: 'estado',
      header: 'ESTADO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.estado}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  get getUser() { return this.user; }

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        console.log('USUARIO');
        console.log(this.user);
        this.bandejaGrp = this.fb.group({
          unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
          tambo: [{ value: '', disabled: (this.user.perfil.id == 1) }, [Validators.required]],
          tipovehiculo: ['', [Validators.required]]
        });

        this.definirTabla();
        this.inicializarVariables();
        clearInterval(validarIntervalo);
      }
    }, 100);
  }

  public inicializarVariables(): void {
    this.cargarTiposvehiculo();
    this.cargarUnidades();

    this.spinnerService.hide();
  }

  public cargarTiposvehiculo() {
    this.tiposvehiculo = JSON.parse(JSON.stringify(TIPOSVEHICULO));
    this.tiposvehiculo.unshift({ id: 0, codigo: '00', nombre: 'TODOS' });

    this.bandejaGrp.get('tipovehiculo').setValue(this.tiposvehiculo[0]);
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }


    this.cargarTambos();
  }

  public cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idUnidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idunidad: 0 });


    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == this.user.idTambo)[0]);
    } else {
      this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
    }

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;
    let codTipovehiculo = this.bandejaGrp.get('tipovehiculo').value.codigo;
    const regex = new RegExp(`${codTipovehiculo}.*`);

    this.listaVehiculos = VEHICULOS.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.listaVehiculos = this.listaVehiculos.filter(el => (el.idTambo == idTambo) || (0 == idTambo));
    this.listaVehiculos = this.listaVehiculos.filter(el => (el.codPatrimonio.match(regex)) || ('00' == codTipovehiculo));

    this.cargarDatosTabla();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.unshift('id');
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.spinnerService.show();
    this.dataSource = null;
    if (this.listaVehiculos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaVehiculos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  exportarExcel() {
    let url = "/assets/files/reportes/vehiculos.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'vehiculos.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

  exportarArtEmerg() {
    let url = "/assets/files/reportes/vehiculos-articulos-emergencia.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'art-emergencia-vehiculos.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

  exportarConductores() {
    let url = "/assets/files/reportes/vehiculos-conductores.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'conductores-vehiculos.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

  regVehiculo(obj): void {
    const dialogRef = this.dialog.open(RegistrarVehiculoComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  regRevTecnica(obj): void {
    const dialogRef = this.dialog.open(RegistrarRevTecnicaComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regSOAT(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegistrarSoatComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  regArticulosEmergencia(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegArtEmergenciaComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regConductor(): void {
    const dialogRef = this.dialog.open(RegConductorComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  regLubricante(obj): void {
    const dialogRef = this.dialog.open(RegLubricantesAfinesComponent, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
