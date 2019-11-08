import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Usuario } from 'src/app/model/usuario.model';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  loginForm: FormGroup;

  perfiles: Perfil[] = [
    { id: 1, nombre: "GESTOR PLATAFORMA", abreviacion: 'GP' },
    { id: 2, nombre: "JEFE UNIDAD TERRITORIAL", abreviacion: 'JUT' },
    { id: 3, nombre: "ENCARGADO DE TRANSPORTES", abreviacion: 'ET' }
  ];

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

  constructor(private fb: FormBuilder, private router: Router) { }

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

    sessionStorage.setItem('user', JSON.stringify(this.usuario));
    console.log(this.usuario);
    this.router.navigate(['/intranet/home']);
  }

}
