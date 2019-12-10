import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DialogData } from '../../home/registrar-rev-tecnica/registrar-rev-tecnica.component';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION } from 'src/app/common';
import { DetalleMantenimiento } from 'src/app/model/detalle-mantenimiento.mode';
import { DecimalPipe, DatePipe } from '@angular/common';
import { RegDetMatVehiculoComponent } from '../reg-det-mat-vehiculo/reg-det-mat-vehiculo.component';

@Component({
  selector: 'app-reg-mant-vehiculo',
  templateUrl: './reg-mant-vehiculo.component.html',
  styleUrls: ['./reg-mant-vehiculo.component.scss']
})
export class RegMantVehiculoComponent implements OnInit {
  unidades = [];
  tiposMantenimiento = [];
  tiposPresupuesto = [];

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
  formularioGrp2: FormGroup;


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

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegMantVehiculoComponent>,
    public dialog: MatDialog,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe, ) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
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
    this.formularioGrp1 = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      tipoMantenimiento: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      presupuesto: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      carta: [{ value: '', disabled: true }, [Validators.required]],
      informe: [{ value: '', disabled: true }, [Validators.required]],
      requerimiento: [{ value: '', disabled: true }, [Validators.required]]
    });
    this.formularioGrp2 = this.fb.group({
      ordenServicio: [{ value: '', disabled: true }, [Validators.required]]
    });
    this.inicializarVariables();
  }

  salir(): void {
    this.dialogRef.close(null);
  }


  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.formularioGrp.get('presupuesto').setValue('PRESUPUESTO');//this.data.nomTipoAsigPresupuesto + ' N°' + this.data.codAsigPresupuesto + ' - S/.' + this.decimalPipe.transform(this.data.importeAsigPresupuesto, '1.2-2'));
    this.cargarUnidades();
    this.cargarTipomantenimiento();

    this.definirTabla();
    this.listarDetalleMantenimiento();
  }

  definirTabla(): void {
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
    this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
    this.formularioGrp.get('cantVehiculos').setValue(1);
  }


  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));

    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
    }
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




  public buscarArchivoA1(evt): void {
    document.getElementById('fileInputA1').click();
  }

  public cargarArchivoA1(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp1.get('carta').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp1.get('carta').setValue(nombreArchivo);
    }
  }

  public buscarArchivoA2(evt): void {
    document.getElementById('fileInputA2').click();
  }

  public cargarArchivoA2(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp1.get('informe').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp1.get('informe').setValue(nombreArchivo);
    }
  }

  public buscarArchivoA3(evt): void {
    document.getElementById('fileInputA3').click();
  }

  public cargarArchivoA3(event) {// NO SIRVE POR QUE NO DEBE SUBIRSE EL ARCHIVO INMEDIATAMENTE
    this.fileupload = event.target.files[0];
    if (typeof event === 'undefined' || typeof this.fileupload === 'undefined' || typeof this.fileupload.name === 'undefined') {
      this.formularioGrp1.get('requerimiento').setValue(null);
    } else {
      const nombreArchivo = this.fileupload.name;
      this.formularioGrp1.get('requerimiento').setValue(nombreArchivo);
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

}
