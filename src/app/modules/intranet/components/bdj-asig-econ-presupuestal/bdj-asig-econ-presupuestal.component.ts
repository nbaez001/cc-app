import { Component, OnInit, ViewChild } from '@angular/core';
import { UNIDADES, TAMBOS, ASIGNACIONPRESUPUESTAL } from 'src/app/common';
import { AsignacionPresupuestal } from 'src/app/model/asignacion-presupuestal.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { RegAsigPresupuestalComponent } from './reg-asig-presupuestal/reg-asig-presupuestal.component';
import { DistAsigPresupuestalComponent } from './dist-asig-presupuestal/dist-asig-presupuestal.component';

@Component({
  selector: 'app-bdj-asig-econ-presupuestal',
  templateUrl: './bdj-asig-econ-presupuestal.component.html',
  styleUrls: ['./bdj-asig-econ-presupuestal.component.scss']
})
export class BdjAsigEconPresupuestalComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaAsigPresupuestal: AsignacionPresupuestal[] = ASIGNACIONPRESUPUESTAL;

  displayedColumns: string[];
  dataSource: MatTableDataSource<AsignacionPresupuestal>;

  bdjAsigPresupuestalGrp: FormGroup;
  messages = {
    'name': {
      'required': 'Field is required',
      'minlength': 'Insert al least 2 characters',
      'maxlength': 'Max name size 20 characters'
    },
    'email': {
      'required': 'Field is required',
      'email': 'Insert a valid email',
      'customEmail': 'Email domain should be dell.com'
    },
    'confirmEmail': {
      'required': 'Field is required',
      'email': 'Insert a valid email'
    },
    'phone': {
      'required': 'Phone is required'
    },
    'skill': {
      'name': {
        'required': 'Field is required',
        'minlength': 'Insert al least 5 characters',
        'maxlength': 'max name size 20 characters'
      },
      'years': {
        'required': 'Field is required',
        'min': 'Min value is 1',
        'max': 'Max value is 100'
      },
      'proficiency': {
        'required': 'option is required'
      }
    }
  };

  formErrors = {
    'name': '',
    'email': '',
    'confirmEmail': '',
    'phone': '',
    'skill': {
      'name': '',
      'years': '',
      'proficiency': ''
    }
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

    this.bdjAsigPresupuestalGrp = this.fb.group({
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
    if (this.listaAsigPresupuestal.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaAsigPresupuestal);
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

  regAsigPresupuestal(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegAsigPresupuestalComponent, {
      width: '800px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  regDistribucionAsignacion(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(DistAsigPresupuestalComponent, {
      width: '800px',
      data: { title: 'NERIO', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}