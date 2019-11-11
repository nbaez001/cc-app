import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
import { Kilometraje } from 'src/app/model/kilometraje.model';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-reg-kilometraje',
  templateUrl: './reg-kilometraje.component.html',
  styleUrls: ['./reg-kilometraje.component.scss']
})
export class RegKilometrajeComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  vehiculos: Object[] = [
    { tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', ultMantenimiento: 'DIC 2018', estadoVehiculo: 'CON LIMITACIONES' },
    { tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', ultMantenimiento: 'DIC 2018', estadoVehiculo: 'OPERATIVO' }
  ];

  kilometrajeGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'vehiculo': {
      'required': 'Campo obligatorio'
    },
    'horaSalida': {
      'required': 'Campo obligatorio'
    },
    'horaLlegada': {
      'required': 'Campo obligatorio'
    },
    'kilometrajeSalida': {
      'required': 'Campo obligatorio'
    },
    'kilometrajeLLegada': {
      'required': 'Campo obligatorio'
    },
    'totalKilometraje': {
      'required': 'Campo obligatorio'
    },
    'lugarDestino': {
      'required': 'Campo obligatorio'
    },
    'codSismonitor': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'vehiculo': '',
    'horaSalida': '',
    'horaLlegada': '',
    'kilometrajeSalida': '',
    'kilometrajeLLegada': '',
    'totalKilometraje': '',
    'lugarDestino': '',
    'codSismonitor': ''
  };

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegKilometrajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService) { }

  ngOnInit() {
    this.kilometrajeGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tambo: ['', [Validators.required]],
      vehiculo: ['', [Validators.required]],
      horaSalida: ['', [Validators.required]],
      horaLlegada: ['', [Validators.required]],
      kilometrajeSalida: ['', [Validators.required]],
      kilometrajeLLegada: ['', [Validators.required]],
      totalKilometraje: ['', [Validators.required]],
      lugarDestino: ['', [Validators.required]],
      codSismonitor: ['', [Validators.required]],
      observacion: ['', []]
    });
    this.inicializarVariables();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.kilometrajeGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.kilometrajeGrp.get('unidad').setValue(this.unidades[0]);
    this.kilometrajeGrp.get('tambo').setValue(this.tambos[0]);
  }

  calcular(): void {
    this.kilometrajeGrp.get('totalKilometraje').setValue(
      this.kilometrajeGrp.get('kilometrajeLLegada').value - this.kilometrajeGrp.get('kilometrajeSalida').value
    );
  }

  guardar(): void {
    if (this.kilometrajeGrp.valid) {
      let kil = new Kilometraje();
      kil.id = 0;
      kil.unidad = this.kilometrajeGrp.get('unidad').value.nombre;
      kil.tambo = this.kilometrajeGrp.get('tambo').value.nombre;
      kil.tipo = this.kilometrajeGrp.get('vehiculo').value.tipo;
      kil.marca = this.kilometrajeGrp.get('vehiculo').value.marca;
      kil.placa = this.kilometrajeGrp.get('vehiculo').value.placa;
      kil.codComisionSISMONITOR = this.kilometrajeGrp.get('codSismonitor').value;
      kil.fechaComision = '07/11/2019';
      kil.horaLlegada = this.kilometrajeGrp.get('horaLlegada').value;
      kil.horaSalida = this.kilometrajeGrp.get('horaSalida').value;
      kil.kilometrajeLlegada = this.kilometrajeGrp.get('kilometrajeLLegada').value;
      kil.kilometrajeSalida = this.kilometrajeGrp.get('kilometrajeSalida').value;
      kil.kilometrosRecorrido = this.kilometrajeGrp.get('totalKilometraje').value;
      kil.lugarDestino = this.kilometrajeGrp.get('lugarDestino').value;
      kil.observaciones = this.kilometrajeGrp.get('observacion').value;

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