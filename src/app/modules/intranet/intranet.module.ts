import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

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
import { CuadroControlComponent } from './components/cuadro-control/cuadro-control.component';
import { RegArtEmergenciaComponent } from './components/home/reg-art-emergencia/reg-art-emergencia.component';
import { RegConductorComponent } from './components/home/reg-conductor/reg-conductor.component';
import { BandejaAdquisicionComponent } from './components/bandeja-adquisicion/bandeja-adquisicion.component';
import { BdjAsigEconPresupuestalComponent } from './components/bdj-asig-econ-presupuestal/bdj-asig-econ-presupuestal.component';
import { RegAsigPresupuestalComponent } from './components/bdj-asig-econ-presupuestal/reg-asig-presupuestal/reg-asig-presupuestal.component';
import { RegAdquisicionComponent } from './components/bandeja-adquisicion/reg-adquisicion/reg-adquisicion.component';
import { BandejaOrdenCompraComponent } from './components/bandeja-orden-compra/bandeja-orden-compra.component';
import { ConfOrdenCompraComponent } from './components/bandeja-orden-compra/conf-orden-compra/conf-orden-compra.component';

@NgModule({
  entryComponents: [
    RegistrarVehiculoComponent,
    RegistrarRevTecnicaComponent,
    RegistrarSoatComponent,
    RegistrarAsigCombustComponent,
    RegKilometrajeComponent,
    VerObservacionComponent,
    RegConsumoGeneradorComponent,
    RegArtEmergenciaComponent,
    RegConductorComponent,
    RegAsigPresupuestalComponent,
    RegAdquisicionComponent
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
    BandejaGenElectricoComponent,
    CuadroControlComponent,
    RegArtEmergenciaComponent,
    RegConductorComponent,
    BandejaAdquisicionComponent,
    BdjAsigEconPresupuestalComponent,
    RegAsigPresupuestalComponent,
    RegAdquisicionComponent,
    BandejaOrdenCompraComponent,
    ConfOrdenCompraComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule, //Routing del modulo separado
    MaterialModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [
    DatePipe
  ]
})
export class IntranetModule { }
