import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsumoGenerador } from 'src/app/model/consumo-generador.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
import { RegConsumoGeneradorComponent } from './reg-consumo-generador/reg-consumo-generador.component';
import { Usuario } from 'src/app/model/usuario.model';
import { VerObservacionConsComponent } from './ver-observacion-cons/ver-observacion-cons.component';

@Component({
  selector: 'app-control-gen-electrico',
  templateUrl: './control-gen-electrico.component.html',
  styleUrls: ['./control-gen-electrico.component.scss']
})
export class ControlGenElectricoComponent implements OnInit {
  user: Usuario;
  bdjConsumoGenElectricoGrp: FormGroup;
  unidades = UNIDADES;
  tambos = TAMBOS;
  tiposvehiculo = TIPOSVEHICULO;
  listaConsumos: ConsumoGenerador[] = [
    { id: 1, unidad: 'AYACUCHO NORTE', tambo: 'VISTA ALEGRE', marca: 'PERKINS', serie: 'EA-9263', horaInicio: '9:00 AM', horaFin: '9:30 AM', horas: 0.5, fecha: '10/10/2019', observacion: 'SE USO GENERADOR EN EL TAMBO POR CAUSA DE CORTE DE ENERGIA ELECTRICA' },
    { id: 2, unidad: 'AYACUCHO NORTE', tambo: 'CCERAOCRO', marca: 'VOLVO PENTA', serie: 'EA-9263', horaInicio: '10:00 AM', horaFin: '11:00 AM', horas: 1.0, fecha: '15/10/2019', observacion: 'SE USO GENERADOR PARA LA TENCION INTEGRAL EN SALUD' },
    { id: 3, unidad: 'AYACUCHO NORTE', tambo: 'CHACHASPATA', marca: 'JOHN DEERE', serie: 'EA-9263', horaInicio: '11:00 AM', horaFin: '12:00 AM', horas: 1.0, fecha: '20/10/2019', observacion: 'SE USO GENERADOR PARA DESARROLLO DE ACTIVIDADES E ILUMINACION EN LA PLATAFORMA' },
    { id: 4, unidad: 'AYACUCHO NORTE', tambo: 'CHURUNMARCA', marca: 'DOOSAN', serie: 'EA-9263', horaInicio: '3:00 PM', horaFin: '4:00 PM', horas: 1.0, fecha: '25/10/2019', observacion: '' },
    { id: 5, unidad: 'AYACUCHO NORTE', tambo: 'COCHAPAMPA', marca: 'MITSUBISHI', serie: 'EA-9263', horaInicio: '9:30 AM', horaFin: '2:30 AM', horas: 5.0, fecha: '30/10/2019', observacion: '' }
  ];

  displayedColumns: string[];
  dataSource: MatTableDataSource<ConsumoGenerador>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (consumo: ConsumoGenerador) => `${consumo.id}`
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (consumo: ConsumoGenerador) => `${consumo.unidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (consumo: ConsumoGenerador) => `${consumo.tambo}`
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (consumo: ConsumoGenerador) => `${consumo.marca}`
    }, {
      columnDef: 'serie',
      header: 'SERIE',
      cell: (consumo: ConsumoGenerador) => `${consumo.serie}`
    }, {
      columnDef: 'horaInicio',
      header: 'HORA INICIO',
      cell: (consumo: ConsumoGenerador) => `${consumo.horaInicio}`
    }, {
      columnDef: 'horaFin',
      header: 'HORA FIN',
      cell: (consumo: ConsumoGenerador) => `${consumo.horaFin}`
    }, {
      columnDef: 'horas',
      header: 'TOTAL HORAS',
      cell: (consumo: ConsumoGenerador) => `${consumo.horas}`
    }, {
      columnDef: 'fecha',
      header: 'FECHA USO',
      cell: (consumo: ConsumoGenerador) => `${consumo.fecha}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.spinnerService.show();

    this.bdjConsumoGenElectricoGrp = this.fb.group({
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
    if (this.listaConsumos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaConsumos);
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

  regConsumo(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegConsumoGeneradorComponent, {
      width: '700px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaConsumos.push(result);
        this.cargarDatosTabla();
      }
    });
  }

  verObsConsumo(obj): void {
    const dialogRef = this.dialog.open(VerObservacionConsComponent, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
