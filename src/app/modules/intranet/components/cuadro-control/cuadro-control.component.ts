import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CuadroControl } from 'src/app/model/cuadro-control.model';
import { UNIDADES, TAMBOS, TIPOSVEHICULO } from 'src/app/common';
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
    this.listaControl = [
      { secFun: 26, unidad: 'U.T. HUANUCO', partida: '2.3.1.3.1.1', total: 10923.73, dieselConsMensual: 0, dieselConsAnual: 0, dieselImpGalon: null, dieselImpAnual: 0.00, cantTambos: 28, gasGalonPromedioMes: 8, gasConsMensual: 224, gasConsAnual: 2464, gasImporteGalon: 13.30, gasImporteAnual: 32771.20, lubricProd: 'GR/LB.', lubricCosto: 25.00, lubricCantidad: 28, lubricConsMensual: 700.00, lubricConsanual: 2800.00 },
      { secFun: 39, unidad: 'U.T. UCAYALI', partida: '2.3.1.3.1.1', total: 1650.00, dieselConsMensual: 0, dieselConsAnual: 0, dieselImpGalon: null, dieselImpAnual: 0.00, cantTambos: 2, gasGalonPromedioMes: 15, gasConsMensual: 30, gasConsAnual: 330, gasImporteGalon: 15.00, gasImporteAnual: 4950.00, lubricProd: 'GR/LB.', lubricCosto: 25.00, lubricCantidad: 2, lubricConsMensual: 50.00, lubricConsanual: 200.00 },
      { secFun: 24, unidad: 'U.T. CUSCO', partida: '2.3.1.3.1.1', total: 24955.70, dieselConsMensual: 70, dieselConsAnual: 770, dieselImpGalon: 10.83, dieselImpAnual: 8339.10, cantTambos: 56, gasGalonPromedioMes: 8, gasConsMensual: 448, gasConsAnual: 4928, gasImporteGalon: 13.50, gasImporteAnual: 66528.00, lubricProd: 'GR/LB.', lubricCosto: 20.00, lubricCantidad: 45, lubricConsMensual: 900.00, lubricConsanual: 2700.00 },
      { secFun: 32, unidad: 'U.T. MADRE DE DIOS', partida: '2.3.1.3.1.1', total: 1026.67, dieselConsMensual: 0, dieselConsAnual: 0, dieselImpGalon: null, dieselImpAnual: 0.00, cantTambos: 2, gasGalonPromedioMes: 10, gasConsMensual: 20, gasConsAnual: 220, gasImporteGalon: 14.00, gasImporteAnual: 3080.00, lubricProd: 'GR/LB.', lubricCosto: 20.00, lubricCantidad: 2, lubricConsMensual: 40.00, lubricConsanual: 160.00 },
      { secFun: 36, unidad: 'U.T. PUNO', partida: '2.3.1.3.1.1', total: 22293.33, dieselConsMensual: 80, dieselConsAnual: 880, dieselImpGalon: 13, dieselImpAnual: 11440.00, cantTambos: 42, gasGalonPromedioMes: 8, gasConsMensual: 336, gasConsAnual: 3696, gasImporteGalon: 15.00, gasImporteAnual: 55440.00, lubricProd: 'GR/LB.', lubricCosto: 12.00, lubricCantidad: 42, lubricConsMensual: 504.00, lubricConsanual: 2016.00 },
      { secFun: 27, unidad: 'U.T. JUNIN', partida: '2.3.1.3.1.1', total: 11528.00, dieselConsMensual: 80, dieselConsAnual: 880, dieselImpGalon: 12.7, dieselImpAnual: 11176.00, cantTambos: 19, gasGalonPromedioMes: 8, gasConsMensual: 152, gasConsAnual: 1672, gasImporteGalon: 14.00, gasImporteAnual: 23408.00, lubricProd: 'GR/LB.', lubricCosto: 20.00, lubricCantidad: 19, lubricConsMensual: 380.00, lubricConsanual: 1520.00 },
      { secFun: 21, unidad: 'U.T. AYACUCHO SUR', partida: '2.3.1.3.1.1', total: 11106.33, dieselConsMensual: 50, dieselConsAnual: 550, dieselImpGalon: 13.6, dieselImpAnual: 7480.00, cantTambos: 18, gasGalonPromedioMes: 9, gasConsMensual: 162, gasConsAnual: 1782, gasImporteGalon: 14.50, gasImporteAnual: 25839.00, lubricProd: 'GR/LB.', lubricCosto: 28.00, lubricCantidad: 18, lubricConsMensual: 504.00, lubricConsanual: 2016.00 },
      { secFun: 22, unidad: 'U.T. AYACUCHO NORTE', partida: '2.3.1.3.1.1', total: 20889.00, dieselConsMensual: 70, dieselConsAnual: 770, dieselImpGalon: 13.5, dieselImpAnual: 10395.00, cantTambos: 32, gasGalonPromedioMes: 11, gasConsMensual: 352, gasConsAnual: 3872, gasImporteGalon: 13.50, gasImporteAnual: 52272.00, lubricProd: 'GR/LB.', lubricCosto: 25.00, lubricCantidad: 27, lubricConsMensual: 675.00, lubricConsanual: 2700.00 },
    ];
  }

  exportarExcel() {
    console.log('Exportar');
  }

}
