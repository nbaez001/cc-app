import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TIPOSCOMBUSTIBLE, ESTADOVEHICULO } from 'src/app/common';
import { Master } from 'src/app/model/master.model';
import { Vehiculo } from 'src/app/model/vehiculo.model';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.component.html',
  styleUrls: ['./registrar-vehiculo.component.scss']
})
export class RegistrarVehiculoComponent implements OnInit {
  vehiculoGrp: FormGroup;

  estadosvehiculo: Master[] = ESTADOVEHICULO;
  tiposcombustible: Master[] = TIPOSCOMBUSTIBLE;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegistrarVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vehiculo) { }

  ngOnInit() {
    this.vehiculoGrp = this.fb.group({
      fechaMantenimiento: ['', [Validators.required]],
      estadovehiculo: ['', [Validators.required]],
      tipocombustible: ['', [Validators.required]]
    });

    this.vehiculoGrp.get('fechaMantenimiento').setValue(this.data.fechaMantenimiento);
    this.vehiculoGrp.get('estadovehiculo').setValue((this.estadosvehiculo.filter(el => el.id == this.data.idEstado))[0]);
    this.vehiculoGrp.get('tipocombustible').setValue((this.tiposcombustible.filter(el => el.id == this.data.idTipocombustible))[0]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}