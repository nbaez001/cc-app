import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ControlKilometrajeComponent } from './components/control-kilometraje/control-kilometraje.component';
import { ControlGenElectricoComponent } from './components/control-gen-electrico/control-gen-electrico.component';
import { CuadroControlComponent } from './components/cuadro-control/cuadro-control.component';
import { BandejaGenElectricoComponent } from './components/bandeja-gen-electrico/bandeja-gen-electrico.component';
import { BdjAsigPresupuestalComponent } from './components/bdj-asig-presupuestal/bdj-asig-presupuestal.component';
import { BdjEjecPresupuestalComponent } from './components/bdj-ejec-presupuestal/bdj-ejec-presupuestal.component';
import { BandejaDeslizadoresComponent } from './components/bandeja-deslizadores/bandeja-deslizadores.component';
import { CuadroControlTamboComponent } from './components/cuadro-control-tambo/cuadro-control-tambo.component';
import { ControlHrsDeslizadorComponent } from './components/control-hrs-deslizador/control-hrs-deslizador.component';
import { ControlMantVehiculoComponent } from './components/control-mant-vehiculo/control-mant-vehiculo.component';
import { ControlSolicitudMantComponent } from './components/control-solicitud-mant/control-solicitud-mant.component';
import { BdjBancosComponent } from './components/config/bdj-bancos/bdj-bancos.component';
import { BdjProveedoresComponent } from './components/config/bdj-proveedores/bdj-proveedores.component';
import { BdjOrdCompraComponent } from './components/config/bdj-ord-compra/bdj-ord-compra.component';
import { BdjOrdServicioComponent } from './components/config/bdj-ord-servicio/bdj-ord-servicio.component';
import { BdjFondoEcgComponent } from './components/config/bdj-fondo-ecg/bdj-fondo-ecg.component';

const intranetRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Home' }
      }, {
        path: 'generador',
        component: BandejaGenElectricoComponent,
        data: { title: 'Generadores' }
      }, {
        path: 'deslizador',
        component: BandejaDeslizadoresComponent,
        data: { title: 'Deslizadores' }
      }, {
        path: 'kilometraje',
        component: ControlKilometrajeComponent,
        data: { title: 'Kilometraje' }
      }, {
        path: 'horas-generador',
        component: ControlGenElectricoComponent,
        data: { title: 'Horas Generador electrico' }
      }, {
        path: 'horas-deslizador',
        component: ControlHrsDeslizadorComponent,
        data: { title: 'Hpras deslizador' }
      }, {
        path: 'asignacion-presupuestal',
        component: BdjAsigPresupuestalComponent,
        data: { title: 'Bandeja asignacion economico presupuestal' }
      }, {
        path: 'avance-econ-presupuestal',
        component: BdjEjecPresupuestalComponent,
        data: { title: 'Bandeja ejecucion economico presupuestal' }
      }, {
        path: 'cuadro-control',
        component: CuadroControlComponent,
        data: { title: 'Cuadro control general' }
      }, {
        path: 'cuadro-control-tambo',
        component: CuadroControlTamboComponent,
        data: { title: 'Cuadro control tambos' }
      }, {
        path: 'control-mantenimiento',
        component: ControlMantVehiculoComponent,
        data: { title: 'Mantenimiento vehicular' }
      }, {
        path: 'control-solicitud-mant',
        component: ControlSolicitudMantComponent,
        data: { title: 'Solicitud de mantenimiento' }
      }, {
        path: 'config/bancos',
        component: BdjBancosComponent,
        data: { title: 'Bandeja bancos' }
      }, {
        path: 'config/proveedores',
        component: BdjProveedoresComponent,
        data: { title: 'Bandeja proveedores' }
      }, {
        path: 'config/orden-compra',
        component: BdjOrdCompraComponent,
        data: { title: 'Bandeja orden compra' }
      }, {
        path: 'config/orden-servicio',
        component: BdjOrdServicioComponent,
        data: { title: 'Bandeja orden servicio' }
      }, {
        path: 'config/fondo-encargo',
        component: BdjFondoEcgComponent,
        data: { title: 'Bandeja fondo encargo' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(intranetRoutes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
