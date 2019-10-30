import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { Kilometraje } from 'src/app/model/kilometraje.model';
import { RegKilometrajeComponent } from './reg-kilometraje/reg-kilometraje.component';
import { VerObservacionComponent } from './ver-observacion/ver-observacion.component';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-control-kilometraje',
  templateUrl: './control-kilometraje.component.html',
  styleUrls: ['./control-kilometraje.component.scss']
})
export class ControlKilometrajeComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  tiposvehiculo = TIPOSVEHICULO;
  listaKilometrajes: Kilometraje[] = [
    { id: 1, unidad: 'AYACUCHO NORTE', tambo: 'SEDE', tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '', horaLlegada: '', kilometrajeSalida: '', kilometrajeLlegada: '', kilometrosRecorrido: '0', lugarPartida: '', lugarDestino: '', observaciones: 'LA CAMIONETA NO SE MOVILIZO POR LA FALTA DE MANTENIMIENTO', codComisionSISMONITOR: '', fechaComision: '01/10/2019' },
    { id: 2, unidad: 'AYACUCHO NORTE', tambo: 'ANCARPATA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '', horaLlegada: '', kilometrajeSalida: '', kilometrajeLlegada: '', kilometrosRecorrido: '0', lugarPartida: '', lugarDestino: '', observaciones: 'DESDE MES DE ENERO NO SE UTILIZO LA MOTO POR MOTIVO DE LLUVIA', codComisionSISMONITOR: '', fechaComision: '05/10/2019' },
    { id: 3, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5155', kilometrajeLlegada: '5159.5', kilometrosRecorrido: '4.5', lugarPartida: 'VISTA ALEGRE', lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '012', fechaComision: '10/10/2019' },
    { id: 4, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '10:00 AM', horaLlegada: '10:10 AM', kilometrajeSalida: '5159.5', kilometrajeLlegada: '5164', kilometrosRecorrido: '4.5', lugarPartida: 'CP QUIÑASI', lugarDestino: 'VISTA ALEGRE', observaciones: 'RETORNO', codComisionSISMONITOR: '012', fechaComision: '15/10/2019' },
    { id: 5, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5164', kilometrajeLlegada: '5180.5', kilometrosRecorrido: '16.5', lugarPartida: 'TAMBO BARRIO VISTA ALEGRE', lugarDestino: 'TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '016', fechaComision: '20/10/2019' },
    { id: 6, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '3:00 PM', horaLlegada: '4:00 PM', kilometrajeSalida: '5180.5', kilometrajeLlegada: '5197', kilometrosRecorrido: '16.5', lugarPartida: 'TOTOS', lugarDestino: 'TAMBO BARRIO VISTA ALEGRE', observaciones: 'RETORNO', codComisionSISMONITOR: '016', fechaComision: '25/10/2019' },
    { id: 7, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5197', kilometrajeLlegada: '5199', kilometrosRecorrido: '2', lugarPartida: 'TAMBO BARRIO VISTA ALEGRE', lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '051', fechaComision: '30/10/2019' }
  ];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Kilometraje>;

  bdjKilometrajeGrp: FormGroup;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (kilometraje: Kilometraje) => `${kilometraje.id}`
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (kilometraje: Kilometraje) => `${kilometraje.unidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (kilometraje: Kilometraje) => `${kilometraje.tambo}`
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (kilometraje: Kilometraje) => `${kilometraje.tipo}`
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.marca}`
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.placa}`
    }, {
      columnDef: 'horaSalida',
      header: 'HORA SALIDA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.horaSalida}`
    }, {
      columnDef: 'horaLlegada',
      header: 'HORA LLEGADA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.horaLlegada}`
    }, {
      columnDef: 'kilometrajeSalida',
      header: 'KILOMETRAJE SALIDA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.kilometrajeSalida}`
    }, {
      columnDef: 'kilometrajeLlegada',
      header: 'KILOMETRAJE LLEGADA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.kilometrajeLlegada}`
    }, {
      columnDef: 'kilometrosRecorrido',
      header: 'KILOMETRAJE RECORRIDO',
      cell: (kilometraje: Kilometraje) => `${kilometraje.kilometrosRecorrido}`
    }, {
      columnDef: 'lugarPartida',
      header: 'LUGAR PARTIDA',
      cell: (kilometraje: Kilometraje) => `${kilometraje.lugarPartida}`
    }, {
      columnDef: 'lugarDestino',
      header: 'LUGAR DESTINO',
      cell: (kilometraje: Kilometraje) => `${kilometraje.lugarDestino}`
    }, {
      columnDef: 'codComisionSISMONITOR',
      header: 'COD. COMISION SISMONITOR',
      cell: (kilometraje: Kilometraje) => `${kilometraje.codComisionSISMONITOR}`
    }, {
      columnDef: 'fechaComision',
      header: 'FECHA COMISION',
      cell: (kilometraje: Kilometraje) => `${kilometraje.fechaComision}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bdjKilometrajeGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.dataSource = null;
    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
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
    if (this.listaKilometrajes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaKilometrajes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    console.log('Buscar');
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
      console.log(result);
    });
  }

  verObsKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(VerObservacionComponent, {
      width: '500px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}