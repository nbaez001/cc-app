import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reg-art-emergencia',
  templateUrl: './reg-art-emergencia.component.html',
  styleUrls: ['./reg-art-emergencia.component.scss']
})
export class RegArtEmergenciaComponent implements OnInit {
  artEmergenciaGrp: FormGroup;

  unidades: Object[];
  tambos: Object[];
  tiposvehiculo: Object[];
  estadosvehiculo: Object[];
  tiposcombustible: Object[];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegArtEmergenciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.artEmergenciaGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.unidades = [
      { id: 1, nombre: 'UNIDAD TERRITORIAL DE AYACUCHO NORTE' },
      { id: 2, nombre: 'UNIDAD TERRITORIAL DE HUANCAVELICA' },
      { id: 3, nombre: 'UNIDAD TERRITORIAL DE CUSCO' }
    ];

    this.tambos = [
      { id: 1, nombre: 'ANCARPATA' },
      { id: 2, nombre: 'BARRIO VISTA ALEGRE' },
      { id: 3, nombre: 'CCERAOCRO' },
      { id: 4, nombre: 'CHACHASPATA' }
    ];

    this.tiposvehiculo = [
      { id: 1, nombre: 'CAMIONETA' },
      { id: 2, nombre: 'MOTOCICLETA' }
    ];

    this.estadosvehiculo = [
      { id: 1, nombre: 'OPERATIVO' },
      { id: 2, nombre: 'NO OPERATIVO' },
      { id: 3, nombre: 'CON LIMITACIONES' }
    ];

    this.tiposcombustible = [
      { id: 1, nombre: 'DIESEL B5' },
      { id: 2, nombre: 'GASOHOL 90' }
    ];
  }

  get getUser(){
    return this.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


export interface DialogData {
  animal: string;
  name: string;
}