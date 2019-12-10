import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort, MatSnackBar } from '@angular/material';
import { DatePipe, DecimalPipe } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION, _solicitudesMant, TAMBOS } from 'src/app/common';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SolicitudMant } from 'src/app/model/solicitud-mant.model';
import { RegSolicitudMantComponent } from './reg-solicitud-mant/reg-solicitud-mant.component';

@Component({
  selector: 'app-control-solicitud-mant',
  templateUrl: './control-solicitud-mant.component.html',
  styleUrls: ['./control-solicitud-mant.component.scss']
})
export class ControlSolicitudMantComponent implements OnInit {
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
  listaSolicitudes: SolicitudMant[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<SolicitudMant>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (mant: SolicitudMant) => (mant.id != null) ? `${mant.id}` : ''
    }, {
      columnDef: 'nomUnidad',
      header: 'UNIDAD',
      cell: (mant: SolicitudMant) => (mant.nomUnidad != null) ? `${mant.nomUnidad}` : ''
    }, {
      columnDef: 'nomTambo',
      header: 'TAMBO',
      cell: (mant: SolicitudMant) => (mant.nomTambo != null) ? `${mant.nomTambo}` : ''
    }, {
      columnDef: 'nomTipoMantenimiento',
      header: 'TIPO MANTENIMIENTO',
      cell: (mant: SolicitudMant) => (mant.nomTipoMantenimiento != null) ? `${mant.nomTipoMantenimiento}` : ''
    }, {
      columnDef: 'nomTipoVehiculo',
      header: 'TIPO VEHICULO',
      cell: (mant: SolicitudMant) => (mant.nomTipoVehiculo != null) ? `${mant.nomTipoVehiculo}` : ''
    }, {
      columnDef: 'marcaVehiculo',
      header: 'MARCA',
      cell: (mant: SolicitudMant) => (mant.marcaVehiculo != null) ? `${mant.marcaVehiculo}` : ''
    }, {
      columnDef: 'placaVehiculo',
      header: 'PLACA',
      cell: (mant: SolicitudMant) => (mant.placaVehiculo != null) ? `${mant.placaVehiculo}` : ''
    }, {
      columnDef: 'nomProveedor',
      header: 'PROVEEDOR',
      cell: (mant: SolicitudMant) => (mant.nomProveedor != null) ? `${mant.nomProveedor}` : ''
    }, {
      columnDef: 'nomTipoDocumento',
      header: 'TIPO DOCUMENTO',
      cell: (mant: SolicitudMant) => (mant.nomTipoDocumento != null) ? `${mant.nomTipoDocumento}` : ''
    }, {
      columnDef: 'nroDocumento',
      header: 'NRO DOCUMENTO',
      cell: (mant: SolicitudMant) => (mant.nroDocumento != null) ? `${mant.nroDocumento}` : ''
    }, {
      columnDef: 'fecha',
      header: 'FECHA',
      cell: (mant: SolicitudMant) => (mant.fecha != null) ? `${this.datePipe.transform(mant.fecha, 'dd/MM/yyyy')}` : ''
    }, {
      columnDef: 'monto',
      header: 'MONTO',
      cell: (mant: SolicitudMant) => (mant.monto != null) ? `${mant.monto}` : ''
    }, {
      columnDef: 'nomEstado',
      header: 'ESTADO',
      cell: (mant: SolicitudMant) => (mant.nomEstado != null) ? `${mant.nomEstado}` : ''
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe,
    private _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.definirTabla();
        this.inicializarVariables();
        clearInterval(validarIntervalo);
      }
    }, 100);
  }

  get getUser() {
    return this.user;
  }

  public inicializarVariables(): void {
    this.bandejaGrp = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tambo: [{ value: '' }, [Validators.required]],
      tipoMantenimiento: ['', [Validators.required]],
    });

    this.cargarTipomantenimiento();
    this.cargarUnidades();

    this.spinnerService.hide();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }

    this.cargarTambos();
  }

  public cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idUnidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idUnidad: 0 });

    if (this.user.perfil.id == 1) {
      this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == this.user.idTambo)[0]);
      this.bandejaGrp.get('tambo').disable();
    } else {
      if (this.user.perfil.id == 2) {
        this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == 0)[0]);
      } else {
        this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
      }
    }

    this.buscar();
  }

  public cargarTipomantenimiento() {
    this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));
    this.tiposMantenimiento.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
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
    if (this.listaSolicitudes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaSolicitudes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;
    let idTipoMantenimiento = this.bandejaGrp.get('tipoMantenimiento').value.id;

    console.log('Unidad: ' + idUnidad + ' - ' + idTambo + ' - ' + idTipoMantenimiento);

    this.listaSolicitudes = _solicitudesMant.filter(el => (el.idUnidad == idUnidad || 0 == idUnidad));
    this.listaSolicitudes = this.listaSolicitudes.filter(el => (el.idTambo == idTambo || 0 == idTambo));
    this.listaSolicitudes = this.listaSolicitudes.filter(el => (el.idTipoMantenimiento == idTipoMantenimiento || 0 == idTipoMantenimiento));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  confMantenimiento(obj): void {
    // console.log(obj);
    // const dialogRef = this.dialog.open(RegConfMantVehiculoComponent, {
    //   width: '700px',
    //   data: obj
    // });

    // dialogRef.afterClosed().subscribe(result => {

    // });
  }

  solSolicitudMant(obj): void {
    // this.router.navigate(['/intranet/req-mantenimiento']);
  }

  regSolicitudMant(obj): void {
    let indice = this.listaSolicitudes.indexOf(obj);
    const dialogRef = this.dialog.open(RegSolicitudMantComponent, {
      width: '800px',
      data: { title: 'Registrar solicitud mantenimiento', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaSolicitudes.push(result);
        this.cargarDatosTabla();
      }
    });
  }

  verObsSolicitudMant(obj): void {
    // const dialogRef = this.dialog.open(VerObsMantComponent, {
    //   width: '500px',
    //   data: obj
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log(result);
    // });
  }


}
