import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { DataDialog } from 'src/app/model/data-dialog.model';
import { DetalleSolicitudMant } from 'src/app/model/detalle-solicitud-mant.model';
import { _listaDetalleSolicitud } from 'src/app/common';

@Component({
  selector: 'app-reg-det-mat-vehiculo',
  templateUrl: './reg-det-mat-vehiculo.component.html',
  styleUrls: ['./reg-det-mat-vehiculo.component.scss']
})
export class RegDetMatVehiculoComponent implements OnInit {
  // formularioGrp: FormGroup;
  // messages = {
  //   'tipoServicio': {
  //     'required': 'Campo obligatorio'
  //   },
  //   'descripcion': {
  //     'required': 'Campo obligatorio'
  //   },
  //   'cantidad': {
  //     'required': 'Campo obligatorio'
  //   },
  //   'unidadMedida': {
  //     'required': 'Campo obligatorio'
  //   }
  // };
  // formErrors = {
  //   'tipoServicio': '',
  //   'descripcion': '',
  //   'cantidad': '',
  //   'unidadMedida': ''
  // };


  dataSource: MatTableDataSource<DetalleSolicitudMant>;
  displayedColumns: string[];
  isLoading: boolean = false;
  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: DetalleSolicitudMant) => `${cond.id}`
    }, {
      columnDef: 'nomTipoProducto',
      header: 'Tipo producto',
      cell: (cond: DetalleSolicitudMant) => `${cond.nomTipoProducto}`
    }, {
      columnDef: 'producto',
      header: 'Descripcion',
      cell: (cond: DetalleSolicitudMant) => (cond.producto) ? (cond.producto.length > 60 ? `${cond.producto.substr(0, 59)}...` : `${cond.producto}`) : ''
    }, {
      columnDef: 'cantidad',
      header: 'Cantidad',
      cell: (cond: DetalleSolicitudMant) => `${cond.cantidad}`
    }, {
      columnDef: 'unidadMedida',
      header: 'Unidad medida',
      cell: (cond: DetalleSolicitudMant) => `${cond.unidadMedida}`
    }, {
      columnDef: 'monto',
      header: 'Monto',
      cell: (cond: DetalleSolicitudMant) => `${this.decimalPipe.transform(cond.monto, '1.2-2')}`
    }
  ];

  listaDetalleSolicitudes: DetalleSolicitudMant[] = [];


  // listaTipoServicio: Object[] = [
  //   { id: 1, nombre: 'REPUESTO' },
  //   { id: 2, nombre: 'SERVICIO' },
  // ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegDetMatVehiculoComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    // this.formularioGrp = this.fb.group({
    //   tipoServicio: ['', [Validators.required]],
    //   descripcion: ['', [Validators.required]],
    //   cantidad: ['', [Validators.required]],
    //   unidadMedida: ['', [Validators.required]]
    // });

    // this.formularioGrp.valueChanges.subscribe((val: any) => {
    //   this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, false);
    // });

    this.inicializarVariables();
    this.listaDetalleSolicitudes = _listaDetalleSolicitud;
    this.cargarDatosTabla();
  }

  get getUser(): UsuarioService { return this.user; }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaDetalleSolicitudes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaDetalleSolicitudes);
      this.dataSource.paginator = this.paginator;
    }
  }

  public inicializarVariables(): void {
    this.definirTabla();
  }

  // validateForm(): void {
  //   this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  // }

  guardar(): void {
    // if (this.formularioGrp.valid) {
    //   let mae = new DetalleSolicitudMant();
    //   mae.id = 0;
    //   mae.nombres = this.formularioGrp.get('nombres').value;
    //   mae.apellidos = this.formularioGrp.get('apellidos').value;
    //   mae.nroBrevete = this.formularioGrp.get('nroBrevete').value;
    //   mae.iniVigenciaBrevete = this.formularioGrp.get('iniVigenciaBrevete').value;
    //   mae.finVigenciaBrevete = this.formularioGrp.get('finVigenciaBrevete').value;

    //   console.log(mae);
    //   this.listarMaestra(mae);
    //   this.limpiar();
    // } else {
    //   this.validateForm();
    // }
  }

}
