import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PERFILES } from 'src/app/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  loginForm: FormGroup;

  perfiles: Perfil[] = PERFILES;

  messages = {
    'usuario': {
      'required': 'El campo es obligatorio'
    },
    'contrasenia': {
      'required': 'El campo es obligatorio'
    },
    'perfil': {
      'required': 'El campo es obligatorio'
    }
  };
  formErrors = {
    'usuario': '',
    'contrasenia': '',
    'perfil': ''
  };

  constructor(private fb: FormBuilder, private router: Router, @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
      perfil: ['', [Validators.required]]
    });
  }

  autenticar() {
    this.usuario.usuario = this.loginForm.get('usuario').value;
    this.usuario.contrasenia = this.loginForm.get('contrasenia').value;
    this.usuario.perfil = this.loginForm.get('perfil').value;
    if (this.usuario.perfil.id == 1 || this.usuario.perfil.id == 2) {
      this.usuario.idUnidad = 1;
      if (this.usuario.perfil.id == 1) {//GESTOR PLATAFORMA
        this.usuario.idTambo = 1;
      } else {
        this.usuario.idTambo = 0;
      }
    } else {
      this.usuario.idTambo = 0;
      this.usuario.idUnidad = 0;
    }

    localStorage.setItem('user', JSON.stringify(this.usuario));
    this.user.setId = 1;
    this.user.setUsuario = this.usuario.usuario;
    this.user.setContrasenia = this.usuario.contrasenia;
    this.user.setPerfil = this.usuario.perfil;
    this.user.setIdUnidad = this.usuario.idUnidad;
    this.user.setIdTambo = this.usuario.idTambo;
    console.log(this.usuario);
    this.router.navigate(['/intranet/home']);
  }

}
