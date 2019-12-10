import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DataDialog } from 'src/app/model/data-dialog.model';

@Component({
  selector: 'app-reg-art-emergencia',
  templateUrl: './reg-art-emergencia.component.html',
  styleUrls: ['./reg-art-emergencia.component.scss']
})
export class RegArtEmergenciaComponent implements OnInit {
  artEmergenciaGrp: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegArtEmergenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.artEmergenciaGrp = this.fb.group({
      observacion: [{ value: 'OBSERVACIONES MUCHOS', disabled: this.user.perfil.id == 3 }, [Validators.required]]
    });

    console.log(this.user);
  }

  get getUser() {
    return this.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}