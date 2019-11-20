import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EjecucionPresupuestal } from 'src/app/model/ejecucion-presupuestal.model';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { UNIDADES, TAMBOS, TIPOSCOMBUSTIBLE } from 'src/app/common';
import { DistribucionEjecucion } from 'src/app/model/distribucion-ejecucion.model';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dist-ejec-presupuestal',
  templateUrl: './dist-ejec-presupuestal.component.html',
  styleUrls: ['./dist-ejec-presupuestal.component.scss']
})
export class DistEjecPresupuestalComponent implements OnInit {
  formularioGrp: FormGroup;

  ejecPresupuestal: EjecucionPresupuestal;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tiposcombustible: Object[] = TIPOSCOMBUSTIBLE;

  columnsGrilla = [
    {
      tipo: 0,
      columnDef: 'id',
      header: 'N°',
      cell: (dist: DistribucionEjecucion) => `${dist.id}`
    }, {
      tipo: 0,
      columnDef: 'nomUnidad',
      header: 'Unidad territorial',
      cell: (dist: DistribucionEjecucion) => `${dist.nomUnidad}`
    }, {
      tipo: 0,
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (dist: DistribucionEjecucion) => `${dist.nomTambo}`
    }, {
      tipo: 0,
      columnDef: 'nomTipocombustible',
      header: 'Tipo combustible',
      cell: (dist: DistribucionEjecucion) => `${dist.nomTipocombustible}`
    }, {
      tipo: 0,
      columnDef: 'totalRequerimiento',
      header: 'Total requerimiento',
      cell: (dist: DistribucionEjecucion) => `${dist.totalRequerimiento}`
    }, {
      tipo: 0,
      columnDef: 'precio',
      header: 'Precio',
      cell: (dist: DistribucionEjecucion) => `${dist.precio}`
    }, {
      tipo: 0,
      columnDef: 'total',
      header: 'Total',
      cell: (dist: DistribucionEjecucion) => `${dist.total}`
    }, {
      tipo: 1,
      columnDef: 'ciudadAbastecimiento',
      header: 'Ciudad abastecimiento',
      cell: (dist: DistribucionEjecucion) => `${dist.ciudadAbastecimiento}`
    }, {
      tipo: 1,
      columnDef: 'distCiudadAbastecimiento',
      header: 'Dist. ciudad abastecimiento',
      cell: (dist: DistribucionEjecucion) => `${dist.distCiudadAbastecimiento}`
    }, {
      tipo: 0,
      columnDef: 'proveedor',
      header: 'Proveedor',
      cell: (dist: DistribucionEjecucion) => `${dist.proveedor}`
    }, {
      tipo: 1,
      columnDef: 'rucProveedor',
      header: 'RUC',
      cell: (dist: DistribucionEjecucion) => `${dist.rucProveedor}`
    }, {
      tipo: 2,
      columnDef: 'nombreGestor',
      header: 'Nombre gestor',
      cell: (dist: DistribucionEjecucion) => `${dist.nombreGestor}`
    }, {
      tipo: 2,
      columnDef: 'factura',
      header: 'Factura',
      cell: (dist: DistribucionEjecucion) => `${dist.factura}`
    }, {
      tipo: 2,
      columnDef: 'direccionGrifo',
      header: 'Direccion grifo',
      cell: (dist: DistribucionEjecucion) => `${dist.direccionGrifo}`
    }];

  listaDistAsignacion: DistribucionEjecucion[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DistribucionEjecucion>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DistEjecPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      tipoasignacion: ['', [Validators.required]]
    });

    // this.formularioGrp.get('tipoasignacion').setValue(this.tipoasignacion[0]);

    this.ejecPresupuestal = JSON.parse(JSON.stringify(this.data.objeto));

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
      if (c.tipo == 0 || c.tipo == this.ejecPresupuestal.idTipoejecucion) {
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