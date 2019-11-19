import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsumoGenerador } from 'src/app/model/consumo-generador.model';

@Component({
  selector: 'app-ver-observacion-cons',
  templateUrl: './ver-observacion-cons.component.html',
  styleUrls: ['./ver-observacion-cons.component.scss']
})
export class VerObservacionConsComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObservacionConsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsumoGenerador) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: ['', Validators.required]
    });

    this.observacionGrp.get('observacion').setValue(this.data.observacion);
  }



}
