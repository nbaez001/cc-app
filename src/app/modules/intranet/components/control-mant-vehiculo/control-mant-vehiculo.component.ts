import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION, MANTENIMIENTOS } from 'src/app/common';
import { VerObsMantComponent } from './ver-obs-mant/ver-obs-mant.component';
import { RegMantVehiculoComponent } from './reg-mant-vehiculo/reg-mant-vehiculo.component';
import { RegConfMantVehiculoComponent } from './reg-conf-mant-vehiculo/reg-conf-mant-vehiculo.component';

@Component({
  selector: 'app-control-mant-vehiculo',
  templateUrl: './control-mant-vehiculo.component.html',
  styleUrls: ['./control-mant-vehiculo.component.scss']
})
export class ControlMantVehiculoComponent implements OnInit {
  bandejaGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'vehiculo': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'vehiculo': ''
  };

  unidades = [];
  tambos = [];
  tiposMantenimiento = [];
  tiposPresupuesto = [];
  listaMantenimientos: MantenimientoVehicular[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<MantenimientoVehicular>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (mant: MantenimientoVehicular) => (mant.id != null) ? `${mant.id}` : ''
    }, {
      columnDef: 'nomTipoMantenimiento',
      header: 'TIPO MANTENIMIENTO',
      cell: (mant: MantenimientoVehicular) => (mant.nomTipoMantenimiento != null) ? `${mant.nomTipoMantenimiento}` : ''
    }, {
      columnDef: 'nomTipoAsigPresupuesto',
      header: 'TIPO PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.nomTipoAsigPresupuesto != null) ? `${mant.nomTipoAsigPresupuesto}` : ''
    }, {
      columnDef: 'codAsigPresupuesto',
      header: 'CODIGO PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.codAsigPresupuesto != null) ? `${mant.codAsigPresupuesto}` : ''
    }, {
      columnDef: 'marcimporteAsigPresupuestoa',
      header: 'MONTO PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.importeAsigPresupuesto != null) ? `${mant.importeAsigPresupuesto}` : ''
    }, {
      columnDef: 'nroHojatramiteConf',
      header: 'NRO HOJA TRAMITE',
      cell: (mant: MantenimientoVehicular) => (mant.nroHojatramiteConf != null) ? `${mant.nroHojatramiteConf}` : ''
    }, {
      columnDef: 'nroInformeConf',
      header: 'NRO INFORME CONF.',
      cell: (mant: MantenimientoVehicular) => (mant.nroInformeConf != null) ? `${mant.nroInformeConf}` : ''
    }, {
      columnDef: 'actaRecepcionEmpresa',
      header: 'NRO ACTA RECEPCION EMPRESA',
      cell: (mant: MantenimientoVehicular) => (mant.actaRecepcionEmpresa != null) ? `${mant.actaRecepcionEmpresa}` : ''
    }, {
      columnDef: 'cartaInformeProveedor',
      header: 'CARTA INFORME PROVEEDOR',
      cell: (mant: MantenimientoVehicular) => (mant.cartaInformeProveedor != null) ? `${mant.cartaInformeProveedor}` : ''
    }, {
      columnDef: 'actaRecepccionUURR',
      header: 'ACTA RECEPCCION UURR',
      cell: (mant: MantenimientoVehicular) => (mant.actaRecepccionUURR != null) ? `${mant.actaRecepccionUURR}` : ''
    }, {
      columnDef: 'nomEstadoMantenimiento',
      header: 'ESTADO MANTENIMIENTO',
      cell: (mant: MantenimientoVehicular) => (mant.nomEstadoMantenimiento != null) ? `${mant.nomEstadoMantenimiento}` : ''
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService
  ) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tipoMantenimiento: ['', [Validators.required]],
      tipoPresupuesto: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  get getUser() {
    return this.user;
  }

  public inicializarVariables(): void {
    this.cargarUnidades();
    this.cargarTipomantenimiento();
    this.cargarTipopresupuesto();

    this.spinnerService.hide();
    this.buscar();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }
  }

  public cargarTipomantenimiento() {
    this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));
    this.tiposMantenimiento.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
  }

  public cargarTipopresupuesto() {
    this.tiposPresupuesto = JSON.parse(JSON.stringify(TIPOEJECUCION));
    this.tiposPresupuesto.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaMantenimientos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaMantenimientos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTipomantenimiento = this.bandejaGrp.get('tipoMantenimiento').value.id;
    let idTipopresupuesto = this.bandejaGrp.get('tipoPresupuesto').value.id;

    this.listaMantenimientos = MANTENIMIENTOS.filter(el => (el.idUnidad == idUnidad || 0 == idUnidad));
    this.listaMantenimientos = this.listaMantenimientos.filter(el => (el.idTipomantenimiento == idTipomantenimiento || 0 == idTipomantenimiento));
    this.listaMantenimientos = this.listaMantenimientos.filter(el => (el.idTipoAsigPresupuesto == idTipopresupuesto || 0 == idTipopresupuesto));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  confMantenimiento(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegConfMantVehiculoComponent, {
      width: '700px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  regMantenimientoVehicular(obj): void {
    let indice = this.listaMantenimientos.indexOf(obj);
    const dialogRef = this.dialog.open(RegMantVehiculoComponent, {
      width: '90%',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaMantenimientos.splice(indice,1);
      // this.listaMantenimientos.push(result);
      // this.cargarDatosTabla();
    });
  }

  verObsMantenimientoVehicular(obj): void {
    const dialogRef = this.dialog.open(VerObsMantComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

}
