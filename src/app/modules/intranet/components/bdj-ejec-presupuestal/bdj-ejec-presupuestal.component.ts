import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { EjecucionPresupuestal } from 'src/app/model/ejecucion-presupuestal.model';
import { UNIDADES, TAMBOS, EJECUCIONPRESUPUESTAL } from 'src/app/common';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RegAsigPresupuestalComponent } from '../bdj-asig-presupuestal/reg-asig-presupuestal/reg-asig-presupuestal.component';
import { RegEjecPresupuestalComponent } from './reg-ejec-presupuestal/reg-ejec-presupuestal.component';
import { DistEjecPresupuestalComponent } from './dist-ejec-presupuestal/dist-ejec-presupuestal.component';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-bdj-ejec-presupuestal',
  templateUrl: './bdj-ejec-presupuestal.component.html',
  styleUrls: ['./bdj-ejec-presupuestal.component.scss']
})
export class BdjEjecPresupuestalComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaAsigPresupuestal: EjecucionPresupuestal[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<EjecucionPresupuestal>;

  bandejaGrp: FormGroup;
  messages = {
    'name': {
      'required': 'Field is required',
      'minlength': 'Insert al least 2 characters',
      'maxlength': 'Max name size 20 characters'
    }
  };

  formErrors = {
    'name': ''
  };

  id: number;
  idTipoAsignacion: number;
  nomTipoAsignacion: string;
  idPartida: number;
  nomPartida: string;
  monto: number;
  fecha: Date;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (asig: EjecucionPresupuestal) => `${asig.id}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Nombre unidad',
      cell: (asig: EjecucionPresupuestal) => `${asig.nomUnidad}`
    }, {
      columnDef: 'nomTipoAsignacion',
      header: 'Tipo asignacion',
      cell: (asig: EjecucionPresupuestal) => `${asig.nomTipoejecucion}`
    }, {
      columnDef: 'nroOrdencompra',
      header: 'Orden compra/Res. administracion',
      cell: (asig: EjecucionPresupuestal) => (asig.idTipoejecucion == 1) ? `${asig.nroOrdencompra}` : `${asig.nroResAdministracion}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (asig: EjecucionPresupuestal) => `${this.decimalPipe.transform(asig.monto, '1.2-2')}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (asig: EjecucionPresupuestal) => this.datePipe.transform(asig.fecha, 'dd/MM/yyyy')
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

    this.bandejaGrp = this.fb.group({
      unidad: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.cargarUnidades();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('unidad').setValue(this.unidades[0]);

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    this.listaAsigPresupuestal = EJECUCIONPRESUPUESTAL.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));

    this.cargarDatosTabla();
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaAsigPresupuestal.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaAsigPresupuestal);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regAsigPresupuestal(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegEjecPresupuestalComponent, {
      width: '800px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regDistribucionAsignacion(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(DistEjecPresupuestalComponent, {
      width: '800px',
      data: { title: 'NERIO', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
