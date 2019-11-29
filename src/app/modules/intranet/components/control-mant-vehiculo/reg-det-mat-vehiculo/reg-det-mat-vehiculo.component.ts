import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServRepMantenimiento } from 'src/app/model/serv-rep-mantenimiento.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DialogData } from '../../home/registrar-rev-tecnica/registrar-rev-tecnica.component';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reg-det-mat-vehiculo',
  templateUrl: './reg-det-mat-vehiculo.component.html',
  styleUrls: ['./reg-det-mat-vehiculo.component.scss']
})
export class RegDetMatVehiculoComponent implements OnInit {
  formularioGrp: FormGroup;
  messages = {
    'tipoServicio': {
      'required': 'Campo obligatorio'
    },
    'descripcion': {
      'required': 'Campo obligatorio'
    },
    'cantidad': {
      'required': 'Campo obligatorio'
    },
    'unidadMedida': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'tipoServicio': '',
    'descripcion': '',
    'cantidad': '',
    'unidadMedida': ''
  };


  dataSource: MatTableDataSource<ServRepMantenimiento>;
  displayedColumns: string[];
  isLoading: boolean = false;
  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: ServRepMantenimiento) => `${cond.id}`
    }, {
      columnDef: 'nomTipoServicio',
      header: 'Tipo servicio',
      cell: (cond: ServRepMantenimiento) => `${cond.nomTipoServicio}`
    }, {
      columnDef: 'descripcion',
      header: 'Descripcion',
      cell: (cond: ServRepMantenimiento) => `${cond.descripcion}`
    }, {
      columnDef: 'cantidad',
      header: 'Cantidad',
      cell: (cond: ServRepMantenimiento) => `${cond.cantidad}`
    }, {
      columnDef: 'unidadMedida',
      header: 'Unidad medida',
      cell: (cond: ServRepMantenimiento) => `${cond.unidadMedida}`
    }
  ];

  listaServRepMantenimientos: ServRepMantenimiento[] = [];


  listaTipoServicio: Object[] = [
    { id: 1, nombre: 'REPUESTO' },
    { id: 2, nombre: 'SERVICIO' },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegDetMatVehiculoComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      tipoServicio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      unidadMedida: ['', [Validators.required]]
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
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaServRepMantenimientos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaServRepMantenimientos);
      this.dataSource.paginator = this.paginator;
    }
  }

  public inicializarVariables(): void {
    this.definirTabla();
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  guardar(): void {
    // if (this.formularioGrp.valid) {
    //   let mae = new ServRepMantenimiento();
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
