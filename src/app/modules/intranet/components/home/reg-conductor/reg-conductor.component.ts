import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA, MatSort } from '@angular/material';
import { Conductor } from 'src/app/model/conductor.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { DatePipe } from '@angular/common';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reg-conductor',
  templateUrl: './reg-conductor.component.html',
  styleUrls: ['./reg-conductor.component.scss']
})
export class RegConductorComponent implements OnInit {
  conductorGrp: FormGroup;
  messages = {
    'nombres': {
      'required': 'Campo obligatorio'
    },
    'apellidos': {
      'required': 'Campo obligatorio'
    },
    'nroBrevete': {
      'required': 'Campo obligatorio'
    },
    'iniVigenciaBrevete': {
      'required': 'Campo obligatorio'
    },
    'finVigenciaBrevete': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'nombres': '',
    'apellidos': '',
    'nroBrevete': '',
    'iniVigenciaBrevete': '',
    'finVigenciaBrevete': ''
  };


  dataSource: MatTableDataSource<Conductor>;
  displayedColumns: string[];
  isLoading: boolean = false;
  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: Conductor) => `${cond.id}`
    }, {
      columnDef: 'nombres',
      header: 'Nombres',
      cell: (cond: Conductor) => `${cond.nombres}`
    }, {
      columnDef: 'apellidos',
      header: 'Apellidos',
      cell: (cond: Conductor) => `${cond.apellidos}`
    }, {
      columnDef: 'nroBrevete',
      header: 'N° Brevete',
      cell: (cond: Conductor) => `${cond.nroBrevete}`
    }, {
      columnDef: 'iniVigenciaBrevete',
      header: 'Inicio fecha vigencia',
      cell: (cond: Conductor) => this.datePipe.transform(cond.iniVigenciaBrevete, 'dd/MM/yyyy')
    }, {
      columnDef: 'finVigenciaBrevete',
      header: 'Fin fecha vigencia',
      cell: (cond: Conductor) => this.datePipe.transform(cond.finVigenciaBrevete, 'dd/MM/yyyy')
    }];
  listaConductores: Conductor[] = [
    { id: 1, nombres: 'ROSA', apellidos: 'SANCHEZ MENDOZA', nroBrevete: 'MPH-22488651', iniVigenciaBrevete: new Date('2017-12-15'), finVigenciaBrevete: new Date('2022-12-14') },
    { id: 2, nombres: 'ROSA', apellidos: 'SANCHEZ MENDOZA', nroBrevete: 'MPH-22474534', iniVigenciaBrevete: new Date('2012-12-15'), finVigenciaBrevete: new Date('2017-12-14') },
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegConductorComponent>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.conductorGrp = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      nroBrevete: ['', [Validators.required]],
      iniVigenciaBrevete: ['', [Validators.required]],
      finVigenciaBrevete: ['', [Validators.required]]
    });

    this.conductorGrp.valueChanges.subscribe((val: any) => {
      this.validationService.getValidationErrors(this.conductorGrp, this.messages, this.formErrors, false);
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
    if (this.listaConductores.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaConductores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  public inicializarVariables(): void {
    this.definirTabla();
    this.listarMaestra(null);
  }

  listarMaestra(cond: Conductor): void {
    this.dataSource = null;
    this.isLoading = true;

    if (cond) {
      this.listaConductores.unshift(cond);
    }

    this.cargarDatosTabla();
    this.isLoading = false;
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.conductorGrp, this.messages, this.formErrors, true);
  }

  guardar(): void {
    if (this.conductorGrp.valid) {
      let mae = new Conductor();
      mae.id = 0;
      mae.nombres = this.conductorGrp.get('nombres').value;
      mae.apellidos = this.conductorGrp.get('apellidos').value;
      mae.nroBrevete = this.conductorGrp.get('nroBrevete').value;
      mae.iniVigenciaBrevete = this.conductorGrp.get('iniVigenciaBrevete').value;
      mae.finVigenciaBrevete = this.conductorGrp.get('finVigenciaBrevete').value;

      console.log(mae);
      this.listarMaestra(mae);
      this.limpiar();
    } else {
      this.validateForm();
    }
  }

  limpiar(): void {
    this.conductorGrp.get('nombres').setValue('');
    this.conductorGrp.get('apellidos').setValue('');
    this.conductorGrp.get('nroBrevete').setValue('');
    this.conductorGrp.get('iniVigenciaBrevete').setValue('');
    this.conductorGrp.get('finVigenciaBrevete').setValue('');
  }

  delConductor(obj): void {
    let index = this.listaConductores.indexOf(obj);
    this.listaConductores.splice(index, 1);

    this.cargarDatosTabla();
  }

}


export interface DialogData {
  animal: string;
}
