import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Kilometraje } from 'src/app/model/kilometraje.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-observacion',
  templateUrl: './ver-observacion.component.html',
  styleUrls: ['./ver-observacion.component.scss']
})
export class VerObservacionComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObservacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Kilometraje,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: [{ value: this.data.observaciones, disabled: true }, Validators.required]
    });
  }

}