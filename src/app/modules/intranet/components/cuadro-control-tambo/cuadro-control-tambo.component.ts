import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadroControl } from 'src/app/model/cuadro-control.model';
import { UNIDADES, TAMBOS, CUADROCONTROLTAMBO } from 'src/app/common';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LayoutStyleBuilder } from '@angular/flex-layout';
import { CuadroControlTambo } from 'src/app/model/cuadro-control-tambo.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-cuadro-control-tambo',
  templateUrl: './cuadro-control-tambo.component.html',
  styleUrls: ['./cuadro-control-tambo.component.scss']
})
export class CuadroControlTamboComponent implements OnInit {
  bandejaGrp: FormGroup;
  unidades = [];
  tambos = [];
  anios: Object[] = [{ valor: 2019 }, { valor: 2018 }, { valor: 2017 }];
  meses: Object[] = [{ valor: 0, nombre: 'ENERO' }, { valor: 1, nombre: 'FEBRERO' }, { valor: 2, nombre: 'MARZO' }, { valor: 3, nombre: 'ABRIL' }, { valor: 4, nombre: 'MAYO' }, { valor: 5, nombre: 'JUNIO' }, { valor: 6, nombre: 'JULIO' }, { valor: 7, nombre: 'AGOSTO' }, { valor: 8, nombre: 'SETIEMBRE' }, { valor: 9, nombre: 'OCTUBRE' }, { valor: 10, nombre: 'NOVIEMBRE' }, { valor: 11, nombre: 'DICIEMBRE' }];

  listaControl: CuadroControlTambo[] = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      unidad: ['', [Validators.required]],
      tambo: ['', [Validators.required]],
      anio: ['', [Validators.required]]
    });

    // this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.cargarUnidades();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('unidad').setValue(this.unidades[0]);

    this.cargarTambos();
  }

  public cargarTambos() {
    this.tambos = JSON.parse(JSON.stringify(TAMBOS));
    this.tambos.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
    this.bandejaGrp.get('anio').setValue(this.anios[0]);

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let anio = this.bandejaGrp.get('anio').value.id;

    this.listaControl = CUADROCONTROLTAMBO.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.spinnerService.hide();
  }

  exportarExcel() {
    console.log('Exportar');
  }

}
