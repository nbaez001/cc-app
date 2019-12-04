import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../home/registrar-rev-tecnica/registrar-rev-tecnica.component';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION } from 'src/app/common';

@Component({
  selector: 'app-reg-mant-vehiculo',
  templateUrl: './reg-mant-vehiculo.component.html',
  styleUrls: ['./reg-mant-vehiculo.component.scss']
})
export class RegMantVehiculoComponent implements OnInit {
  unidades = [];
  tiposMantenimiento = [];
  tiposPresupuesto = [];

  formularioGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tipoMantenimiento': {
      'required': 'Campo obligatorio'
    },
    'tipoPresupuesto': {
      'required': 'Campo obligatorio'
    },
    'codAsigPresupuesto': {
      'required': 'Campo obligatorio'
    },
    'montoPresupuesto': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tipoMantenimiento': '',
    'tipoPresupuesto': '',
    'codAsigPresupuesto': '',
    'montoPresupuesto': ''
  };

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegMantVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: true }, [Validators.required]],
      tipoPresupuesto: ['', [Validators.required]],
      codAsigPresupuesto: ['', [Validators.required]],
      montoPresupuesto: ['', [Validators.required]]
    });
    this.inicializarVariables();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.cargarUnidades();
    this.cargarTipomantenimiento();
    this.cargarTipopresupuesto();
  }


  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));

    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
    }
  }

  public cargarTipomantenimiento() {
    this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));

    this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
  }

  public cargarTipopresupuesto() {
    this.tiposPresupuesto = JSON.parse(JSON.stringify(TIPOEJECUCION));

    this.formularioGrp.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);
  }

  guardar(): void {
    if (this.formularioGrp.valid) {
      let kil = new MantenimientoVehicular();
      kil.id = 0;
      kil.idUnidad = this.formularioGrp.get('unidad').value.id;
      kil.nomUnidad = this.formularioGrp.get('unidad').value.nombre;
      kil.idTipomantenimiento = this.formularioGrp.get('tipoMantenimiento').value.id;
      kil.nomTipoMantenimiento = this.formularioGrp.get('tipoMantenimiento').value.nombre;
      kil.idTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.id;
      kil.nomTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.nombre;
      kil.codAsigPresupuesto = this.formularioGrp.get('codAsigPresupuesto').value;
      kil.importeAsigPresupuesto = this.formularioGrp.get('importeAsigPresupuesto').value;

      console.log(kil);
      this.dialogRef.close(kil);
    } else {
      this.validateForm();
    }

  }

}
