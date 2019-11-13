import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UNIDADES, TAMBOS, TIPOASIGNACION, PARTIDAS } from 'src/app/common';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';

@Component({
  selector: 'app-reg-asig-presupuestal',
  templateUrl: './reg-asig-presupuestal.component.html',
  styleUrls: ['./reg-asig-presupuestal.component.scss']
})
export class RegAsigPresupuestalComponent implements OnInit {
  asigPresupuestalGrp: FormGroup;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tipoasignacion: Object[] = TIPOASIGNACION;
  partidas: Object[] = PARTIDAS;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegAsigPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.asigPresupuestalGrp = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


export interface DialogData {
  animal: string;
  name: string;
}