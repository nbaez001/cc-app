import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Kilometraje } from 'src/app/model/kilometraje.model';
import { RegKilometrajeComponent } from './reg-kilometraje/reg-kilometraje.component';
import { VerObservacionComponent } from './ver-observacion/ver-observacion.component';

@Component({
  selector: 'app-control-kilometraje',
  templateUrl: './control-kilometraje.component.html',
  styleUrls: ['./control-kilometraje.component.scss']
})
export class ControlKilometrajeComponent implements OnInit {
  step: number = 0;
  unidades: Object[];
  tambos: Object[];
  tiposvehiculo: Object[];

  ELEMENT_DATA: Kilometraje[];

  displayedColumns: string[] = ['id', 'unidad', 'tambo', 'tipo', 'marca', 'placa', 'horaSalida', 'horaLlegada', 'kilometrajeSalida', 'kilometrajeLlegada', 'kilometrosRecorrido', 'lugarPartida', 'lugarDestino', 'codComisionSISMONITOR', 'opt'];

  dataSource: MatTableDataSource<Kilometraje>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.unidades = [
      { id: 1, nombre: 'UNIDAD TERRITORIAL DE AYACUCHO NORTE' },
      { id: 2, nombre: 'UNIDAD TERRITORIAL DE HUANCAVELICA' },
      { id: 3, nombre: 'UNIDAD TERRITORIAL DE CUSCO' }
    ];

    this.tambos = [
      { id: 1, nombre: 'ANCARPATA' },
      { id: 2, nombre: 'BARRIO VISTA ALEGRE' },
      { id: 3, nombre: 'CCERAOCRO' },
      { id: 4, nombre: 'CHACHASPATA' }
    ];

    this.tiposvehiculo = [
      { id: 1, nombre: 'CAMIONETA' },
      { id: 2, nombre: 'MOTOCICLETA' }
    ];

    this.ELEMENT_DATA = [
      { id: 1, unidad: 'AYACUCHO NORTE', tambo: 'SEDE', tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '', horaLlegada: '', kilometrajeSalida: '', kilometrajeLlegada: '', kilometrosRecorrido: '0', lugarPartida: '', lugarDestino: '', observaciones: 'LA CAMIONETA NO SE MOVILIZO POR LA FALTA DE MANTENIMIENTO', codComisionSISMONITOR: '' },
      { id: 2, unidad: 'AYACUCHO NORTE', tambo: 'ANCARPATA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '', horaLlegada: '', kilometrajeSalida: '', kilometrajeLlegada: '', kilometrosRecorrido: '0', lugarPartida: '', lugarDestino: '', observaciones: 'DESDE MES DE ENERO NO SE UTILIZO LA MOTO POR MOTIVO DE LLUVIA', codComisionSISMONITOR: '' },
      { id: 3, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5155', kilometrajeLlegada: '5159.5', kilometrosRecorrido: '4.5', lugarPartida: 'VISTA ALEGRE', lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '012' },
      { id: 4, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '10:00 AM', horaLlegada: '10:10 AM', kilometrajeSalida: '5159.5', kilometrajeLlegada: '5164', kilometrosRecorrido: '4.5', lugarPartida: 'CP QUIÑASI', lugarDestino: 'VISTA ALEGRE', observaciones: 'RETORNO', codComisionSISMONITOR: '012' },
      { id: 5, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5164', kilometrajeLlegada: '5180.5', kilometrosRecorrido: '16.5', lugarPartida: 'TAMBO BARRIO VISTA ALEGRE', lugarDestino: 'TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '016' },
      { id: 6, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '3:00 PM', horaLlegada: '4:00 PM', kilometrajeSalida: '5180.5', kilometrajeLlegada: '5197', kilometrosRecorrido: '16.5', lugarPartida: 'TOTOS', lugarDestino: 'TAMBO BARRIO VISTA ALEGRE', observaciones: 'RETORNO', codComisionSISMONITOR: '016' },
      { id: 7, unidad: 'AYACUCHO NORTE', tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5197', kilometrajeLlegada: '5199', kilometrosRecorrido: '2', lugarPartida: 'TAMBO BARRIO VISTA ALEGRE', lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '051' },
    ];

    this.dataSource = new MatTableDataSource<Kilometraje>(this.ELEMENT_DATA);

    this.dataSource.paginator = this.paginator;
  }

  buscar() {
    console.log('Buscar');
  }

  ExportarExcel() {
    console.log('Exportar');
  }

  setStep(index: number) {
    this.step = index;
  }

  regKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegKilometrajeComponent, {
      width: '650px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  verObsKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(VerObservacionComponent, {
      width: '460px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}