import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { UNIDADES, TAMBOS, TIPOEJECUCION, PARTIDAS } from 'src/app/common';
import { DetalleEjecucion } from 'src/app/model/detalle-ejecucion.model';
import { EjecucionPresupuestal } from 'src/app/model/ejecucion-presupuestal.model';
import { MatTableDataSource, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reg-ejec-presupuestal',
  templateUrl: './reg-ejec-presupuestal.component.html',
  styleUrls: ['./reg-ejec-presupuestal.component.scss']
})
export class RegEjecPresupuestalComponent implements OnInit {
  ejecPresupuestalGrp: FormGroup;
  detEjecPresupuestalGrp: FormGroup;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tiposejecucion: Object[] = TIPOEJECUCION;
  partidas: Object[] = PARTIDAS;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (det: DetalleEjecucion) => `${det.id}`
    }, {
      columnDef: 'ffRb',
      header: 'FF/Rb',
      cell: (det: DetalleEjecucion) => `${det.ffRb}`
    }, {
      columnDef: 'metaNmonico',
      header: 'Meta/Nmonico',
      cell: (det: DetalleEjecucion) => `${det.metaNmonico}`
    }, {
      columnDef: 'clasificadorGasto',
      header: 'Clasif. Gasto',
      cell: (det: DetalleEjecucion) => `${det.clasificadorGasto}`
    }, {
      columnDef: 'descripcion',
      header: 'Descripcion',
      cell: (det: DetalleEjecucion) => `${det.descripcion}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (det: DetalleEjecucion) => `${det.monto}`
    }];

  ejecPresupuestal: EjecucionPresupuestal;
  listaDetAsignacion: DetalleEjecucion[] = [];
  displayedColumns: string[];
  dataSource: MatTableDataSource<DetalleEjecucion>;

  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tipoejecucion': {
      'required': 'Campo obligatorio'
    },
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
    'tipoejecucion': '',
    'monto': '',
    'fecha': '',
    'observacion': ''
  };

  messages2 = {
    'ffRb': {
      'required': 'Campo obligatorio'
    },
    'metaNmonico': {
      'required': 'Campo obligatorio'
    },
    'clasificadorGasto': {
      'required': 'Campo obligatorio'
    },
    'descripcion': {
      'required': 'Campo obligatorio'
    },
    'monto': {
      'required': 'Campo obligatorio'
    }
  };

  formErrors2 = {
    'ffRb': '',
    'metaNmonico': '',
    'clasificadorGasto': '',
    'descripcion': '',
    'monto': ''
  };

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegEjecPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.ejecPresupuestalGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tipoejecucion: ['', [Validators.required]],
      nroOrdencompra: ['', []],
      nroResAdministracion: ['', []],
      monto: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      observacion: ['', [Validators.required]],
    });

    this.detEjecPresupuestalGrp = this.fb.group({
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
    this.ejecPresupuestalGrp.get('tipoejecucion').setValue(this.tiposejecucion[0]);
    this.ejecPresupuestalGrp.get('unidad').setValue(this.unidades[0]);

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
    this.validationService.getValidationErrors(this.ejecPresupuestalGrp, this.messages, this.formErrors, true);
  }

  validateForm2(): void {
    this.validationService.getValidationErrors(this.detEjecPresupuestalGrp, this.messages2, this.formErrors2, true);
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaDetAsignacion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDetAsignacion);
    }
  }

  guardar(): void {
    if (this.ejecPresupuestalGrp.valid) {
      let kil = new EjecucionPresupuestal();
      kil.id = 0;
      kil.idUnidad = this.ejecPresupuestalGrp.get('unidad').value.id;
      kil.nomUnidad = this.ejecPresupuestalGrp.get('unidad').value.nombre;
      kil.idTipoejecucion = this.ejecPresupuestalGrp.get('tipoejecucion').value.id;
      kil.nomTipoejecucion = this.ejecPresupuestalGrp.get('tipoejecucion').value.nombre;
      kil.nroOrdencompra = this.ejecPresupuestalGrp.get('nroOrdencompra').value;
      kil.nroResAdministracion = this.ejecPresupuestalGrp.get('nroResAdministracion').value;
      kil.monto = this.ejecPresupuestalGrp.get('monto').value;
      kil.fecha = this.ejecPresupuestalGrp.get('fecha').value;
      kil.observacion = this.ejecPresupuestalGrp.get('observacion').value;
      console.log(kil);
      this.dialogRef.close(kil);
    } else {
      this.validateForm();
    }
  }

  guardarDetalle() {
    if (this.detEjecPresupuestalGrp.valid) {
      let kil = new DetalleEjecucion();
      kil.id = 0;
      kil.ffRb = this.detEjecPresupuestalGrp.get('ffRb').value;
      kil.metaNmonico = this.detEjecPresupuestalGrp.get('metaNmonico').value;
      kil.clasificadorGasto = this.detEjecPresupuestalGrp.get('clasificadorGasto').value.nombre;
      kil.descripcion = this.detEjecPresupuestalGrp.get('descripcion').value;
      kil.monto = this.detEjecPresupuestalGrp.get('monto').value;
      console.log(kil);

      this.listaDetAsignacion.push(kil);
      this.detEjecPresupuestalGrp.get('ffRb').setValue('');
      this.detEjecPresupuestalGrp.get('metaNmonico').setValue('');
      this.detEjecPresupuestalGrp.get('clasificadorGasto').setValue(this.partidas[0]);
      this.detEjecPresupuestalGrp.get('descripcion').setValue('');
      this.detEjecPresupuestalGrp.get('monto').setValue('');
      this.validationService.setAsUntoched(this.detEjecPresupuestalGrp);

      this.cargarDatosTabla();
    } else {
      this.validateForm2();
    }
  }

}


export interface DialogData {
  animal: string;
  name: string;
}