import { Component, Inject , Input} from '@angular/core';
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
    // this.user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.user);
  }

  get getUser(): UsuarioService {
    return this.user;
  }

  public consultarUsuario() {
    let usuario: Usuario = JSON.parse(sessionStorage.getItem('user'));

    this.user.setId = 1;
    this.user.setUsuario = usuario.usuario;
    this.user.setContrasenia = usuario.contrasenia;
    this.user.setPerfil = usuario.perfil;
  }

  salir() {
    this.router.navigate(['/sesion/login']);
  }
}
