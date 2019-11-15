import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ControlKilometrajeComponent } from './components/control-kilometraje/control-kilometraje.component';
import { ControlGenElectricoComponent } from './components/control-gen-electrico/control-gen-electrico.component';
import { CuadroControlComponent } from './components/cuadro-control/cuadro-control.component';
import { BdjAsigEconPresupuestalComponent } from './components/bdj-asig-econ-presupuestal/bdj-asig-econ-presupuestal.component';
import { BandejaAdquisicionComponent } from './components/bandeja-adquisicion/bandeja-adquisicion.component';
import { BandejaGenElectricoComponent } from './components/bandeja-gen-electrico/bandeja-gen-electrico.component';
import { BandejaOrdenCompraComponent } from './components/bandeja-orden-compra/bandeja-orden-compra.component';

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
        path: 'kilometraje',
        component: ControlKilometrajeComponent,
        data: { title: 'Kilometraje' }
      }, {
        path: 'generador-electrico',
        component: ControlGenElectricoComponent,
        data: { title: 'Generador electrico' }
      }, {
        path: 'asignacion-econ-presupuestal',
        component: BdjAsigEconPresupuestalComponent,
        data: { title: 'Bandeja asignacion economico presupuestal' }
      }, {
        path: 'bandeja-adquisicion',
        component: BandejaAdquisicionComponent,
        data: { title: 'Bandeja adquisicion' }
      }, {
        path: 'cuadro-control',
        component: CuadroControlComponent,
        data: { title: 'Cuadro control' }
      }, {
        path: 'orden-compra',
        component: BandejaOrdenCompraComponent,
        data: { title: 'Ordenes de compra' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(intranetRoutes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
