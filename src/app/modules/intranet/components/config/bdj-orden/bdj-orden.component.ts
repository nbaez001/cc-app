import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Orden } from 'src/app/model/config/orden.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-bdj-orden',
  templateUrl: './bdj-orden.component.html',
  styleUrls: ['./bdj-orden.component.scss']
})
export class BdjOrdenComponent implements OnInit {
  bandejaGrp: FormGroup;
  listaOc: Orden[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Orden>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (orden: Orden) => `${orden.id}`
    }, {
      columnDef: 'nroOrden',
      header: 'N° Orden Compra',
      cell: (orden: Orden) => `${orden.nroOrden}`
    }, {
      columnDef: 'nroExpSIAF',
      header: 'N° Exp. SIAF',
      cell: (orden: Orden) => `${orden.nroExpSIAF}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (orden: Orden) => this.datePipe.transform(orden.fecha, 'dd/MM/yyyy')
    }, {
      columnDef: 'nomTipoDocumento',
      header: 'Tipo documento',
      cell: (orden: Orden) => `${orden.nomTipoDocumento}`
    }, {
      columnDef: 'nroDocumento',
      header: 'N° Documento',
      cell: (orden: Orden) => `${orden.nroDocumento}`
    }, {
      columnDef: 'nomProveedor',
      header: 'Proveedor',
      cell: (orden: Orden) => `${orden.nomProveedor}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (orden: Orden) => `${orden.monto}`
    }, {
      columnDef: 'nomEstado',
      header: 'Estado',
      cell: (orden: Orden) => `${orden.nomEstado}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private datePipe: DatePipe,
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
