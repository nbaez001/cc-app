import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-obs-mant',
  templateUrl: './ver-obs-mant.component.html',
  styleUrls: ['./ver-obs-mant.component.scss']
})
export class VerObsMantComponent implements OnInit {
  observacionGrp: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VerObsMantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MantenimientoVehicular,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    console.log('modal');
    console.log(this.data);
    this.observacionGrp = this.fb.group({
      observacion: ['', Validators.required]
    });

    this.observacionGrp.get('observacion').setValue(this.data.obsRecepccionUURR);
  }

}
