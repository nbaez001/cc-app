import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntranetComponent } from './modules/intranet/intranet.component';
import { SesionComponent } from './modules/sesion/sesion.component';
import { MaterialModule } from './modules/material.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SesionComponent, //componente de los modulos separados
    IntranetComponent, //componente de los modulos separados
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    Ng4LoadingSpinnerModule.forRoot(),
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,//PARA ICONO SVG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
