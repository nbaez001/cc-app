import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadroControl } from 'src/app/model/cuadro-control.model';
import { UNIDADES, TAMBOS, CUADROCONTROL } from 'src/app/common';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LayoutStyleBuilder } from '@angular/flex-layout';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cuadro-control',
  templateUrl: './cuadro-control.component.html',
  styleUrls: ['./cuadro-control.component.scss']
})
export class CuadroControlComponent implements OnInit {
  bandejaGrp: FormGroup;
  unidades = UNIDADES;
  anios: Object[] = [{ valor: 2019 }, { valor: 2018 }, { valor: 2017 }];
  meses: Object[] = [{ valor: 0, nombre: 'ENERO' }, { valor: 1, nombre: 'FEBRERO' }, { valor: 2, nombre: 'MARZO' }, { valor: 3, nombre: 'ABRIL' }, { valor: 4, nombre: 'MAYO' }, { valor: 5, nombre: 'JUNIO' }, { valor: 6, nombre: 'JULIO' }, { valor: 7, nombre: 'AGOSTO' }, { valor: 8, nombre: 'SETIEMBRE' }, { valor: 9, nombre: 'OCTUBRE' }, { valor: 10, nombre: 'NOVIEMBRE' }, { valor: 11, nombre: 'DICIEMBRE' }];

  listaControl: CuadroControl[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          unidad: ['', [Validators.required]],
          anio: ['', [Validators.required]]
        });

        // this.definirTabla();
        this.inicializarVariables();
        clearInterval(validarIntervalo);
      }
    }, 100);
  }

  get getUser() {
    return this.user;
  }

  public inicializarVariables(): void {
    this.cargarUnidades();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    this.bandejaGrp.get('anio').setValue(this.anios[0]);

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let anio = this.bandejaGrp.get('anio').value.id;

    this.listaControl = CUADROCONTROL.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.spinnerService.hide();
  }

  exportarExcel() {
    let url = "/assets/files/reportes/cuadro-control-general.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'cuadro-control-general.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

}
