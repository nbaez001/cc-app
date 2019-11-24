import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsumoDeslizador } from 'src/app/model/consumo-deslizador.model';

@Component({
  selector: 'app-ver-obs-deslizador',
  templateUrl: './ver-obs-deslizador.component.html',
  styleUrls: ['./ver-obs-deslizador.component.scss']
})
export class VerObsDeslizadorComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObsDeslizadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsumoDeslizador) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: ['', Validators.required]
    });

    this.observacionGrp.get('observacion').setValue(this.data.observacion);
  }

}
