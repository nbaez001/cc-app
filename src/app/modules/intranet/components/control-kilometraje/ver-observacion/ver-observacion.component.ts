import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-ver-observacion',
  templateUrl: './ver-observacion.component.html',
  styleUrls: ['./ver-observacion.component.scss']
})
export class VerObservacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VerObservacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}


export interface DialogData {
  animal: string;
  name: string;
}