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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  unidades = [];
  tambos = [];
  tiposvehiculo = [];
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
      columnDef: 'id',
      header: 'N°',
      cell: (vehiculo: Vehiculo) => `${vehiculo.id}`
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (vehiculo: Vehiculo) => `${vehiculo.unidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.tambo}`
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (vehiculo: Vehiculo) => `${vehiculo.nomTipo}`
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (vehiculo: Vehiculo) => `${vehiculo.marca}`
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (vehiculo: Vehiculo) => `${vehiculo.placa}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      unidad: ['unidad', [Validators.required]],
      tambo: ['tambo', [Validators.required]],
      tipovehiculo: ['tipovehiculo', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.dataSource = null;
    this.cargarTiposvehiculo();
    this.cargarUnidades();

    this.spinnerService.hide();
  }

  public cargarTiposvehiculo() {
    this.tiposvehiculo = JSON.parse(JSON.stringify(TIPOSVEHICULO));
    this.tiposvehiculo.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tipovehiculo').setValue(this.tiposvehiculo[0]);
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('unidad').setValue(this.unidades[0]);

    this.cargarTambos();
  }

  public cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idunidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idunidad: 0 });

    this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;
    let idTipovehiculo = this.bandejaGrp.get('tipovehiculo').value.id;

    this.listaVehiculos = VEHICULOS.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.listaVehiculos = this.listaVehiculos.filter(el => (el.idTambo == idTambo) || (0 == idTambo));
    this.listaVehiculos = this.listaVehiculos.filter(el => (el.idTipo == idTipovehiculo) || (0 == idTipovehiculo));

    this.cargarDatosTabla();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
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
    console.log('Exportar');
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
      data: { name: 'NERIO'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regSOAT(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegistrarSoatComponent, {
      width: '500px',
      data: { name: 'NERIO'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }


  regArticulosEmergencia(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegArtEmergenciaComponent, {
      width: '500px',
      data: { name: 'NERIO'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regConductor(): void {
    const dialogRef = this.dialog.open(RegConductorComponent, {
      width: '500px',
      data: { name: 'NERIO' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
