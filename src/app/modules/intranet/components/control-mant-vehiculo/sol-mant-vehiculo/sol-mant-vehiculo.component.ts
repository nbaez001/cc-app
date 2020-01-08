import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { _estadosRequerimientoMant, TIPOSMANTENIMIENTO } from 'src/app/common';

@Component({
  selector: 'app-sol-mant-vehiculo',
  templateUrl: './sol-mant-vehiculo.component.html',
  styleUrls: ['./sol-mant-vehiculo.component.scss']
})
export class SolMantVehiculoComponent implements OnInit {
  formularioGrp: FormGroup;
  messages = {
    'asunto': {
      'required': 'Campo obligatorio'
    },
    'detalle': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'asunto': '',
    'detalle': ''
  };

  tiposMantenimiento = [];

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<SolMantVehiculoComponent>,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    @Inject(MAT_DIALOG_DATA) public data: MantenimientoVehicular) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      asunto: [{ value: this.user.perfil.id == 3 ? this.data.asuntoSolicitud : '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      detalle: [{ value: this.user.perfil.id == 3 ? this.data.detalleSolicitud : 'ESTIMADO SR. ANGEL COLLANTES: ...', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
    });
    this.inicializarVariables();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.cargarTipomantenimiento();
  }

  public cargarTipomantenimiento() {
    this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));
    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
    } else {
      console.log(this.data);
      console.log(this.tiposMantenimiento);
      console.log(this.tiposMantenimiento.filter(el => { el.id == this.data.idTipomantenimiento }));
      this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
    }
  }

  guardar(): void {
    if (this.formularioGrp.valid) {
      let kil = new MantenimientoVehicular();
      kil.id = 0;
      kil.idTipomantenimiento = this.formularioGrp.get('tipoMantenimiento').value.id;
      kil.nomTipoMantenimiento = this.formularioGrp.get('tipoMantenimiento').value.nombre;
      kil.asuntoSolicitud = this.formularioGrp.get('asunto').value;
      kil.detalleSolicitud = this.formularioGrp.get('detalle').value;

      kil.idEstadoMantenimiento = _estadosRequerimientoMant[0].id;
      kil.nomEstadoMantenimiento = _estadosRequerimientoMant[0].nombre;

      this.dialogRef.close(kil);
    } else {
      this.validateForm();
    }

  }
}
