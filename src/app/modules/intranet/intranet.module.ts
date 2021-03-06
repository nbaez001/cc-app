import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';

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
import { VerObservacionConsComponent } from './components/control-gen-electrico/ver-observacion-cons/ver-observacion-cons.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { BdjAsigPresupuestalComponent } from './components/bdj-asig-presupuestal/bdj-asig-presupuestal.component';
import { BdjEjecPresupuestalComponent } from './components/bdj-ejec-presupuestal/bdj-ejec-presupuestal.component';
import { RegEjecPresupuestalComponent } from './components/bdj-ejec-presupuestal/reg-ejec-presupuestal/reg-ejec-presupuestal.component';
import { DistEjecPresupuestalComponent } from './components/bdj-ejec-presupuestal/dist-ejec-presupuestal/dist-ejec-presupuestal.component';
import { BandejaDeslizadoresComponent } from './components/bandeja-deslizadores/bandeja-deslizadores.component';
import { ControlHrsDeslizadorComponent } from './components/control-hrs-deslizador/control-hrs-deslizador.component';
import { RegAsigPresupuestalComponent } from './components/bdj-asig-presupuestal/reg-asig-presupuestal/reg-asig-presupuestal.component';
import { CuadroControlTamboComponent } from './components/cuadro-control-tambo/cuadro-control-tambo.component';
import { RegHrsDeslizadorComponent } from './components/control-hrs-deslizador/reg-hrs-deslizador/reg-hrs-deslizador.component';
import { VerObsDeslizadorComponent } from './components/control-hrs-deslizador/ver-obs-deslizador/ver-obs-deslizador.component';
import { RegLubricantesAfinesComponent } from './components/home/reg-lubricantes-afines/reg-lubricantes-afines.component';
import { RegLubricantesAfines2Component } from './components/bandeja-gen-electrico/reg-lubricantes-afines2/reg-lubricantes-afines2.component';
import { RegLubricantesAfines3Component } from './components/bandeja-deslizadores/reg-lubricantes-afines3/reg-lubricantes-afines3.component';
import { ControlMantVehiculoComponent } from './components/control-mant-vehiculo/control-mant-vehiculo.component';
import { RegMantVehiculoComponent } from './components/control-mant-vehiculo/reg-mant-vehiculo/reg-mant-vehiculo.component';
import { RegDetMatVehiculoComponent } from './components/control-mant-vehiculo/reg-det-mat-vehiculo/reg-det-mat-vehiculo.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ControlSolicitudMantComponent } from './components/control-solicitud-mant/control-solicitud-mant.component';
import { RegSolicitudMantComponent } from './components/control-solicitud-mant/reg-solicitud-mant/reg-solicitud-mant.component';
import { SnackBarComponent } from './components/shared/snack-bar/snack-bar.component';
import { BuscarSolicitudMantComponent } from './components/control-mant-vehiculo/reg-mant-vehiculo/buscar-solicitud-mant/buscar-solicitud-mant.component';
import { BuscarOrdServcompComponent } from './components/control-mant-vehiculo/reg-mant-vehiculo/buscar-ord-servcomp/buscar-ord-servcomp.component';
import { BdjBancosComponent } from './components/config/bdj-bancos/bdj-bancos.component';
import { RegBancoComponent } from './components/config/bdj-bancos/reg-banco/reg-banco.component';
import { BdjProveedoresComponent } from './components/config/bdj-proveedores/bdj-proveedores.component';
import { RegProveedorComponent } from './components/config/bdj-proveedores/reg-proveedor/reg-proveedor.component';
import { BdjOrdCompraComponent } from './components/config/bdj-ord-compra/bdj-ord-compra.component';
import { IptOrdCompraComponent } from './components/config/bdj-ord-compra/ipt-ord-compra/ipt-ord-compra.component';
import { CfgOrdCompraComponent } from './components/config/bdj-ord-compra/cfg-ord-compra/cfg-ord-compra.component';
import { BdjOrdServicioComponent } from './components/config/bdj-ord-servicio/bdj-ord-servicio.component';
import { CfgOrdServComponent } from './components/config/bdj-ord-servicio/cfg-ord-serv/cfg-ord-serv.component';
import { IptOrdServComponent } from './components/config/bdj-ord-servicio/ipt-ord-serv/ipt-ord-serv.component';
import { BuscProveedorComponent } from './components/config/bdj-ord-compra/cfg-ord-compra/busc-proveedor/busc-proveedor.component';
import { BdjFondoEcgComponent } from './components/config/bdj-fondo-ecg/bdj-fondo-ecg.component';
import { RegFondoEcgComponent } from './components/config/bdj-fondo-ecg/reg-fondo-ecg/reg-fondo-ecg.component';
import { ReqCombustibleComponent } from './components/req-combustible/req-combustible.component';
import { RegReqCombustibleComponent } from './components/req-combustible/reg-req-combustible/reg-req-combustible.component';
import { RegSolFondecgComponent } from './components/control-mant-vehiculo/reg-mant-vehiculo/reg-sol-fondecg/reg-sol-fondecg.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { VisorPdfComponent } from './components/shared/visor-pdf/visor-pdf.component';

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
    RegEjecPresupuestalComponent,
    DistEjecPresupuestalComponent,
    VerObservacionConsComponent,
    RegAsigPresupuestalComponent,
    RegHrsDeslizadorComponent,
    VerObsDeslizadorComponent,
    RegLubricantesAfinesComponent,
    RegLubricantesAfines2Component,
    RegLubricantesAfines3Component,
    RegMantVehiculoComponent,
    RegDetMatVehiculoComponent,
    RegSolicitudMantComponent,
    BuscarSolicitudMantComponent,
    BuscarOrdServcompComponent,
    RegBancoComponent,
    RegProveedorComponent,
    IptOrdCompraComponent,
    CfgOrdCompraComponent,
    IptOrdServComponent,
    CfgOrdServComponent,
    BuscProveedorComponent,
    RegFondoEcgComponent,
    RegReqCombustibleComponent,
    RegSolFondecgComponent,
    VisorPdfComponent,
  ],
  declarations: [
    RegistrarVehiculoComponent,
    RegistrarRevTecnicaComponent,
    RegistrarSoatComponent,
    RegistrarAsigCombustComponent,
    RegKilometrajeComponent,
    VerObservacionComponent,
    RegConsumoGeneradorComponent,
    RegArtEmergenciaComponent,
    RegConductorComponent,
    RegEjecPresupuestalComponent,
    DistEjecPresupuestalComponent,
    VerObservacionConsComponent,
    RegAsigPresupuestalComponent,
    RegHrsDeslizadorComponent,
    VerObsDeslizadorComponent,
    RegLubricantesAfinesComponent,
    RegLubricantesAfines2Component,
    RegLubricantesAfines3Component,
    RegMantVehiculoComponent,
    RegDetMatVehiculoComponent,
    RegSolicitudMantComponent,
    BuscarSolicitudMantComponent,
    BuscarOrdServcompComponent,
    RegBancoComponent,
    RegProveedorComponent,
    IptOrdCompraComponent,
    CfgOrdCompraComponent,
    IptOrdServComponent,
    CfgOrdServComponent,
    BuscProveedorComponent,
    RegFondoEcgComponent,
    RegReqCombustibleComponent,
    RegSolFondecgComponent,
    VisorPdfComponent,


    HomeComponent, //Declaracion de nuestro componente
    NavbarComponent,
    RegistrarRevTecnicaComponent,
    ControlKilometrajeComponent,
    ControlGenElectricoComponent,
    BandejaGenElectricoComponent,
    CuadroControlComponent,
    BdjAsigPresupuestalComponent,
    BdjEjecPresupuestalComponent,
    BandejaDeslizadoresComponent,
    ControlHrsDeslizadorComponent,
    CuadroControlTamboComponent,
    ControlMantVehiculoComponent,
    ControlSolicitudMantComponent,
    SnackBarComponent,
    BdjBancosComponent,
    BdjProveedoresComponent,
    BdjOrdCompraComponent,
    BdjOrdServicioComponent,
    BdjFondoEcgComponent,
    ReqCombustibleComponent,
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule, //Routing del modulo separado
    MaterialModule,
    Ng4LoadingSpinnerModule.forRoot(),
    CKEditorModule,
    PdfViewerModule,
  ],
  providers: [
    DatePipe,
    DecimalPipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }//DATEPICKER MUESTRA LA FECHA EN FORMATO DD/MM/YYYY
  ]
})
export class IntranetModule { }
