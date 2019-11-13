import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Unidad } from 'src/app/model/unidad.model';
import { Tambo } from 'src/app/model/tambo.model';
import { UNIDADES, TAMBOS, TIPOSCOMBUSTIBLE } from 'src/app/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../../home/registrar-vehiculo/registrar-vehiculo.component';

@Component({
  selector: 'app-reg-adquisicion',
  templateUrl: './reg-adquisicion.component.html',
  styleUrls: ['./reg-adquisicion.component.scss']
})
export class RegAdquisicionComponent implements OnInit {
  adquisicionGrp: FormGroup;

  unidades: Unidad[] = UNIDADES;
  tambos: Tambo[] = TAMBOS;
  tiposcombustible: Object[] = TIPOSCOMBUSTIBLE;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegAdquisicionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.adquisicionGrp = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}