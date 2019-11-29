import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOEJECUCION } from 'src/app/common';
import { DecimalPipe, DatePipe } from '@angular/common';
import { DetalleMantenimiento } from 'src/app/model/detalle-mantenimiento.mode';
import { ServRepMantenimiento } from 'src/app/model/serv-rep-mantenimiento.model';
import { RegDetMatVehiculoComponent } from '../reg-det-mat-vehiculo/reg-det-mat-vehiculo.component';

@Component({
  selector: 'app-reg-conf-mant-vehiculo',
  templateUrl: './reg-conf-mant-vehiculo.component.html',
  styleUrls: ['./reg-conf-mant-vehiculo.component.scss']
})
export class RegConfMantVehiculoComponent implements OnInit {
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
    public dialogRef: MatDialogRef<RegConfMantVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MantenimientoVehicular,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }

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
    this.inicializarVariables();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  public inicializarVariables(): void {
    this.formularioGrp.get('presupuesto').setValue(this.data.nomTipoAsigPresupuesto + ' N°' + this.data.codAsigPresupuesto + ' - S/.' + this.decimalPipe.transform(this.data.importeAsigPresupuesto, '1.2-2'));
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
    this.formularioGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento.filter(el => el.id == this.data.idTipomantenimiento)[0]);
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
      this.dialogRef.close(kil);
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

}
