import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
import { Kilometraje } from 'src/app/model/kilometraje.model';

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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegKilometrajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

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
      observacion: ['', [Validators.required]]
    });
    this.inicializarVariables();
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
    let kil = new Kilometraje();
    kil.id = 0;
    kil.unidad = this.kilometrajeGrp.get('unidad').value.nombre;
    kil.tambo = this.kilometrajeGrp.get('tambo').value.nombre;
    kil.tipo = this.kilometrajeGrp.get('vehiculo').value.tipo;
    kil.marca = this.kilometrajeGrp.get('vehiculo').value.marca;
    kil.placa = this.kilometrajeGrp.get('vehiculo').value.placa;
    kil.codComisionSISMONITOR = this.kilometrajeGrp.get('codSismonitor').value;
    kil.fechaComision = '07/11/2019';
    kil.horaLlegada=this.kilometrajeGrp.get('horaLlegada').value;
    kil.horaSalida=this.kilometrajeGrp.get('horaSalida').value;
    kil.kilometrajeLlegada=this.kilometrajeGrp.get('kilometrajeLLegada').value;
    kil.kilometrajeSalida=this.kilometrajeGrp.get('kilometrajeSalida').value;
    kil.kilometrosRecorrido=this.kilometrajeGrp.get('totalKilometraje').value;
    kil.lugarDestino=this.kilometrajeGrp.get('lugarDestino').value;
    kil.observaciones=this.kilometrajeGrp.get('observacion').value;

    this.dialogRef.close(kil);
  }

}


export interface DialogData {
  animal: string;
  name: string;
}