import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { TIPOSPRESUPUESTO, UNIDADES } from 'src/app/common';
import { RequerimientoBien } from 'src/app/model/requerimiento-bien.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EjecucionPresupuestal } from 'src/app/model/ejecucion-presupuestal.model';
import { DetalleEjecucion } from 'src/app/model/detalle-ejecucion.model';
import { MatTableDataSource, MatPaginator, MatStepper, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DecimalPipe, DatePipe } from '@angular/common';
import { DataDialog } from 'src/app/model/data-dialog.model';
import { BuscarOrdServcompComponent } from '../../control-mant-vehiculo/reg-mant-vehiculo/buscar-ord-servcomp/buscar-ord-servcomp.component';
import { RegSolFondecgComponent } from '../../control-mant-vehiculo/reg-mant-vehiculo/reg-sol-fondecg/reg-sol-fondecg.component';

@Component({
  selector: 'app-reg-req-combustible',
  templateUrl: './reg-req-combustible.component.html',
  styleUrls: ['./reg-req-combustible.component.scss']
})
export class RegReqCombustibleComponent implements OnInit {
  unidades = [];
  tiposPresupuesto = TIPOSPRESUPUESTO;

  requerimiento: RequerimientoBien;
  fileupload: any;

  formularioGrp1: FormGroup;
  messages1 = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'asuntoRequerimiento': {
      'required': 'Campo obligatorio'
    },
    'tipoPresupuesto': {
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
    'asuntoRequerimiento': '',
    'tipoPresupuesto': '',
    'cotizacion': '',
    'nroHt': '',
    'nroInforme': '',
    'documentacion': '',
  };

