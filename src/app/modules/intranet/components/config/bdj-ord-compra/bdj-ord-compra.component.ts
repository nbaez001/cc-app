import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdenCompra } from 'src/app/model/config/orden-compra.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe, DecimalPipe } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { _ordenesCompra } from 'src/app/common';
import { IptOrdCompraComponent } from './ipt-ord-compra/ipt-ord-compra.component';
import { CfgOrdCompraComponent } from './cfg-ord-compra/cfg-ord-compra.component';

@Component({
  selector: 'app-bdj-ord-compra',
  templateUrl: './bdj-ord-compra.component.html',
  styleUrls: ['./bdj-ord-compra.component.scss']
})
export class BdjOrdCompraComponent implements OnInit {
  bandejaGrp: FormGroup;
  listaOc: OrdenCompra[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<OrdenCompra>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (orden: OrdenCompra) => `${orden.id}`
    }, {
      columnDef: 'nroOrdenCompra',
      header: 'N° OrdenCompra Compra',
      cell: (orden: OrdenCompra) => `${orden.nroOrdenCompra}-${this.datePipe.transform(orden.fecha, 'yyyy')}`
    }, {
      columnDef: 'nroExpSIAF',
      header: 'N° Exp. SIAF',
      cell: (orden: OrdenCompra) => `${orden.nroExpSIAF}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (orden: OrdenCompra) => this.datePipe.transform(orden.fecha, 'dd/MM/yyyy')
    }, {
      columnDef: 'nomTipoDocumento',
      header: 'Tipo documento',
      cell: (orden: OrdenCompra) => (orden.nomTipoDocumento) ? `${orden.nomTipoDocumento}` : ''
    }, {
      columnDef: 'nroDocumento',
      header: 'N° Documento',
      cell: (orden: OrdenCompra) => (orden.nroDocumento) ? `${orden.nroDocumento}` : ''
    }, {
      columnDef: 'nomProveedor',
      header: 'Proveedor',
      cell: (orden: OrdenCompra) => (orden.nomProveedor) ? `${orden.nomProveedor}` : ''
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (orden: OrdenCompra) => `${this.decimalPipe.transform(orden.monto, '1.2-2')}`
    }, {
      columnDef: 'nomEstado',
      header: 'Estado',
      cell: (orden: OrdenCompra) => `${orden.nomEstado}`
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
    if (this.listaOc.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaOc);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    this.listaOc = JSON.parse(JSON.stringify(_ordenesCompra));
    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  configurar(obj): void {
    console.log(obj);
    let index = this.listaOc.indexOf(obj);
    const dialogRef = this.dialog.open(CfgOrdCompraComponent, {
      width: '800px',
      data: { title: 'Configurar orden compra', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaOc.splice(index, 1);
        this.listaOc.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  importar(evt) {
    const dialogRef = this.dialog.open(IptOrdCompraComponent, {
      width: '700px',
      data: { title: 'Importar Orden compra', objeto: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaOc.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  exportar() {

  }

}
