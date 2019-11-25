import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HorasDeslizador } from 'src/app/model/horas-deslizador.model';

@Component({
  selector: 'app-ver-obs-deslizador',
  templateUrl: './ver-obs-deslizador.component.html',
  styleUrls: ['./ver-obs-deslizador.component.scss']
})
export class VerObsDeslizadorComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObsDeslizadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HorasDeslizador,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: ['', Validators.required]
    });

    this.observacionGrp.get('observacion').setValue(this.data.observacion);
  }

}
