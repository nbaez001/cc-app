import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequerimientoBien } from 'src/app/model/requerimiento-bien.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { UNIDADES, TIPOSPRESUPUESTO, _requerimientosBien } from 'src/app/common';
import { RegReqCombustibleComponent } from './reg-req-combustible/reg-req-combustible.component';

@Component({
  selector: 'app-req-combustible',
  templateUrl: './req-combustible.component.html',
  styleUrls: ['./req-combustible.component.scss']
})
export class ReqCombustibleComponent implements OnInit {
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
  listaMantenimientos: RequerimientoBien[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<RequerimientoBien>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (mant: RequerimientoBien) => (mant.id != null) ? `${mant.id}` : ''
    }, {
      columnDef: 'detalleRequerimiento',
      header: 'DET. REQUERIMIENTO',
      cell: (mant: RequerimientoBien) => (mant.detalleRequerimiento != null) ? `${mant.detalleRequerimiento}` : ''
    }, {
      columnDef: 'nomTipoAsigPresupuesto',
      header: 'TIPO PRESUPUESTO',
      cell: (mant: RequerimientoBien) => (mant.nomTipoAsigPresupuesto != null) ? `${mant.nomTipoAsigPresupuesto}` : ''
    }, {
      columnDef: 'codAsigPresupuesto',
      header: 'NRO. RES. ADMINISTRACION/ NRO. ORDEN COMPRA',
      cell: (mant: RequerimientoBien) => (mant.codAsigPresupuesto != null) ? `${mant.codAsigPresupuesto}` : ''
    }, {
      columnDef: 'importeAsigPresupuestoa',
      header: 'MONTO PRESUPUESTO',
      cell: (mant: RequerimientoBien) => (mant.importeAsigPresupuesto != null) ? `${mant.importeAsigPresupuesto}` : ''
    }];

  conBadge: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
          tipoPresupuesto: ['', [Validators.required]]
        });

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
    this.cargarUnidades();
    this.cargarTipopresupuesto();

    this.spinnerService.hide();
    this.buscar();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }
  }

  public cargarTipopresupuesto() {
    this.tiposPresupuesto = JSON.parse(JSON.stringify(TIPOSPRESUPUESTO));
    this.tiposPresupuesto.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('tipoPresupuesto').setValue(this.tiposPresupuesto[0]);
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.determinarAlerta();
    this.dataSource = null;
    if (this.listaMantenimientos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaMantenimientos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  determinarAlerta(): void {
    this.listaMantenimientos.forEach(el => {
      if (this.user.perfil.id == 3) {
        if (el.idEstadoRequerimiento == 2) {
          el.conBadge = true;
        } else {
          el.conBadge = false;
        }
      } //else {
      //   if (el.idEstadoMantenimiento == 3) {
      //     el.conBadge = true;
      //   } else {
      //     el.conBadge = false;
      //   }
      // }
    });
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTipopresupuesto = this.bandejaGrp.get('tipoPresupuesto').value.id;

    this.listaMantenimientos = _requerimientosBien.filter(el => (el.idUnidad == idUnidad || 0 == idUnidad));
    this.listaMantenimientos = this.listaMantenimientos.filter(el => (el.idTipoAsigPresupuesto == idTipopresupuesto || 0 == idTipopresupuesto));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  solRequerimientoBien(obj): void {
    this.router.navigate(['/intranet/req-mantenimiento']);
  }

  regRequerimientoBien(obj): void {
    let indice = this.listaMantenimientos.indexOf(obj);
    const dialogRef = this.dialog.open(RegReqCombustibleComponent, {
      width: '900px',
      data: { title: 'Registrar requerimiento combustible', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaMantenimientos.splice(indice,1);
      // this.listaMantenimientos.push(result);
      // this.cargarDatosTabla();
    });
  }

  // verObsRequerimientoBien(obj): void {
  //   const dialogRef = this.dialog.open(VerObsReqCombustibleComponent, {
  //     width: '500px',
  //     data: obj
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     // console.log(result);
  //   });
  // }

}
