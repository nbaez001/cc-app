import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsumoGenerador } from 'src/app/model/consumo-generador.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-observacion-cons',
  templateUrl: './ver-observacion-cons.component.html',
  styleUrls: ['./ver-observacion-cons.component.scss']
})
export class VerObservacionConsComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObservacionConsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsumoGenerador,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: [{ value: this.data.observacion, disabled: true }, Validators.required]
    });
  }



}
