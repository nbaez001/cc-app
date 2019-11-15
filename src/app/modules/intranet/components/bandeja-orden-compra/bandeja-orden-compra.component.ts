import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrdenCompra } from 'src/app/model/orden-compra.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bandeja-orden-compra',
  templateUrl: './bandeja-orden-compra.component.html',
  styleUrls: ['./bandeja-orden-compra.component.scss']
})
export class BandejaOrdenCompraComponent implements OnInit {
  bandejaGrp: FormGroup;
  listaOc: OrdenCompra[] = [
    { id: 1, nroOrdenCompra: '0000060', nroExpSIAF: '0000002811', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452629284', idProveedor: 1, nomProveedor: 'SERVICENTRO MODA S.A.C', monto: 10188.08, idEstado: 1, nomEstado: 'IMPORTADO' },
    { id: 2, nroOrdenCompra: '0000045', nroExpSIAF: '0000002412', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452631858', idProveedor: 2, nomProveedor: 'COORPORACION SANTA BERTHA S.A.C', monto: 6945.00, idEstado: 2, nomEstado: 'ACTIVO' },
    { id: 3, nroOrdenCompra: '0000036', nroExpSIAF: '0000002345', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452629284', idProveedor: 1, nomProveedor: 'SERVICENTRO MODA S.A.C', monto: 9188.00, idEstado: 3, nomEstado: 'INACTIVO' }
  ];

  displayedColumns: string[];
  dataSource: MatTableDataSource<OrdenCompra>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (orden: OrdenCompra) => `${orden.id}`
    }, {
      columnDef: 'nroOrdenCompra',
      header: 'N° Orden Compra',
      cell: (orden: OrdenCompra) => `${orden.nroOrdenCompra}`
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
      cell: (orden: OrdenCompra) => `${orden.nomTipoDocumento}`
    }, {
      columnDef: 'nroDocumento',
      header: 'N° Documento',
      cell: (orden: OrdenCompra) => `${orden.nroDocumento}`
    }, {
      columnDef: 'nomProveedor',
      header: 'Proveedor',
      cell: (orden: OrdenCompra) => `${orden.nomProveedor}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (orden: OrdenCompra) => `${orden.monto}`
    }, {
      columnDef: 'nomEstado',
      header: 'Estado',
      cell: (orden: OrdenCompra) => `${orden.nomEstado}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.dataSource = null;
    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
    this.cargarDatosTabla();
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
    console.log('Buscar');
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regConsumo(obj): void {
    console.log(obj);
    // const dialogRef = this.dialog.open(RegConsumoGeneradorComponent, {
    //   width: '700px',
    //   data: obj
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    //   this.listaConsumos.push(result);
    //   this.cargarDatosTabla();
    // });
  }

}
