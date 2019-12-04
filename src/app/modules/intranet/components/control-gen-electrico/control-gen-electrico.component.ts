import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsumoGenerador } from 'src/app/model/consumo-generador.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { UNIDADES, TAMBOS, CONSUMOSGENERADOR } from 'src/app/common';
import { RegConsumoGeneradorComponent } from './reg-consumo-generador/reg-consumo-generador.component';
import { Usuario } from 'src/app/model/usuario.model';
import { VerObservacionConsComponent } from './ver-observacion-cons/ver-observacion-cons.component';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-control-gen-electrico',
  templateUrl: './control-gen-electrico.component.html',
  styleUrls: ['./control-gen-electrico.component.scss']
})
export class ControlGenElectricoComponent implements OnInit {
  bandejaGrp: FormGroup;
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaConsumos: ConsumoGenerador[] = [];

  displayedColumns: string[];
  dataSource: MatTableDataSource<ConsumoGenerador>;

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (consumo: ConsumoGenerador) => `${consumo.id}`
    }, {
      columnDef: 'unidad',
      header: 'UNIDAD',
      cell: (consumo: ConsumoGenerador) => `${consumo.nomUnidad}`
    }, {
      columnDef: 'tambo',
      header: 'TAMBO',
      cell: (consumo: ConsumoGenerador) => `${consumo.nomTambo}`
    }, {
      columnDef: 'marca',
      header: 'MARCA',
      cell: (consumo: ConsumoGenerador) => `${consumo.marca}`
    }, {
      columnDef: 'serie',
      header: 'SERIE',
      cell: (consumo: ConsumoGenerador) => `${consumo.serie}`
    }, {
      columnDef: 'horaInicio',
      header: 'HORA INICIO',
      cell: (consumo: ConsumoGenerador) => `${consumo.horaInicio}`
    }, {
      columnDef: 'horaFin',
      header: 'HORA FIN',
      cell: (consumo: ConsumoGenerador) => `${consumo.horaFin}`
    }, {
      columnDef: 'horas',
      header: 'TOTAL HORAS',
      cell: (consumo: ConsumoGenerador) => `${consumo.horas}`
    }, {
      columnDef: 'fecha',
      header: 'FECHA USO',
      cell: (consumo: ConsumoGenerador) => `${this.datePipe.transform(consumo.fecha, 'dd/MM/yyyy')}`
    }];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private spinnerService: Ng4LoadingSpinnerService,
    @Inject(UsuarioService) private user: UsuarioService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.spinnerService.show();
    const validarIntervalo = setInterval(() => {
      if (this.user.getId) {
        this.bandejaGrp = this.fb.group({
          unidad: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
          tambo: [{ value: '', disabled: this.user.perfil.id != 3 }, [Validators.required]],
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
    this.dataSource = null;
    this.cargarUnidades();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    if (this.listaConsumos.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaConsumos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
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

    this.buscar();
  }

  buscar() {
    let idUnidad = this.bandejaGrp.get('unidad').value.id;
    let idTambo = this.bandejaGrp.get('tambo').value.id;

    this.listaConsumos = CONSUMOSGENERADOR.filter(el => (el.idUnidad == idUnidad) || (0 == idUnidad));
    this.listaConsumos = this.listaConsumos.filter(el => (el.idTambo == idTambo) || (0 == idTambo));

    this.cargarDatosTabla();
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regConsumo(obj): void {
    console.log(obj);
    const dialogRef = this.dialog.open(RegConsumoGeneradorComponent, {
      width: '700px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listaConsumos.unshift(result);
        this.cargarDatosTabla();
      }
    });
  }

  verObsConsumo(obj): void {
    const dialogRef = this.dialog.open(VerObservacionConsComponent, {
      width: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }
}
