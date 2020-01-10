import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MantenimientoVehicular } from 'src/app/model/mantenimiento-vehiculo.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UNIDADES, TIPOSMANTENIMIENTO, TIPOSPRESUPUESTO, MANTENIMIENTOS, _estadosRequerimiento } from 'src/app/common';
import { RegMantVehiculoComponent } from './reg-mant-vehiculo/reg-mant-vehiculo.component';
import { Router } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-control-mant-vehiculo',
  templateUrl: './control-mant-vehiculo.component.html',
  styleUrls: ['./control-mant-vehiculo.component.scss']
})
export class ControlMantVehiculoComponent implements OnInit {
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
  estadosRequerimiento = [];
  listaMantenimientos: MantenimientoVehicular[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<MantenimientoVehicular>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (mant: MantenimientoVehicular) => (mant.id != null) ? `${mant.id}` : ''
    }, {
      columnDef: 'nomUnidad',
      header: 'UNIDAD',
      cell: (mant: MantenimientoVehicular) => (mant.nomUnidad != null) ? `${mant.nomUnidad}` : ''
    }, {
      columnDef: 'asuntoRequerimiento',
      header: 'ASUNTO REQUERIMIENTO',
      cell: (mant: MantenimientoVehicular) => (mant.asuntoRequerimiento != null) ? ((mant.asuntoRequerimiento.length > 70) ? `${mant.asuntoRequerimiento.substr(0, 69)}...` : `${mant.asuntoRequerimiento}`) : ''
    }, {
      columnDef: 'nroInformeReq',
      header: 'NRO INFORME REQ.',
      cell: (mant: MantenimientoVehicular) => (mant.nroInformeReq != null) ? `${mant.nroInformeReq}` : ''
    }, {
      columnDef: 'nroHojatramiteReq',
      header: 'NRO H.T. REQ.',
      cell: (mant: MantenimientoVehicular) => (mant.nroHojatramiteReq != null) ? `${mant.nroHojatramiteReq}` : ''
    }, {
      columnDef: 'fecha',
      header: 'FECHA REQUERIMIENTO',
      cell: (mant: MantenimientoVehicular) => (mant.fecha != null) ? `${this.datePipe.transform(mant.fecha, 'dd/MM/yyyy')}` : ''
    }, {
      columnDef: 'nomTipoAsigPresupuesto',
      header: 'TIPO PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.nomTipoAsigPresupuesto != null) ? `${mant.nomTipoAsigPresupuesto}` : ''
    }, {
      columnDef: 'codAsigPresupuesto',
      header: 'NRO. DOC. PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.codAsigPresupuesto != null) ? `${mant.codAsigPresupuesto}` : ''
    }, {
      columnDef: 'marcimporteAsigPresupuestoa',
      header: 'MONTO PRESUPUESTO',
      cell: (mant: MantenimientoVehicular) => (mant.importeAsigPresupuesto != null) ? `${this.decimalPipe.transform(mant.importeAsigPresupuesto, '1.2-2')}` : ''
    }, {
      columnDef: 'nroActaConf',
      header: 'NRO ACTA CONFORMIDAD',
      cell: (mant: MantenimientoVehicular) => (mant.nroActaConf != null) ? `${mant.nroActaConf}` : ''
    }, {
      columnDef: 'nroInformeConf',
      header: 'NRO INFORME CONF.',
      cell: (mant: MantenimientoVehicular) => (mant.nroInformeConf != null) ? `${mant.nroInformeConf}` : ''
    }, {
      columnDef: 'nroHojatramiteConf',
      header: 'NRO H.T. CONF.',
      cell: (mant: MantenimientoVehicular) => (mant.nroHojatramiteConf != null) ? `${mant.nroHojatramiteConf}` : ''
    }, {
      columnDef: 'nomEstadoMantenimiento',
      header: 'ESTADO MANTENIMIENTO',
      cell: (mant: MantenimientoVehicular) => (mant.nomEstadoMantenimiento != null) ? `${mant.nomEstadoMantenimiento}` : ''
    }];

  conBadge: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    private decimalPipe: DecimalPipe,
    private datePipe: DatePipe,
    @Inject(UsuarioService) private user: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
          // tipoMantenimiento: ['', [Validators.required]],
          estadoRequerimiento: ['', [Validators.required]]
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
    // this.cargarTipomantenimiento();
    this.cargarEstadosRequerimiento();

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

  // public cargarTipomantenimiento() {
  //   this.tiposMantenimiento = JSON.parse(JSON.stringify(TIPOSMANTENIMIENTO));
  //   this.tiposMantenimiento.unshift({ id: 0, nombre: 'TODOS' });

  //   this.bandejaGrp.get('tipoMantenimiento').setValue(this.tiposMantenimiento[0]);
  // }

  public cargarEstadosRequerimiento() {
    this.estadosRequerimiento = JSON.parse(JSON.stringify(_estadosRequerimiento));
    this.estadosRequerimiento.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('estadoRequerimiento').setValue(this.estadosRequerimiento[0]);
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
        if (el.idEstadoMantenimiento == 2) {
          el.conBadge = true;
        } else {
          el.conBadge = false;
        }
      } else {
        if (el.idEstadoMantenimiento == 3) {
          el.conBadge = true;
        } else {
          el.conBadge = false;
        }
      }
    });
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    // let idTipomantenimiento = this.bandejaGrp.get('tipoMantenimiento').value.id;
    let idEstadoRequerimiento = this.bandejaGrp.get('estadoRequerimiento').value.id;

    this.listaMantenimientos = MANTENIMIENTOS.filter(el => (el.idUnidad == idUnidad || 0 == idUnidad));
    // this.listaMantenimientos = this.listaMantenimientos.filter(el => (el.idTipomantenimiento == idTipomantenimiento || 0 == idTipomantenimiento));
    this.listaMantenimientos = this.listaMantenimientos.filter(el => (el.idEstadoMantenimiento == idEstadoRequerimiento || 0 == idEstadoRequerimiento));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    let url = "/assets/files/reportes/requerimiento-servicios.xlsx";

    var blob = null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";//force the HTTP response, response-type header to be blob
    xhr.onload = () => {
      blob = xhr.response;//xhr.response is now a blob object
      let file = new File([blob], 'requerimiento-servicios.xlsx', { type: 'application/xlsx', lastModified: Date.now() });

      var a = document.createElement("a");
      var fileURL = window.URL.createObjectURL(file);
      a.href = fileURL;
      a.download = file.name;
      a.click();
    }
    xhr.send();
  }

  solMantenimientoVehicular(obj): void {
    this.router.navigate(['/intranet/req-mantenimiento']);
  }

  regMantenimientoVehicular(obj): void {
    let indice = this.listaMantenimientos.indexOf(obj);
    const dialogRef = this.dialog.open(RegMantVehiculoComponent, {
      width: '1000px',
      data: { title: 'Mantenimiento vehicular', objeto: obj }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaMantenimientos.splice(indice,1);
      // this.listaMantenimientos.push(result);
      // this.cargarDatosTabla();
    });
  }
}
