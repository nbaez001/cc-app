import { Component, OnInit, ViewChild } from '@angular/core';
import { UNIDADES, TAMBOS, ADQUISICION } from 'src/app/common';
import { Adquisicion } from 'src/app/model/adquisicion.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { RegAdquisicionComponent } from './reg-adquisicion/reg-adquisicion.component';

@Component({
  selector: 'app-bandeja-adquisicion',
  templateUrl: './bandeja-adquisicion.component.html',
  styleUrls: ['./bandeja-adquisicion.component.scss']
})
export class BandejaAdquisicionComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaAdquisicion: Adquisicion[] = ADQUISICION;

  displayedColumns: string[];
  dataSource: MatTableDataSource<Adquisicion>;

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
      cell: (adq: Adquisicion) => `${adq.id}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Nombre unidad',
      cell: (adq: Adquisicion) => `${adq.nomUnidad}`
    }, {
      columnDef: 'nomTambo',
      header: 'Nombre tambo',
      cell: (adq: Adquisicion) => `${adq.nomTambo}`
    }, {
      columnDef: 'nomTipoCombustible',
      header: 'Combustible',
      cell: (adq: Adquisicion) => `${adq.nomTipoCombustible}`
    }, {
      columnDef: 'costoGalon',
      header: 'Costo galon',
      cell: (adq: Adquisicion) => `${adq.costoGalon}`
    }, {
      columnDef: 'cantidad',
      header: 'Cantidad',
      cell: (adq: Adquisicion) => `${adq.cantidad}`
    }, {
      columnDef: 'costoTotal',
      header: 'Total',
      cell: (adq: Adquisicion) => `${adq.costoTotal}`
    }, {
      columnDef: 'ciudadPuntoAbastecimiento',
      header: 'Ciudad abastecimiento',
      cell: (adq: Adquisicion) => `${adq.ciudadPuntoAbastecimiento}`
    }, {
      columnDef: 'distPuntoAbastecimiento',
      header: 'Dist. punto abastecimiento',
      cell: (adq: Adquisicion) => `${adq.distPuntoAbastecimiento}`
    }, {
      columnDef: 'proveedor',
      header: 'Proveedor',
      cell: (adq: Adquisicion) => `${adq.proveedor}`
    }, {
      columnDef: 'rucProveedor',
      header: 'Ruc proveedor',
      cell: (adq: Adquisicion) => `${adq.rucProveedor}`
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
    if (this.listaAdquisicion.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaAdquisicion);
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

  regAdquisicion(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegAdquisicionComponent, {
      width: '500px',
      data: { name: 'NERIO'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}