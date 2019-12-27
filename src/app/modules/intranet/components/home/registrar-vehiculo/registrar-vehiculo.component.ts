import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TIPOSCOMBUSTIBLE, ESTADOVEHICULO } from 'src/app/common';
import { Master } from 'src/app/model/master.model';
import { Vehiculo } from 'src/app/model/vehiculo.model';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    @Inject(MAT_DIALOG_DATA) public data: Vehiculo,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.vehiculoGrp = this.fb.group({
      estadovehiculo: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tipocombustible: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]]
    });

    this.vehiculoGrp.get('estadovehiculo').setValue((this.estadosvehiculo.filter(el => el.id == this.data.idEstado))[0]);
    this.vehiculoGrp.get('tipocombustible').setValue((this.tiposcombustible.filter(el => el.id == this.data.idTipocombustible))[0]);

    console.log(this.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get getUser() {
    return this.user;
  }

}