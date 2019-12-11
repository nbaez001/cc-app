import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatDialog, MatStepper, MatSnackBar } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOSPRESUPUESTO } from 'src/app/common';
import { DetalleMantenimiento } from 'src/app/model/detalle-mantenimiento.mode';
import { DecimalPipe, DatePipe } from '@angular/common';
import { RegDetMatVehiculoComponent } from '../reg-det-mat-vehiculo/reg-det-mat-vehiculo.component';
import { SolicitudMant } from 'src/app/model/solicitud-mant.model';
import { BuscarSolicitudMantComponent } from './buscar-solicitud-mant/buscar-solicitud-mant.component';
import { DataDialog } from 'src/app/model/data-dialog.model';

@Component({
  selector: 'app-reg-mant-vehiculo',
  templateUrl: './reg-mant-vehiculo.component.html',
  styleUrls: ['./reg-mant-vehiculo.component.scss']
})
export class RegMantVehiculoComponent implements OnInit {
  unidades = [];
  tiposMantenimiento = [];
  tiposPresupuesto = TIPOSPRESUPUESTO;

  mantenimiento: MantenimientoVehicular;
  fileupload: any;

  subformularioGrp: FormGroup;
  formularioGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tipoMantenimiento': {
      'required': 'Campo obligatorio'
    },
    'presupuesto': {
      'required': 'Campo obligatorio'
    },
    'nroHojatramiteConf': {
      'required': 'Campo obligatorio'
    },
    'nroInformeConf': {
      'required': 'Campo obligatorio'
    },
    'actaRecepcionEmpresa': {
      'required': 'Campo obligatorio'
    },
    'cartaInformeProveedor': {
      'required': 'Campo obligatorio'
    },
    'actaRecepccionUURR': {
      'required': 'Campo obligatorio'
    },
    'cantVehiculos': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tipoMantenimiento': '',
    'presupuesto': '',
    'nroHojatramiteConf': '',
    'nroInformeConf': '',
    'actaRecepcionEmpresa': '',
    'cartaInformeProveedor': '',
    'actaRecepccionUURR': '',
    'cantVehiculos': ''
  };

  formularioGrp1: FormGroup;
  messages1 = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tipoMantenimiento': {
      'required': 'Campo obligatorio'
    },
    'cotizacion': {
      'required': 'Campo obligatorio'
    },
    'nroHt': {
      'required': 'Campo obligatorio'
    },
    'nroInforme': {
      'required': 'Campo obligatorio'
    },
    'documentacion': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors1 = {
    'unidad': '',
    'tipoMantenimiento': '',
    'cotizacion': '',
    'nroHt': '',
    'nroInforme': '',
    'documentacion': '',
  };

  formularioGrp2: FormGroup;

  listaSolicitudesMant: SolicitudMant[] = [];
  dataSource1: MatTableDataSource<SolicitudMant> = null;
  displayedColumns1: string[];
  columnsGrilla1 = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: SolicitudMant) => `${cond.id}`
    }, {
      columnDef: 'nomTambo',
      header: 'TAMBO',
      cell: (cond: SolicitudMant) => `${cond.nomTambo}`
    }, {
      columnDef: 'nomTipoMantenimiento',
      header: 'TIPO MANTENIMIENTO',
      cell: (cond: SolicitudMant) => `${cond.nomTipoMantenimiento}`
    }, {
      columnDef: 'nomTipoVehiculo',
      header: 'VEHICULO',
      cell: (cond: SolicitudMant) => `${cond.nomTipoVehiculo} ${cond.marcaVehiculo} ${cond.placaVehiculo}`
    }, {
      columnDef: 'nomProveedor',
      header: 'PROVEEDOR',
      cell: (cond: SolicitudMant) => `${cond.nomProveedor} - ${cond.nomTipoDocumento}: ${cond.nroDocumento}`
    }, {
      columnDef: 'monto',
      header: 'MONTO',
      cell: (cond: SolicitudMant) => `S/.${this.decimalPipe.transform(cond.monto, '1.2-2')}`
    }, {
      columnDef: 'fecha',
      header: 'FECHA',
      cell: (cond: SolicitudMant) => this.datePipe.transform(cond.fecha, 'dd/MM/yyyy')
    }];


  listaDetalleMantenimiento: DetalleMantenimiento[] = [];
  dataSource: MatTableDataSource<DetalleMantenimiento>;
  displayedColumns: string[];
  isLoading: boolean = false;
  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: DetalleMantenimiento) => `${cond.id}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Unidad',
      cell: (cond: DetalleMantenimiento) => `${cond.nomUnidad}`
    }, {
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (cond: DetalleMantenimiento) => `${cond.nomTambo}`
    }, {
      columnDef: 'nomVehiculo',
      header: 'Vehiculo',
      cell: (cond: DetalleMantenimiento) => `${cond.nomVehiculo}`
    }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (cond: DetalleMantenimiento) => this.datePipe.transform(cond.fecha, 'dd/MM/yyyy')
    }, {
      columnDef: 'empresa',
      header: 'Empresa',
      cell: (cond: DetalleMantenimiento) => `${cond.empresa}`
    }, {
      columnDef: 'kilometrajeInicio',
      header: 'Kilometraje inicio',
      cell: (cond: DetalleMantenimiento) => `${cond.kilometrajeInicio}`
    }];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) paginator1: MatPaginator;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegMantVehiculoComponent>,
    public dialog: MatDialog,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  ngOnInit() {
    this.inicializarVariables();
  }

  salir(): void {
    this.dialogRef.close(null);
  }


  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    if (this.data != null) {
      this.mantenimiento = new MantenimientoVehicular();
      this.mantenimiento.idTipomantenimiento = 1;
    } else {
      this.mantenimiento = JSON.parse(JSON.stringify(this.data));
    }

    this.formularioGrp1 = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      cotizacion: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      nroHt: ['', [Validators.required]],
      nroInforme: ['', [Validators.required]],
      documentacion: [{ value: '', disabled: true }, [Validators.required]],
    });

    this.formularioGrp = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      presupuesto: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      nroHojatramiteConf: ['', [Validators.required]],
      nroInformeConf: ['', [Validators.required]],
      actaRecepcionEmpresa: [{ value: '', disabled: true }, [Validators.required]],
      cartaInformeProveedor: [{ value: '', disabled: true }, [Validators.required]],
      actaRecepccionUURR: [{ value: '', disabled: true }, [Validators.required]],
      cantVehiculos: ['', [Validators.required]],
      obsRecepccionUURR: ['', []]
    });

    this.formularioGrp2 = this.fb.group({
      ordenServicio: ['', [Validators.required]],
      tipoPresupuesto: ['', [Validators.required]]
    });

    this.cargarUnidades();
    this.cargarTipomantenimiento();

    this.calcularCotizacion();

    this.definirTabla();
    this.listarDetalleMantenimiento();
  }

  definirTabla(): void {
    this.displayedColumns1 = [];
    this.columnsGrilla1.forEach(c => {
      this.displayedColumns1.push(c.columnDef);
    });
    this.displayedColumns1.push('opt');

    //TABLA SECUNDARIA
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  listarDetalleMantenimiento(): void {
    this.listaDetalleMantenimiento = [];
    let cant = this.formularioGrp.get('cantVehiculos').value;
    for (let i = 0; i < cant; i++) {
      let det = new DetalleMantenimiento();
      det.id = i;
      this.listaDetalleMantenimiento.push(det);
    }

    this.cargarDatosTabla();
  }

  public cargarDatosTabla1(): void {
    this.dataSource1 = null;
    if (this.listaSolicitudesMant.length > 0) {
      this.dataSource1 = new MatTableDataSource(this.listaSolicitudesMant);
      this.dataSource1.paginator = this.paginator1;
    }
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaDetalleMantenimiento.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDetalleMantenimiento);
      this.dataSource.paginator = this.paginator;
    }

    this.cargarControles();
  }

  cargarControles(): void {
    const frmCtrl = {};
    let cant = this.formularioGrp.get('cantVehiculos').value;
    for (let i = 0; i < cant; i++) {
      frmCtrl[`u${i}`] = new FormControl(null);
      frmCtrl[`t${i}`] = new FormControl(null);
      frmCtrl[`vh${i}`] = new FormControl(null);
      frmCtrl[`f${i}`] = new FormControl(null);
      frmCtrl[`e${i}`] = new FormControl(null);
      frmCtrl[`k${i}`] = new FormControl(null);
    };

    this.subformularioGrp = new FormGroup(frmCtrl);
  }

  public cargarTipomantenimiento() {
    this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));
    this.formularioGrp1.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);

    this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
    this.formularioGrp.get('cantVehiculos').setValue(1);
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
      this.formularioGrp1.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
      this.formularioGrp1.get('unidad').setValue(this.unidades[0]);
    }
  }

  calcularCotizacion(): void {
    if (this.listaSolicitudesMant.length > 0) {
      let cal = 0;
      this.listaSolicitudesMant.forEach(el => {
        cal += el.monto;
      });
      this.formularioGrp1.get('cotizacion').setValue(cal);
    } else {
      this.formularioGrp1.get('cotizacion').setValue(0);
    }
  }

  buscarSolicitudesMant(): void {
    const dialogRef3 = this.dialog.open(BuscarSolicitudMantComponent, {
      width: '800px',
      data: { title: 'Buscar solicitudes mantenimiento', objeto: null }
    });

    dialogRef3.afterClosed().subscribe(result => {
      if (result) {
        result.forEach(el => {
          this.listaSolicitudesMant.push(el);
        });
        this.cargarDatosTabla1();
        this.calcularCotizacion();
      }
    });
  }

  generarFormulario(): void {
    let cant = this.formularioGrp.get('cantVehiculos').value;
    if (cant > 0) {
      this.listarDetalleMantenimiento();
    }
  }

  guardar(): void {
    if (this.formularioGrp.valid) {
      let kil = new MantenimientoVehicular();
      kil.id = 0;
      kil.idUnidad = this.formularioGrp.get('unidad').value.id;
      kil.nomUnidad = this.formularioGrp.get('unidad').value.nombre;
      kil.idTipomantenimiento = this.formularioGrp.get('tipoMantenimiento').value.id;
      kil.nomTipoMantenimiento = this.formularioGrp.get('tipoMantenimiento').value.nombre;
      kil.idTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.id;
      kil.nomTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.nombre;
      kil.codAsigPresupuesto = this.formularioGrp.get('codAsigPresupuesto').value;
      kil.importeAsigPresupuesto = this.formularioGrp.get('importeAsigPresupuesto').value;

      console.log(kil);
      console.log('TODO CORRECTO');
    } else {
      this.validateForm();
    }

  }

  public buscarActa(evt): void {
    document.getElementById('fileInput').click();
  }

  public cargarArchivo(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp.get('actaRecepcionEmpresa').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp.get('actaRecepcionEmpresa').setValue(nombreArchivo);
    }
  }

  public buscarActa2(evt): void {
    document.getElementById('fileInput2').click();
  }

  public cargarArchivo2(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp.get('cartaInformeProveedor').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp.get('cartaInformeProveedor').setValue(nombreArchivo);
    }
  }

  public buscarActa3(evt): void {
    document.getElementById('fileInput3').click();
  }

  public cargarArchivo3(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp.get('actaRecepccionUURR').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp.get('actaRecepccionUURR').setValue(nombreArchivo);
    }
  }

  regDetalleServicio(obj): void {
    const dialogRef2 = this.dialog.open(RegDetMatVehiculoComponent, {
      width: '500px',
      data: { name: 'NERIO' }
    });

    dialogRef2.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaMantenimientos.splice(indice,1);
      // this.listaMantenimientos.push(result);
      // this.cargarDatosTabla();
    });
  }




  public buscarRequerimiento(evt): void {
    document.getElementById('fileRequerimiento').click();
  }

  public cargarRequerimiento(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp1.get('documentacion').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp1.get('documentacion').setValue(nombreArchivo);
    }
  }

  public buscarArchivoB1(evt): void {
    document.getElementById('fileInputB1').click();
  }

  public cargarArchivoB1(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp2.get('ordenServicio').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp2.get('ordenServicio').setValue(nombreArchivo);
    }
  }

  anterior(stepper: MatStepper) {
    stepper.previous();
  }

  siguiente(stepper: MatStepper) {
    if (stepper.selectedIndex == 0) {
      //VALIDAR FORM 1
      if (this.formularioGrp1.valid) {
        if (this.listaSolicitudesMant.length > 0) {
          let kil = new MantenimientoVehicular();
          kil.id = 0;
          kil.idUnidad = this.formularioGrp1.get('unidad').value.id;
          kil.nomUnidad = this.formularioGrp1.get('unidad').value.nombre;
          kil.idTipomantenimiento = this.formularioGrp1.get('tipoMantenimiento').value.id;
          kil.nomTipoMantenimiento = this.formularioGrp1.get('tipoMantenimiento').value.nombre;

          console.log(kil);
          stepper.next();
        } else {
          this._snackBar.open('Agregue al menos una solicitud de mantenimiento', 'OK', { duration: 5000, horizontalPosition: 'right', verticalPosition: 'top', panelClass: ['warning-snackbar'] });
        }
      } else {
        this.validationService.getValidationErrors(this.formularioGrp1, this.messages1, this.formErrors1, true);
      }
    } else {
      if (stepper.selectedIndex == 1) {
        //VALIDAR FORM 2
        if (this.formularioGrp2.valid) {
          let kil = new MantenimientoVehicular();
          kil.id = 0;
          kil.codAsigPresupuesto = this.formularioGrp2.get('ordenServicio').value;

          console.log(kil);
          stepper.next();
        } else {
          this.validationService.getValidationErrors(this.formularioGrp1, this.messages1, this.formErrors1, true);
        }
      } else {
        //VALIDAR FORM 3
      }
    }
  }

  buscarOrdenServicio(evt): void {

  }

}
