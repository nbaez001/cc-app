import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AfectacionPresFE } from 'src/app/model/config/afectacion-pres-fe.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DataDialog } from 'src/app/model/data-dialog.model';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { UNIDADES, TAMBOS } from 'src/app/common';

@Component({
  selector: 'app-reg-sol-fondecg',
  templateUrl: './reg-sol-fondecg.component.html',
  styleUrls: ['./reg-sol-fondecg.component.scss']
})
export class RegSolFondecgComponent implements OnInit {
  nroSolFondoEncargo: string = '19-2019';
  abrevUT: string = 'UTAN';
  abrevGIT: string = 'GIT';
  abrevNombre: string = 'YGH';
  unidades = [];

  formularioGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'tipoMantenimiento': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'tipoMantenimiento': ''
  };

  detFormularioGrp: FormGroup;
  messages2 = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'tipoMantenimiento': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors2 = {
    'unidad': '',
    'tambo': '',
    'tipoMantenimiento': ''
  };
  listaAfectacionPresFE: AfectacionPresFE[];
  dataSource: MatTableDataSource<AfectacionPresFE>;
  displayedColumns: string[];
  columnsGrilla = [
    {
      columnDef: 'mNemonico',
      header: 'META/ NMONICO',
      cell: (cond: AfectacionPresFE) => `${cond.mNemonico}`
    }, {
      columnDef: 'clasificadorGasto',
      header: 'CLASIFICADOR GASTO',
      cell: (cond: AfectacionPresFE) => `${cond.clasificadorGasto}`
    }, {
      columnDef: 'descripcion',
      header: 'NOMBRE BIEN O SERVICIO',
      cell: (cond: AfectacionPresFE) => `${cond.descripcion}`
    }, {
      columnDef: 'unidadMedida',
      header: 'UNIDAD MEDIDA',
      cell: (cond: AfectacionPresFE) => `${cond.unidadMedida}`
    }, {
      columnDef: 'cantidad',
      header: 'CANTIDAD',
      cell: (cond: AfectacionPresFE) => `${cond.cantidad}`
    }, {
      columnDef: 'precioUnitario',
      header: 'PRECIO UNITARIO',
      cell: (cond: AfectacionPresFE) => `S/.${this.decimalPipe.transform(cond.precioUnitario, '1.2-2')}`
    }, {
      columnDef: 'monto',
      header: 'MONTO',
      cell: (cond: AfectacionPresFE) => `S/.${this.decimalPipe.transform(cond.monto, '1.2-2')}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegSolFondecgComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      nombresResponsable: ['', [Validators.required]],
      apellidosResponsable: ['', [Validators.required]],
      dniResponsable: ['', [Validators.required]],
      unidad: ['', [Validators.required]],
      cargoResponsable: ['', [Validators.required]],
      justificacion: ['', [Validators.required]],
      fechaSolicitud: ['', [Validators.required]],
      fecInicioEjecucion: ['', [Validators.required]],
      fecFinEjecucion: ['', [Validators.required]],
      nombreBanco: ['', [Validators.required]],
      cciCuenta: ['', [Validators.required]],
    });

    this.detFormularioGrp = this.fb.group({
      mnemonico: ['', [Validators.required]],
      clasificadorGasto: ['', [Validators.required]],
      nombrebnss: ['', [Validators.required]],
      unidadMedida: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      precioUnitario: ['', [Validators.required]],
      monto: ['', [Validators.required]],
    });

    this.formularioGrp.valueChanges.subscribe((val: any) => {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, false);
    });

    this.inicializarVariables();
  }
  get getUser(): UsuarioService { return this.user; }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.unshift('id');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaAfectacionPresFE.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaAfectacionPresFE);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  public inicializarVariables(): void {
    this.definirTabla();
    this.cargarUnidades();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
    }
  }



  // buscar(): void {
  //   let idUnidad = this.formularioGrp.get('unidad').value.id;
  //   let idTambo = this.formularioGrp.get('tambo').value.id;
  //   let idTipoMantenimiento = this.formularioGrp.get('tipoMantenimiento').value.id;

  //   this.listaAfectacionPresFE = JSON.parse(JSON.stringify(_solicitudesMant));
  //   this.listaAfectacionPresFE = this.listaAfectacionPresFE.filter(el => (el.idUnidad == idUnidad));
  //   this.listaAfectacionPresFE = this.listaAfectacionPresFE.filter(el => (el.idTambo == idTambo || 0 == idTambo));
  //   this.listaAfectacionPresFE = this.listaAfectacionPresFE.filter(el => (el.idTipoMantenimiento == idTipoMantenimiento || 0 == idTipoMantenimiento));

  //   this.cargarDatosTabla();
  // }

}
