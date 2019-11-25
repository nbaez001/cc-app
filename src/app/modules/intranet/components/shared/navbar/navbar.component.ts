import { Component, Inject, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';
import { Usuario } from 'src/app/model/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() showSubmenu1: boolean;
  @Input() showSubmenu2: boolean;
  @Input() showSubmenu3: boolean;
  @Input() showSubmenu4: boolean;
  @Input() showSubmenu: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.consultarUsuario();
    console.log(this.user);
  }

  get getUser(): UsuarioService {
    return this.user;
  }

  public consultarUsuario() {
    let usuario: Usuario = JSON.parse(localStorage.getItem('user'));

    console.log('USUARIO');
    console.log(usuario);

    this.user.setId = 1;
    this.user.setUsuario = usuario.usuario;
    this.user.setContrasenia = usuario.contrasenia;
    this.user.setPerfil = usuario.perfil;
    this.user.idUnidad = usuario.idUnidad;
    this.user.idTambo = usuario.idTambo;
  }

  salir() {
    this.router.navigate(['/sesion/login']);
  }
}
