import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { UNIDADES, TAMBOS, TIPOASIGNACION, PARTIDAS } from 'src/app/common';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { DetalleAsignacion } from 'src/app/model/detalle-asignacion.model';
import { AsignacionPresupuestal } from 'src/app/model/asignacion-presupuestal.model';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-reg-asig-presupuestal',
  templateUrl: './reg-asig-presupuestal.component.html',
  styleUrls: ['./reg-asig-presupuestal.component.scss']
})
export class RegAsigPresupuestalComponent implements OnInit {
  asigPresupuestalGrp: FormGroup;
  detAsigPresupuestalGrp: FormGroup;

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

  asigPresupuestal: AsignacionPresupuestal;
  listaDetAsignacion: DetalleAsignacion[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DetalleAsignacion>;

  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tipoasignacion': {
      'required': 'Campo obligatorio'
    },
    // 'nroOrdencompra': {
    //   'required': 'Campo obligatorio'
    // },
    // 'nroResAdministracion': {
    //   'required': 'Campo obligatorio'
    // },
    'monto': {
      'required': 'Campo obligatorio'
    },
    'fecha': {
      'required': 'Campo obligatorio'
    },
    'observacion': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tipoasignacion': '',
    'monto': '',
    'fecha': '',
    'observacion': ''
  };

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegAsigPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService) { }

  ngOnInit() {
    this.asigPresupuestalGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tipoasignacion: ['', [Validators.required]],
      nroOrdencompra: ['', []],
      nroResAdministracion: ['', []],
      monto: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
    });

    this.detAsigPresupuestalGrp = this.fb.group({
      ffRb: ['', [Validators.required]],
      metaNmonico: ['', [Validators.required]],
      clasificadorGasto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      monto: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.asigPresupuestalGrp.get('tipoasignacion').setValue(this.tipoasignacion[0]);
    this.asigPresupuestalGrp.get('unidad').setValue(this.unidades[0]);

    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
    this.cargarDatosTabla();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.asigPresupuestalGrp, this.messages, this.formErrors, true);
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaDetAsignacion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDetAsignacion);
    }
  }

  guardar(): void {
    if (this.asigPresupuestalGrp.valid) {
      let kil = new AsignacionPresupuestal();
      kil.id = 0;
      kil.idUnidad = this.asigPresupuestalGrp.get('unidad').value.id;
      kil.nomUnidad = this.asigPresupuestalGrp.get('unidad').value.nombre;
      kil.idTipoAsignacion = this.asigPresupuestalGrp.get('tipoasignacion').value.id;
      kil.nomTipoAsignacion = this.asigPresupuestalGrp.get('tipoasignacion').value.nombre;
      kil.nroOrdencompra = this.asigPresupuestalGrp.get('nroOrdencompra').value;
      kil.nroResAdministracion = this.asigPresupuestalGrp.get('nroResAdministracion').value;
      kil.monto = this.asigPresupuestalGrp.get('monto').value;
      kil.fecha = this.asigPresupuestalGrp.get('fecha').value;
      kil.observacion = this.asigPresupuestalGrp.get('observacion').value;
      console.log(kil);
      this.dialogRef.close(kil);
    } else {
      this.validateForm();
    }

  }

}


export interface DialogData {
  animal: string;
  name: string;
}