import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PARTIDAS, METAS } from 'src/app/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reg-asig-presupuestal',
  templateUrl: './reg-asig-presupuestal.component.html',
  styleUrls: ['./reg-asig-presupuestal.component.scss']
})
export class RegAsigPresupuestalComponent implements OnInit {
  formularioGrp: FormGroup;

  metas: Object[] = METAS;
  partidas: Object[] = PARTIDAS;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegAsigPresupuestalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Object) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      meta: ['', [Validators.required]],
      partida: ['', [Validators.required]]
    });

    this.formularioGrp.get('meta').setValue(this.metas[0]);
    this.formularioGrp.get('partida').setValue(this.partidas[0]);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}