import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION } from 'src/app/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-reg-conf-mant-vehiculo',
  templateUrl: './reg-conf-mant-vehiculo.component.html',
  styleUrls: ['./reg-conf-mant-vehiculo.component.scss']
})
export class RegConfMantVehiculoComponent implements OnInit {
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
    'presupuesto': {
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
    'presupuesto': '',
    'codAsigPresupuesto': '',
    'montoPresupuesto': ''
  };

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegConfMantVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MantenimientoVehicular,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      presupuesto: ['', [Validators.required]],
    });
    this.inicializarVariables();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.formularioGrp.get('presupuesto').setValue(this.data.nomTipoAsigPresupuesto + ' N°' + this.data.codAsigPresupuesto + ' - ' + this.decimalPipe.transform(this.data.importeAsigPresupuesto, '1.2-2'));
    this.cargarUnidades();
  }


  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));

    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
    }
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
