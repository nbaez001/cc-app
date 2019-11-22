import { Component, OnInit, ViewChild } from '@angular/core';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HorasDeslizador } from 'src/app/model/horas-deslizador.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-control-hrs-deslizador',
  templateUrl: './control-hrs-deslizador.component.html',
  styleUrls: ['./control-hrs-deslizador.component.scss']
})
export class ControlHrsDeslizadorComponent implements OnInit {
  bdjConsumoGenElectricoGrp: FormGroup;
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaHorasDeslizador: HorasDeslizador[] = [
    
  ];

  displayedColumns: string[];
  dataSource: MatTableDataSource<HorasDeslizador>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (consumo: HorasDeslizador) => `${consumo.id}`
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (consumo: HorasDeslizador) => `${consumo.unidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (consumo: HorasDeslizador) => `${consumo.tambo}`
    }, {
      columnDef: 'deslizador',
      header: 'DESLIZADOR',
      cell: (consumo: HorasDeslizador) => `${consumo.deslizador}`
    }, {
      columnDef: 'horaInicio',
      header: 'HORA INICIO',
      cell: (consumo: HorasDeslizador) => `${consumo.horaInicio}`
    }, {
      columnDef: 'horaFin',
      header: 'HORA FIN',
      cell: (consumo: HorasDeslizador) => `${consumo.horaFin}`
    }, {
      columnDef: 'horas',
      header: 'TOTAL HORAS',
      cell: (consumo: HorasDeslizador) => `${consumo.horas}`
    }, {
      columnDef: 'fecha',
      header: 'FECHA USO',
      cell: (consumo: HorasDeslizador) => `${consumo.fecha}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
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
    if (this.listaHorasDeslizador.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaHorasDeslizador);
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
    // console.log(obj);
    // const dialogRef = this.dialog.open(RegHorasDeslizadorComponent, {
    //   width: '700px',
    //   data: obj
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   this.listaConsumos.push(result);
    //   this.cargarDatosTabla();
    // });
  }

  verObsConsumo(obj): void {
    // const dialogRef = this.dialog.open(VerObservacionConsComponent, {
    //   width: '600px',
    //   data: obj
    // });

    // dialogRef.afterClosed().subscribe(result => {
      
    // });
  }
}
