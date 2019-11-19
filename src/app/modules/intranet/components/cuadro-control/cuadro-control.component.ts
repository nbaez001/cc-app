import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadroControl } from 'src/app/model/cuadro-control.model';
import { UNIDADES, TAMBOS, CUADROCONTROL } from 'src/app/common';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LayoutStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-cuadro-control',
  templateUrl: './cuadro-control.component.html',
  styleUrls: ['./cuadro-control.component.scss']
})
export class CuadroControlComponent implements OnInit {
  user: Usuario;
  bdjCuadroControlGrp: FormGroup;
  unidades = UNIDADES;
  anios: Object[] = [{ valor: 2017 }, { valor: 2018 }, { valor: 2019 }];
  meses: Object[] = [{ valor: 0, nombre: 'ENERO' }, { valor: 1, nombre: 'FEBRERO' }, { valor: 2, nombre: 'MARZO' }, { valor: 3, nombre: 'ABRIL' }, { valor: 4, nombre: 'MAYO' }, { valor: 5, nombre: 'JUNIO' }, { valor: 6, nombre: 'JULIO' }, { valor: 7, nombre: 'AGOSTO' }, { valor: 8, nombre: 'SETIEMBRE' }, { valor: 9, nombre: 'OCTUBRE' }, { valor: 10, nombre: 'NOVIEMBRE' }, { valor: 11, nombre: 'DICIEMBRE' }];

  listaControl: CuadroControl[] = [];

  // displayedColumns: string[];
  // dataSource: MatTableDataSource<ConsumoGenerador>;


  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.spinnerService.show();

    this.bdjCuadroControlGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    // this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    // this.dataSource = null;
    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
    this.cargarDatosTabla();
  }

  // definirTabla(): void {
  // this.displayedColumns = [];
  // this.columnsGrilla.forEach(c => {
  //   this.displayedColumns.push(c.columnDef);
  // });
  // this.displayedColumns.push('opt');
  // }

  public cargarDatosTabla(): void {
    // if (this.listaConsumos.length > 0) {
    //   this.dataSource = new MatTableDataSource(this.listaConsumos);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
    this.spinnerService.hide();
  }

  buscar() {
    console.log('Buscar');
    this.listaControl = CUADROCONTROL;
  }

  exportarExcel() {
    console.log('Exportar');
  }

}