  formularioGrp2: FormGroup;
  messages2 = {
    'ordenServicio': {
      'required': 'Campo obligatorio'
    },
    'tipoPresupuesto': {
      'required': 'Campo obligatorio'
    },
    'monto': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors2 = {
    'ordenServicio': '',
    'tipoPresupuesto': '',
    'monto': '',
  };
  ejecucionPresupuestal: EjecucionPresupuestal;

  listaDetalleAfectacion: DetalleEjecucion[] = [];
  dataSource2: MatTableDataSource<DetalleEjecucion> = null;
  displayedColumns2: string[];
  columnsGrilla2 = [
    {
      columnDef: 'ffRb',
      header: 'FF/Rb',
      cell: (det: DetalleEjecucion) => `${det.ffRb}`
    }, {
      columnDef: 'metaNmonico',
      header: 'Meta/Nmonico',
      cell: (det: DetalleEjecucion) => `${det.metaNmonico}`
    }, {
      columnDef: 'clasificadorGasto',
      header: 'Clasif. Gasto',
      cell: (det: DetalleEjecucion) => `${det.clasificadorGasto}`
    }, {
      columnDef: 'descripcion',
      header: 'Descripcion',
      cell: (det: DetalleEjecucion) => `${det.descripcion}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (det: DetalleEjecucion) => `${this.decimalPipe.transform(det.monto, '1.2-2')}`
    }];


  @ViewChild(MatPaginator) paginator2: MatPaginator;

  @ViewChild('stepper') private myStepper: MatStepper;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegReqCombustibleComponent>,
    public dialog: MatDialog,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  ngOnInit() {
    this.formularioGrp1 = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      tipoPresupuesto: ['', [Validators.required]],
      asuntoRequerimiento: [{ value: '', disabled: false }, [Validators.required]],
      cotizacion: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      nroHt: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      nroInforme: [{ value: '', disabled: this.user.perfil.id == 3 }, [Validators.required]],
      documentacion: [{ value: '', disabled: true }, [Validators.required]],
      nomTdrEett: [{ value: '', disabled: true }, []],
      nroFondoEncargo: [{ value: '', disabled: true }, []],
    });

    this.formularioGrp2 = this.fb.group({
      ordenServicio: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tipoPresupuesto: ['', [Validators.required]],
      monto: ['', [Validators.required]]
    });
    this.inicializarVariables();
  }

  get getUser() { return this.user };

  salir(): void {
    this.dialogRef.close(null);
  }

  public inicializarVariables(): void {
    if (this.data.objeto == null) {
      this.requerimiento = new RequerimientoBien();
      this.requerimiento.idEstadoRequerimiento = 1;
      this.formularioGrp1.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);
      this.formularioGrp2.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);
    } else {
      this.requerimiento = JSON.parse(JSON.stringify(this.data.objeto));
      this.formularioGrp1.get('tipoPresupuesto').setValue(this.tiposPresupuesto.filter(el => el.id == this.requerimiento.idTipoAsigPresupuesto)[0]);
      this.formularioGrp2.get('tipoPresupuesto').setValue(this.tiposPresupuesto.filter(el => el.id == this.requerimiento.idTipoAsigPresupuesto)[0]);
      if (this.user.perfil.id == 3) {
        this.formularioGrp1.get('unidad').setValue(this.unidades.filter(el => { el.id == this.requerimiento.idUnidad })[0]);
        // this.formularioGrp1.get('tipoMantenimiento').setValue(this.tiposMantenimiento.filter(el => { el.id == this.requerimiento.idTiporequerimiento })[0]);
        this.formularioGrp1.get('cotizacion').setValue(this.requerimiento.cotizacion);
        this.formularioGrp1.get('nroHt').setValue(this.requerimiento.nroHojatramiteReq);
        this.formularioGrp1.get('nroInforme').setValue(this.requerimiento.nroInformeReq);
        this.move(1);//IR A 2 TAB
      } else {
        this.formularioGrp1.get('unidad').setValue(this.unidades.filter(el => { el.id == this.requerimiento.idUnidad })[0]);
        // this.formularioGrp1.get('tipoMantenimiento').setValue(this.tiposMantenimiento.filter(el => { el.id == this.requerimiento.idTiporequerimiento })[0]);
        this.formularioGrp1.get('cotizacion').setValue(this.requerimiento.cotizacion);
        this.formularioGrp1.get('nroHt').setValue(this.requerimiento.nroHojatramiteReq);
        this.formularioGrp1.get('nroInforme').setValue(this.requerimiento.nroInformeReq);
        if (this.requerimiento.idEstadoRequerimiento == 1) {
          this.move(0);//IR A 2 TAB
        }
      }
    }

    this.deshabilitarCampos(this.requerimiento);

    this.formularioGrp2.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);

    this.cargarUnidades();
    this.definirTabla();
    // this.listarDetalleMantenimiento();
  }

  definirTabla(): void {
    //TABLA SEGUNDA
    this.displayedColumns2 = [];
    this.columnsGrilla2.forEach(c => {
      this.displayedColumns2.push(c.columnDef);
    });
    this.displayedColumns2.unshift('id');
  }

  deshabilitarCampos(mant: RequerimientoBien) {
    if (mant.idEstadoRequerimiento == 1) {//HABILITAR STEP 1
      this.validationService.disableControls(this.formularioGrp2);
    }

    if (mant.idEstadoRequerimiento == 2) {
      this.validationService.disableControls(this.formularioGrp1);
    }
  }

  public cargarDatosTabla2(): void {
    this.dataSource2 = null;
    if (this.listaDetalleAfectacion.length > 0) {
      this.dataSource2 = new MatTableDataSource(this.listaDetalleAfectacion);
      this.dataSource2.paginator = this.paginator2;
    }
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    if (this.user.perfil.id != 3) {
      this.formularioGrp1.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp1.get('unidad').setValue(this.unidades[0]);
    }
  }


  guardar(): void {
    if (this.formularioGrp2.valid) {
      let kil = new RequerimientoBien();
      kil.id = 0;
      kil.idUnidad = this.formularioGrp1.get('unidad').value.id;
      kil.nomUnidad = this.formularioGrp1.get('unidad').value.nombre;
      // kil.idTiporequerimiento = this.formularioGrp.get('tipoMantenimiento').value.id;
      // kil.nomTipoMantenimiento = this.formularioGrp.get('tipoMantenimiento').value.nombre;
      // kil.idTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.id;
      // kil.nomTipoAsigPresupuesto = this.formularioGrp.get('tipoPresupuesto').value.nombre;
      // kil.codAsigPresupuesto = this.formularioGrp.get('codAsigPresupuesto').value;
      // kil.importeAsigPresupuesto = this.formularioGrp.get('importeAsigPresupuesto').value;

      console.log(kil);
      console.log('TODO CORRECTO');
    } else {
      this.validationService.getValidationErrors(this.formularioGrp2, this.messages2, this.formErrors2, true);
    }
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
        let kil = new RequerimientoBien();
        kil.id = 0;
        kil.idUnidad = this.formularioGrp1.get('unidad').value.id;
        kil.nomUnidad = this.formularioGrp1.get('unidad').value.nombre;

        console.log(kil);
        stepper.next();
      } else {
        this.validationService.getValidationErrors(this.formularioGrp1, this.messages1, this.formErrors1, true);
      }
    } else {
      if (stepper.selectedIndex == 1) {
        //VALIDAR FORM 2
        if (this.formularioGrp2.valid) {
          let kil = new RequerimientoBien();
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
    const dialogRef3 = this.dialog.open(BuscarOrdServcompComponent, {
      width: '800px',
      data: { title: 'Buscar solicitudes requerimiento', objeto: null }
    });

    dialogRef3.afterClosed().subscribe(result => {
      if (result) {
        this.ejecucionPresupuestal = result;
        console.log(this.ejecucionPresupuestal);
        this.formularioGrp2.get('ordenServicio').setValue((this.ejecucionPresupuestal.nroOrdencompra != null && this.ejecucionPresupuestal.nroOrdencompra != '') ? this.ejecucionPresupuestal.nroOrdencompra : this.ejecucionPresupuestal.nroResAdministracion);
        this.formularioGrp2.get('tipoPresupuesto').setValue(this.tiposPresupuesto.filter(el => el.id == this.ejecucionPresupuestal.idTipoejecucion)[0]);
        this.formularioGrp2.get('monto').setValue(this.ejecucionPresupuestal.monto);

        let detEjecucion = new DetalleEjecucion();
        detEjecucion.id = 0;
        detEjecucion.metaNmonico = '0023';
        detEjecucion.descripcion = 'MANTENIMIENTO MOTOCILETA';
        detEjecucion.ffRb = '1-00';
        detEjecucion.clasificadorGasto = '2.3.24.13';
        detEjecucion.monto = 9256.00;

        this.listaDetalleAfectacion = [];
        this.listaDetalleAfectacion.push(detEjecucion);
        this.cargarDatosTabla2();
      }
    });
  }

  quitarSolicitudMant(el): void {

  }

  move(index: number) {
    this.myStepper.selectedIndex = index;
  }

  solFondoEncargo(): void {
    const dialogRef3 = this.dialog.open(RegSolFondecgComponent, {
      width: '900px',
      data: { title: 'FORMATO N° 01: SOLICITUD DE OTORGAMIENTO DE ENCARGO', objeto: { tipo: 1 } }//TIPO: 1(BIENES), 2(SERVICIOS)
    });

    dialogRef3.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaMantenimientos.splice(indice,1);
      // this.listaMantenimientos.push(result);
      // this.cargarDatosTabla();
    });
  }

}
