import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { DistribucionAsignacion } from 'src/app/model/distribucion-asignacion.model';
import { UNIDADES, TAMBOS, TIPOSCOMBUSTIBLE } from 'src/app/common';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA, MatPaginator } from '@angular/material';
import { AsignacionPresupuestal } from 'src/app/model/asignacion-presupuestal.model';

@Component({
  selector: 'app-dist-asig-presupuestal',
  templateUrl: './dist-asig-presupuestal.component.html',
  styleUrls: ['./dist-asig-presupuestal.component.scss']
})
export class DistAsigPresupuestalComponent implements OnInit {
  formularioGrp: FormGroup;

  asigPresupuestal: AsignacionPresupuestal;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tiposcombustible: Object[] = TIPOSCOMBUSTIBLE;

  columnsGrilla = [
    {
      tipo: 0,
      columnDef: 'id',
      header: 'N°',
      cell: (dist: DistribucionAsignacion) => `${dist.id}`
    }, {
      tipo: 0,
      columnDef: 'nomUnidad',
      header: 'Unidad territorial',
      cell: (dist: DistribucionAsignacion) => `${dist.nomUnidad}`
    }, {
      tipo: 0,
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (dist: DistribucionAsignacion) => `${dist.nomTambo}`
    }, {
      tipo: 0,
      columnDef: 'nomTipocombustible',
      header: 'Tipo combustible',
      cell: (dist: DistribucionAsignacion) => `${dist.nomTipocombustible}`
    }, {
      tipo: 0,
      columnDef: 'totalRequerimiento',
      header: 'Total requerimiento',
      cell: (dist: DistribucionAsignacion) => `${dist.totalRequerimiento}`
    }, {
      tipo: 0,
      columnDef: 'precio',
      header: 'Precio',
      cell: (dist: DistribucionAsignacion) => `${dist.precio}`
    }, {
      tipo: 0,
      columnDef: 'total',
      header: 'Total',
      cell: (dist: DistribucionAsignacion) => `${dist.total}`
    }, {
      tipo: 1,
      columnDef: 'ciudadAbastecimiento',
      header: 'Ciudad abastecimiento',
      cell: (dist: DistribucionAsignacion) => `${dist.ciudadAbastecimiento}`
    }, {
      tipo: 1,
      columnDef: 'distCiudadAbastecimiento',
      header: 'Dist. ciudad abastecimiento',
      cell: (dist: DistribucionAsignacion) => `${dist.distCiudadAbastecimiento}`
    }, {
      tipo: 0,
      columnDef: 'proveedor',
      header: 'Proveedor',
      cell: (dist: DistribucionAsignacion) => `${dist.proveedor}`
    }, {
      tipo: 1,
      columnDef: 'rucProveedor',
      header: 'RUC',
      cell: (dist: DistribucionAsignacion) => `${dist.rucProveedor}`
    }, {
      tipo: 2,
      columnDef: 'nombreGestor',
      header: 'Nombre gestor',
      cell: (dist: DistribucionAsignacion) => `${dist.nombreGestor}`
    }, {
      tipo: 2,
      columnDef: 'factura',
      header: 'Factura',
      cell: (dist: DistribucionAsignacion) => `${dist.factura}`
    }, {
      tipo: 2,
      columnDef: 'direccionGrifo',
      header: 'Direccion grifo',
      cell: (dist: DistribucionAsignacion) => `${dist.direccionGrifo}`
    }];

  listaDistAsignacion: DistribucionAsignacion[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DistribucionAsignacion>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DistAsigPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      tipoasignacion: ['', [Validators.required]]
    });

    // this.formularioGrp.get('tipoasignacion').setValue(this.tipoasignacion[0]);

    this.asigPresupuestal = JSON.parse(JSON.stringify(this.data.objeto));

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
      if (c.tipo == 0 || c.tipo == this.asigPresupuestal.idTipoAsignacion) {
        this.displayedColumns.push(c.columnDef);
      }
    });
  }

  public cargarDatosTabla(): void {
    if (this.listaDistAsignacion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDistAsignacion);
      this.dataSource.paginator = this.paginator;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarDetalle(): void {

  }

}


export interface DialogData {
  title: string;
  objeto: Object;
}