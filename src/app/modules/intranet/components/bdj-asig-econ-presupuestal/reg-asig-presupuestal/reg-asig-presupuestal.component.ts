import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { UNIDADES, TAMBOS, TIPOASIGNACION, PARTIDAS } from 'src/app/common';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { DetalleAsignacion } from 'src/app/model/detalle-asignacion.model';

@Component({
  selector: 'app-reg-asig-presupuestal',
  templateUrl: './reg-asig-presupuestal.component.html',
  styleUrls: ['./reg-asig-presupuestal.component.scss']
})
export class RegAsigPresupuestalComponent implements OnInit {
  asigPresupuestalGrp: FormGroup;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tipoasignacion: Object[] = TIPOASIGNACION;
  partidas: Object[] = PARTIDAS;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (det: DetalleAsignacion) => `${det.id}`
    }, {
      columnDef: 'ffRb',
      header: 'FF/Rb',
      cell: (det: DetalleAsignacion) => `${det.ffRb}`
    }, {
      columnDef: 'metaNmonico',
      header: 'Meta/Nmonico',
      cell: (det: DetalleAsignacion) => `${det.metaNmonico}`
    }, {
      columnDef: 'clasificadorGasto',
      header: 'Clasif. Gasto',
      cell: (det: DetalleAsignacion) => `${det.clasificadorGasto}`
    }, {
      columnDef: 'descripcion',
      header: 'Descripcion',
      cell: (det: DetalleAsignacion) => `${det.descripcion}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (det: DetalleAsignacion) => `${det.monto}`
    }];

  listaDetAsignacion: DetalleAsignacion[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DetalleAsignacion>;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegAsigPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.asigPresupuestalGrp = this.fb.group({
      tipoasignacion: ['', [Validators.required]]
    });

    this.asigPresupuestalGrp.get('tipoasignacion').setValue(this.tipoasignacion[0]);

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
  }

  public cargarDatosTabla(): void {
    if (this.listaDetAsignacion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDetAsignacion);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


export interface DialogData {
  animal: string;
  name: string;
}