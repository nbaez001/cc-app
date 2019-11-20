import { Component, OnInit, ViewChild } from '@angular/core';
import { AsignacionPresupuestal } from 'src/app/model/asignacion-presupuestal.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { UNIDADES, TAMBOS, EJECUCIONPRESUPUESTAL } from 'src/app/common';

@Component({
  selector: 'app-bdj-asig-presupuestal',
  templateUrl: './bdj-asig-presupuestal.component.html',
  styleUrls: ['./bdj-asig-presupuestal.component.scss']
})
export class BdjAsigPresupuestalComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaAsigPresupuestal: AsignacionPresupuestal[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<AsignacionPresupuestal>;

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
      cell: (asig: AsignacionPresupuestal) => `${asig.id}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Nombre unidad',
      cell: (asig: AsignacionPresupuestal) => `${asig.nomUnidad}`
    }, {
      columnDef: 'nomTipoAsignacion',
      header: 'Tipo asignacion',
      cell: (asig: AsignacionPresupuestal) => `${asig.nomTipoAsignacion}`
    }, {
      columnDef: 'nroOrdencompra',
      header: 'Orden compra/Res. administracion',
      cell: (asig: AsignacionPresupuestal) => (asig.idTipoAsignacion == 1) ? `${asig.nroOrdencompra}` : `${asig.nroResAdministracion}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (asig: AsignacionPresupuestal) => this.datePipe.transform(asig.fecha, 'dd/MM/yyyy')
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private datePipe: DatePipe) { }

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
    this.listaAsigPresupuestal = [];//EJECUCIONPRESUPUESTAL.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));

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
    // console.log(obj);
    // const dialogRef = this.dialog.open(RegAsigPresupuestalComponent, {
    //   width: '800px',
    //   data: { name: 'NERIO', animal: 'LEON' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

  regDistribucionAsignacion(obj): void {
    // console.log(obj);
    // const dialogRef = this.dialog.open(DistAsigPresupuestalComponent, {
    //   width: '800px',
    //   data: { title: 'NERIO', objeto: obj }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }
}
