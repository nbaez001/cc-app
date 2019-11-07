import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Kilometraje } from 'src/app/model/kilometraje.model';

@Component({
  selector: 'app-ver-observacion',
  templateUrl: './ver-observacion.component.html',
  styleUrls: ['./ver-observacion.component.scss']
})
export class VerObservacionComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObservacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Kilometraje) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: ['', Validators.required]
    });

    this.observacionGrp.get('observacion').setValue(this.data.observaciones);
  }

}