import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  vehiculos = [];
  listaKilometrajes: Kilometraje[];

  displayedColumns: string[];
  dataSource: MatTableDataSource<Kilometraje>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (kilometraje: Kilometraje) => (kilometraje.id != null) ? `${kilometraje.id}` : ''
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (kilometraje: Kilometraje) => (kilometraje.unidad != null) ? `${kilometraje.unidad}` : ''
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (kilometraje: Kilometraje) => (kilometraje.tambo != null) ? `${kilometraje.tambo}` : ''
    }, {
      columnDef: 'tipo',
      header: 'TIPO',
      cell: (kilometraje: Kilometraje) => (kilometraje.tipo != null) ? `${kilometraje.tipo}` : ''
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (kilometraje: Kilometraje) => (kilometraje.marca != null) ? `${kilometraje.marca}` : ''
    }, {
      columnDef: 'placa',
      header: 'PLACA',
      cell: (kilometraje: Kilometraje) => (kilometraje.placa != null) ? `${kilometraje.placa}` : ''
    }, {
      columnDef: 'horaSalida',
      header: 'HORA SALIDA',
      cell: (kilometraje: Kilometraje) => (kilometraje.horaSalida != null) ? `${kilometraje.horaSalida}` : ''
    }, {
      columnDef: 'horaLlegada',
      header: 'HORA LLEGADA',
      cell: (kilometraje: Kilometraje) => (kilometraje.horaLlegada != null) ? `${kilometraje.horaLlegada}` : ''
    }, {
      columnDef: 'kilometrajeSalida',
      header: 'KILOMETRAJE SALIDA',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrajeSalida != null) ? `${kilometraje.kilometrajeSalida}` : ''
    }, {
      columnDef: 'kilometrajeLlegada',
      header: 'KILOMETRAJE LLEGADA',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrajeLlegada != null) ? `${kilometraje.kilometrajeLlegada}` : ''
    }, {
      columnDef: 'kilometrosRecorrido',
      header: 'KILOMETRAJE RECORRIDO',
      cell: (kilometraje: Kilometraje) => (kilometraje.kilometrosRecorrido != null) ? `${kilometraje.kilometrosRecorrido}` : ''
    }, {
      columnDef: 'lugarDestino',
      header: 'LUGAR DESTINO',
      cell: (kilometraje: Kilometraje) => (kilometraje.lugarDestino != null) ? `${kilometraje.lugarDestino}` : ''
    }, {
      columnDef: 'codComisionSISMONITOR',
      header: 'COD. COMISION SISMONITOR',
      cell: (kilometraje: Kilometraje) => (kilometraje.codComisionSISMONITOR != null) ? `${kilometraje.codComisionSISMONITOR}` : ''
    }, {
      columnDef: 'fechaComision',
      header: 'FECHA COMISION',
      cell: (kilometraje: Kilometraje) => (kilometraje.fechaComision != null) ? `${kilometraje.fechaComision}` : ''
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService
  ) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bandejaGrp = this.fb.group({
      unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      tambo: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
      vehiculo: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  get getUser() {
    return this.user;
  }

  public inicializarVariables(): void {
    this.cargarUnidades();

    this.spinnerService.hide();
  }

  public cargarUnidades() {
    this.unidades = JSON.parse(JSON.stringify(UNIDADES));
    this.unidades.unshift({ id: 0, nombre: 'TODOS' });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('unidad').setValue(this.unidades.filter(el => el.id == this.user.idUnidad)[0]);
    } else {
      this.bandejaGrp.get('unidad').setValue(this.unidades[0]);
    }

    this.cargarTambos();
  }

  public cargarTambos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;

    this.tambos = JSON.parse(JSON.stringify(TAMBOS.filter(tb => tb.idUnidad == idUnidad)));
    this.tambos.unshift({ id: 0, nombre: 'TODOS', idUnidad: 0 });

    if (this.user.perfil.id != 3) {
      this.bandejaGrp.get('tambo').setValue(this.tambos.filter(el => el.id == this.user.idTambo)[0]);
    } else {
      this.bandejaGrp.get('tambo').setValue(this.tambos[0]);
    }

    this.cargarVehiculos();
  }

  public cargarVehiculos() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;

    this.vehiculos = VEHICULOS.filter(el => (el.idUnidad == idUnidad || 0 == idUnidad));
    this.vehiculos = this.vehiculos.filter(el => (el.idTambo == idTambo || 0 == idTambo));

    this.vehiculos.unshift({ id: 0, nombre: 'TODOS' });

    this.bandejaGrp.get('vehiculo').setValue(this.vehiculos[0]);

    this.buscar();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    this.dataSource = null;
    if (this.listaKilometrajes.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaKilometrajes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  calcularSumaKilomatrajes(vehiculo): void {
    if (this.user.perfil.id == 3) {
      let suma = 0.0;
      let galones = '';
      this.listaKilometrajes.forEach(el => {
        suma += el.kilometrosRecorrido;
      });

      if (vehiculo.tipo == 'CAMIONETA') {
        galones = (suma / 35).toFixed(2);//EQUIVALENCIA CAMIONETAS
      } else {
        galones = (suma / 80).toFixed(2);;//EQUIVALENCIA MOTOCILCETAS
      }
      let total = new Kilometraje();
      total.kilometrajeLlegada = 'TOTAL KILOMETROS';
      total.kilometrosRecorrido = suma;
      total.lugarDestino = 'TOTAL GALONES';
      total.codComisionSISMONITOR = galones + '';

      this.listaKilometrajes.push(total);
    }
  }

  buscar() {
    console.log('Buscar');
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;
    let idVehiculo = this.bandejaGrp.get('vehiculo').value.id;

    console.log(idUnidad + ' ' + idTambo + ' ' + idVehiculo);

    this.listaKilometrajes = KILOMETRAJES.filter(el => (el.idUnidad == idUnidad && el.idTambo == idTambo && el.idVehiculo == idVehiculo) || (el.idUnidad == idUnidad && el.idTambo == idTambo && 0 == idVehiculo) || (el.idUnidad == idUnidad && 0 == idTambo && 0 == idVehiculo) || (0 == idUnidad && 0 == idTambo && 0 == idVehiculo));

    if (idVehiculo != 0) {
      this.calcularSumaKilomatrajes(this.bandejaGrp.get('vehiculo').value);
    }
    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegKilometrajeComponent, {
      width: '700px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaKilometrajes.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  editKilometraje(obj): void {
    let indice = this.listaKilometrajes.indexOf(obj);
    const dialogRef = this.dialog.open(RegKilometrajeComponent, {
      width: '700px',
      data: { name: 'NERIO', animal: 'LEON' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.listaKilometrajes.splice(indice,1);
      // this.listaKilometrajes.push(result);
      // this.cargarDatosTabla();
    });
  }

  verObsKilometraje(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(VerObservacionComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }

}
