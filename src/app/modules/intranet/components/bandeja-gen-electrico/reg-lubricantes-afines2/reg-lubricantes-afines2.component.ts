import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { UNIDADES, TAMBOS, VEHICULOS, PRODUCTOSLUBRICANTE, generadores } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Lubricante } from 'src/app/model/lubricante.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ValidationService } from 'src/app/services/validation.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe, DecimalPipe, formatDate } from '@angular/common';
import { Generador } from 'src/app/model/generador.model';

@Component({
  selector: 'app-reg-lubricantes-afines2',
  templateUrl: './reg-lubricantes-afines2.component.html',
  styleUrls: ['./reg-lubricantes-afines2.component.scss']
})
export class RegLubricantesAfines2Component implements OnInit {
  formularioGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'generador': {
      'required': 'Campo obligatorio'
    },
    'producto': {
      'required': 'Campo obligatorio'
    },
    'score': {
      'required': 'Campo obligatorio'
    },
    'cantidad': {
      'required': 'Campo obligatorio'
    },
    // 'precio': {
    //   'required': 'Campo obligatorio'
    // },
    // 'total': {
    //   'required': 'Campo obligatorio'
    // },
    'fecha': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'generador': '',
    'producto': '',
    'score': '',
    // 'precio': '',
    // 'total': '',
    'fecha': '',
  };

  tambos = [];
  unidades = [];
  generadores = [];
  productos = PRODUCTOSLUBRICANTE;


  dataSource: MatTableDataSource<Lubricante>;
  displayedColumns: string[];
  isLoading: boolean = false;
  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (cond: Lubricante) => `${cond.id}`
    }, {
      columnDef: 'nomTipoProducto',
      header: 'Tipo producto',
      cell: (cond: Lubricante) => `${cond.nomTipoProducto}`
    }, {
      columnDef: 'score',
      header: 'Horas uso',
      cell: (cond: Lubricante) => this.decimalPipe.transform(cond.score, '1.1-1')
    }, {
      columnDef: 'cantidad',
      header: 'Cantidad producto',
      cell: (cond: Lubricante) => this.decimalPipe.transform(cond.cantidad, '1.2-2')
    }, {
    //   columnDef: 'precio',
    //   header: 'Precio',
    //   cell: (cond: Lubricante) => this.decimalPipe.transform(cond.precio, '1.2-2')
    // }, {
    //   columnDef: 'total',
    //   header: 'Total',
    //   cell: (cond: Lubricante) => this.decimalPipe.transform(cond.total, '1.2-2')
    // }, {
      columnDef: 'fecha',
      header: 'Fecha',
      cell: (cond: Lubricante) => this.datePipe.transform(cond.fecha, 'dd/MM/yyyy')
    }];


  listaLubricantes: Lubricante[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', idVehiculo: 1, nomVehiculo: 'GENERADOR', score: 100, idTipoProducto: 1, nomTipoProducto: 'LUBRICANTE', cantidad: 1, precio: 35, total: 35, fecha: new Date('2019-10-10') }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegLubricantesAfines2Component>,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(MAT_DIALOG_DATA) public data: Generador,
    @Inject(ValidationService) private validationService: ValidationService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tambo: [{ value: '', disabled: true }, [Validators.required]],
      generador: ['', [Validators.required]],
      producto: ['', [Validators.required]],
      score: [{ value: 100, disabled: true }, , [Validators.required]],
      cantidad: ['', [Validators.required]],
      // precio: ['', [Validators.required]],
      // total: [{ value: '', disabled: true }, [Validators.required]],
      fecha: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), [Validators.required]],
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
    if (this.listaLubricantes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaLubricantes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  public inicializarVariables(): void {
    this.formularioGrp.get('producto').setValue(this.productos[0]);
    this.definirTabla();
    this.cargarUnidades();
    this.cargarDatosTabla();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.formularioGrp.get('unidad').setValue(this.unidades[0]);
    }
    this.cargarTambos();
  }

  public cargarTambos() {
    let idUnidad = this.formularioGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idUnidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'OFICINA DE UNIDAD TERRITORIAL', idunidad: 0 });

    if (this.user.perfil.id != 3) {
      this.formularioGrp.get('tambo').setValue(this.tambos.filter(el => el.id == this.user.idTambo)[0]);
    } else {
      this.formularioGrp.get('tambo').setValue(this.tambos[0]);
    }

    this.buscar();
  }

  buscar() {
    let idUnidad = this.formularioGrp.get('unidad').value.id;
    let idTambo = this.formularioGrp.get('tambo').value.id;

    this.generadores = generadores.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.generadores = this.generadores.filter(el => (el.idTambo == idTambo));

    this.formularioGrp.get('generador').setValue(this.generadores[0]);
  }

  validateForm(): void {
    this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
  }

  // calcular(): void {
  //   this.formularioGrp.get('total').setValue(this.formularioGrp.get('cantidad').value * this.formularioGrp.get('precio').value);
  // }

  guardar(): void {
    if (this.formularioGrp.valid) {
      let con = new Lubricante();
      con.id = 0;
      con.idUnidad = this.formularioGrp.get('unidad').value.id;
      con.nomUnidad = this.formularioGrp.get('unidad').value.nombre;
      con.idTambo = this.formularioGrp.get('tambo').value.id;
      con.nomTambo = this.formularioGrp.get('tambo').value.nombre;
      con.idVehiculo = this.formularioGrp.get('generador').value.id;
      con.nomVehiculo = this.formularioGrp.get('generador').value.nomTipo + ' ' + this.formularioGrp.get('generador').value.marca + ' ' + this.formularioGrp.get('generador').value.placa;
      con.score = this.formularioGrp.get('score').value;

      con.idTipoProducto = this.formularioGrp.get('producto').value.id;
      con.nomTipoProducto = this.formularioGrp.get('producto').value.nombre;
      con.cantidad = this.formularioGrp.get('cantidad').value;
      // con.precio = this.formularioGrp.get('precio').value;
      // con.total = this.formularioGrp.get('total').value;
      con.fecha = this.formularioGrp.get('fecha').value;

      this.listaLubricantes.unshift(con);
      this.validationService.setAsUntoched(this.formularioGrp, this.formErrors);
      this.cargarDatosTabla();
    } else {
      this.validationService.getValidationErrors(this.formularioGrp, this.messages, this.formErrors, true);
    }
  }

}
