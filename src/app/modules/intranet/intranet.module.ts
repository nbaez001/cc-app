import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegistrarVehiculoComponent } from './components/home/registrar-vehiculo/registrar-vehiculo.component';
import { RegistrarRevTecnicaComponent } from './components/home/registrar-rev-tecnica/registrar-rev-tecnica.component';
import { RegistrarSoatComponent } from './components/home/registrar-soat/registrar-soat.component';
import { RegistrarAsigCombustComponent } from './components/home/registrar-asig-combust/registrar-asig-combust.component';
import { ControlKilometrajeComponent } from './components/control-kilometraje/control-kilometraje.component';
import { RegKilometrajeComponent } from './components/control-kilometraje/reg-kilometraje/reg-kilometraje.component';
import { VerObservacionComponent } from './components/control-kilometraje/ver-observacion/ver-observacion.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ControlGenElectricoComponent } from './components/control-gen-electrico/control-gen-electrico.component';
import { RegConsumoGeneradorComponent } from './components/control-gen-electrico/reg-consumo-generador/reg-consumo-generador.component';
import { BandejaGenElectricoComponent } from './components/bandeja-gen-electrico/bandeja-gen-electrico.component';

@NgModule({
  entryComponents: [
    RegistrarVehiculoComponent,
    RegistrarRevTecnicaComponent,
    RegistrarSoatComponent,
    RegistrarAsigCombustComponent,
    RegKilometrajeComponent,
    VerObservacionComponent,
    RegConsumoGeneradorComponent
  ],
  declarations: [
    HomeComponent, //Declaracion de nuestro componente
    NavbarComponent,
    RegistrarVehiculoComponent,
    RegistrarRevTecnicaComponent,
    RegistrarSoatComponent,
    RegistrarAsigCombustComponent,
    ControlKilometrajeComponent,
    RegKilometrajeComponent,
    VerObservacionComponent,
    ControlGenElectricoComponent,
    RegConsumoGeneradorComponent,
    BandejaGenElectricoComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule, //Routing del modulo separado
    MaterialModule,
    Ng4LoadingSpinnerModule.forRoot()
  ]
})
export class IntranetModule { }
