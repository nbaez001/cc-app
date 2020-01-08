import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdenServicio } from 'src/app/model/config/orden-servicio.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe, DecimalPipe } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { _ordenesServicio } from 'src/app/common';
import { CfgOrdServComponent } from './cfg-ord-serv/cfg-ord-serv.component';
import { IptOrdServComponent } from './ipt-ord-serv/ipt-ord-serv.component';

@Component({
  selector: 'app-bdj-ord-servicio',
  templateUrl: './bdj-ord-servicio.component.html',
  styleUrls: ['./bdj-ord-servicio.component.scss']
})
export class BdjOrdServicioComponent implements OnInit {
  bandejaGrp: FormGroup;
  listaOS: OrdenServicio[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<OrdenServicio>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (orden: OrdenServicio) => `${orden.id}`
    }, {
      columnDef: 'nroOrdenServicio',
      header: 'N° OrdenServicio Servicio',
      cell: (orden: OrdenServicio) => `${orden.nroOrdenServicio}-${this.datePipe.transform(orden.fecha, 'yyyy')}`
    }, {
      columnDef: 'nroExpSIAF',
      header: 'N° Exp. SIAF',
      cell: (orden: OrdenServicio) => `${orden.nroExpSIAF}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (orden: OrdenServicio) => this.datePipe.transform(orden.fecha, 'dd/MM/yyyy')
    }, {
      columnDef: 'nomTipoDocumento',
      header: 'Tipo documento',
      cell: (orden: OrdenServicio) => (orden.nomTipoDocumento) ? `${orden.nomTipoDocumento}` : ''
    }, {
      columnDef: 'nroDocumento',
      header: 'N° Documento',
      cell: (orden: OrdenServicio) => (orden.nroDocumento) ? `${orden.nroDocumento}` : ''
    }, {
      columnDef: 'nomProveedor',
      header: 'Proveedor',
      cell: (orden: OrdenServicio) => (orden.nomProveedor) ? `${orden.nomProveedor}` : ''
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (orden: OrdenServicio) => `${this.decimalPipe.transform(orden.monto, '1.2-2')}`
    }, {
      columnDef: 'nomEstado',
      header: 'Estado',
      cell: (orden: OrdenServicio) => `${orden.nomEstado}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          name: ['', [Validators.required]]
        });

        this.definirTabla();
        this.inicializarVariables();
        clearInterval(validarIntervalo);
      }
    }, 100);
  }

  public inicializarVariables(): void {
    this.dataSource = null;
    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
    this.buscar();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    if (this.listaOS.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaOS);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    this.listaOS = JSON.parse(JSON.stringify(_ordenesServicio));
    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  configurar(obj): void {
    console.log(obj);
    let index = this.listaOS.indexOf(obj);
    const dialogRef = this.dialog.open(CfgOrdServComponent, {
      width: '800px',
      data: { title: 'Configurar orden servicio', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaOS.splice(index, 1);
        this.listaOS.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  importar(evt) {
    const dialogRef = this.dialog.open(IptOrdServComponent, {
      width: '700px',
      data: { title: 'Importar Orden servicio', objeto: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaOS.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  exportar() {

  }

}
