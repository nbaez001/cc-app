import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  nomUsuario: string;
  perfil: Perfil;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  ngOnInit() {
    this.nomUsuario = sessionStorage.getItem('usuario');
    this.perfil = JSON.parse(sessionStorage.getItem('perfil'));
    console.log(sessionStorage.getItem('perfil'));
  }

  salir() {
    this.router.navigate(['/sesion/login']);
  }
}
