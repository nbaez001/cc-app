import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { Kilometraje } from 'src/app/model/kilometraje.model';
import { RegKilometrajeComponent } from './reg-kilometraje/reg-kilometraje.component';
import { VerObservacionComponent } from './ver-observacion/ver-observacion.component';
import { UNIDADES, TAMBOS, KILOMETRAJES, VEHICULOS } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-control-kilometraje',
  templateUrl: './control-kilometraje.component.html',
  styleUrls: ['./control-kilometraje.component.scss']
})
export class ControlKilometrajeComponent implements OnInit {
  bdjKilometrajeGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'vehiculo': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'vehiculo': ''
  };

  user: Usuario;
  unidades = UNIDADES;
  tambos = [];
  vehiculos = [];
  listaKilometrajes: Kilometraje[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Kilometraje>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (kilometraje: Kilometraje) => (kilometraje.id != null) ? `${kilometraje.id}` : ''
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (kilometraje: Kilometraje) => (kilometraje.unidad != null) ? `${kilometraje.unidad}` : ''
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (kilometraje: Kilometraje) => (kilometraje.tambo != null) ? `${kilometraje.tambo}` : ''
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (kilometraje: Kilometraje) => (kilometraje.tipo != null) ? `${kilometraje.tipo}` : ''
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (kilometraje: Kilometraje) => (kilometraje.marca != null) ? `${kilometraje.marca}` : ''
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (kilometraje: Kilometraje) => (kilometraje.placa != null) ? `${kilometraje.placa}` : ''
    }, {
      columnDef: 'horaSalida',
      header: 'HORA SALIDA',
      cell: (kilometraje: Kilometraje) => (kilometraje.horaSalida != null) ? `${kilometraje.horaSalida}` : ''
    }, {
      columnDef: 'horaLlegada',
      header: 'HORA LLEGADA',
      cell: (kilometraje: Kilometraje) => (kilometraje.horaLlegada != null) ? `${kilometraje.horaLlegada}` : ''
    }, {
      columnDef: 'kilometrajeSalida',
      header: 'KILOMETRAJE SALIDA',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrajeSalida != null) ? `${kilometraje.kilometrajeSalida}` : ''
    }, {
      columnDef: 'kilometrajeLlegada',
      header: 'KILOMETRAJE LLEGADA',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrajeLlegada != null) ? `${kilometraje.kilometrajeLlegada}` : ''
    }, {
      columnDef: 'kilometrosRecorrido',
      header: 'KILOMETRAJE RECORRIDO',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrosRecorrido != null) ? `${kilometraje.kilometrosRecorrido}` : ''
    }, {
      columnDef: 'lugarDestino',
      header: 'LUGAR DESTINO',
      cell: (kilometraje: Kilometraje) => (kilometraje.lugarDestino != null) ? `${kilometraje.lugarDestino}` : ''
    }, {
      columnDef: 'codComisionSISMONITOR',
      header: 'COD. COMISION SISMONITOR',
      cell: (kilometraje: Kilometraje) => (kilometraje.codComisionSISMONITOR != null) ? `${kilometraje.codComisionSISMONITOR}` : ''
    }, {
      columnDef: 'fechaComision',
      header: 'FECHA COMISION',
      cell: (kilometraje: Kilometraje) => (kilometraje.fechaComision != null) ? `${kilometraje.fechaComision}` : ''
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,

  ) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.spinnerService.show();

    this.bdjKilometrajeGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tambo: ['', [Validators.required]],
      vehiculo: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.cargarTambos();
    this.cargarVehiculos();

    this.dataSource = null;
    this.bdjKilometrajeGrp.get('unidad').setValue(this.unidades[0]);
    this.bdjKilometrajeGrp.get('tambo').setValue(this.tambos[0]);
    this.bdjKilometrajeGrp.get('vehiculo').setValue(this.vehiculos[0]);
    this.spinnerService.hide();
  }

  public cargarTambos() {
    console.log('Cargar tambos ejecutado');
    let idUnidad = this.bdjKilometrajeGrp.get('unidad').value.id;

    this.tambos = TAMBOS.filter(tb => tb.idunidad == idUnidad);
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idunidad: 0 });
    // request.codRol = ROLES.responsableMonitoreo;
    this.bdjKilometrajeGrp.get('tambo').setValue(this.tambos[0]);

    this.cargarVehiculos();
  }

  public cargarVehiculos() {
    let idUnidad = this.bdjKilometrajeGrp.get('unidad').value.id;
    let idTambo = this.bdjKilometrajeGrp.get('tambo').value.id;

    this.vehiculos = VEHICULOS.filter(el => (el.idUnidad == idUnidad && el.idTambo == idTambo) || (idTambo == 0 && el.idUnidad == idUnidad));
    this.vehiculos.unshift({ id: 0, nombre: 'TODOS' });

    this.bdjKilometrajeGrp.get('vehiculo').setValue(this.vehiculos[0]);
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaKilometrajes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaKilometrajes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  calcularSumaKilomatrajes(vehiculo): void {
    if (this.user.perfil.id == 3) {
      let suma = 0.0;
      let galones = '';
      this.listaKilometrajes.forEach(el => {
        suma += el.kilometrosRecorrido;
      });

      if (vehiculo.tipo == 'CAMIONETA') {
        galones = (suma / 35).toFixed(2);//EQUIVALENCIA CAMIONETAS
      } else {
        galones = (suma / 80).toFixed(2);;//EQUIVALENCIA MOTOCILCETAS
      }
      let total = new Kilometraje();
      total.kilometrajeLlegada = 'TOTAL KILOMETROS';
      total.kilometrosRecorrido = suma;
      total.lugarDestino = 'TOTAL GALONES';
      total.codComisionSISMONITOR = galones + '';

      this.listaKilometrajes.push(total);
    }
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bdjKilometrajeGrp.get('unidad').value.id;
    let idTambo = this.bdjKilometrajeGrp.get('tambo').value.id;
    let idVehiculo = this.bdjKilometrajeGrp.get('vehiculo').value.id;

    console.log(idUnidad + ' ' + idTambo + ' ' + idVehiculo);

    this.listaKilometrajes = KILOMETRAJES.filter(el => (el.idUnidad == idUnidad && el.idTambo == idTambo && el.idVehiculo == idVehiculo) || (el.idUnidad == idUnidad && el.idTambo == idTambo && 0 == idVehiculo) || (el.idUnidad == idUnidad && 0 == idTambo && 0 == idVehiculo) || (0 == idUnidad && 0 == idTambo && 0 == idVehiculo));

    if (idVehiculo != 0) {
      this.calcularSumaKilomatrajes(this.bdjKilometrajeGrp.get('vehiculo').value);
    }
    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegKilometrajeComponent, {
      width: '700px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaKilometrajes.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  editKilometraje(obj): void {
    let indice = this.listaKilometrajes.indexOf(obj);
    const dialogRef = this.dialog.open(RegKilometrajeComponent, {
      width: '700px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaKilometrajes.splice(indice,1);
      // this.listaKilometrajes.push(result);
      // this.cargarDatosTabla();
    });
  }

  verObsKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(VerObservacionComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

}