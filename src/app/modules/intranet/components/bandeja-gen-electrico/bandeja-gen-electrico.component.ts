import { Component, OnInit, ViewChild } from '@angular/core';
import { UNIDADES, TAMBOS, TIPOSVEHICULO, generadores } from 'src/app/common';
import { Generador } from 'src/app/model/generador.model';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-bandeja-gen-electrico',
  templateUrl: './bandeja-gen-electrico.component.html',
  styleUrls: ['./bandeja-gen-electrico.component.scss']
})
export class BandejaGenElectricoComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  listaGeneradores: Generador[] = generadores;

  displayedColumns: string[];
  dataSource: MatTableDataSource<Generador>;

  bdjGeneradorGrp: FormGroup;
  messages = {
    'name': {
      'required': 'Field is required',
      'minlength': 'Insert al least 2 characters',
      'maxlength': 'Max name size 20 characters'
    }
  };

  formErrors = {
    'name': '',
  };

  columnsGrilla = [
    {
      columnDef: 'id',
      header: 'N°',
      cell: (gen: Generador) => `${gen.id}`
    }, {
      columnDef: 'codPatrimonio',
      header: 'Cod patrimonio',
      cell: (gen: Generador) => `${gen.codPatrimonio}`
    }, {
      columnDef: 'nomUnidad',
      header: 'Unidad',
      cell: (gen: Generador) => `${gen.nomUnidad}`
    }, {
      columnDef: 'nomTambo',
      header: 'Tambo',
      cell: (gen: Generador) => `${gen.nomTambo}`
    }, {
      columnDef: 'denominacion',
      header: 'Denominacion',
      cell: (gen: Generador) => `${gen.denominacion}`
    }, {
      columnDef: 'marca',
      header: 'Marca',
      cell: (gen: Generador) => `${gen.marca}`
    }, {
      columnDef: 'modelo',
      header: 'Modelo',
      cell: (gen: Generador) => `${gen.modelo}`
    }, {
      columnDef: 'tipo',
      header: 'Tipo',
      cell: (gen: Generador) => `${gen.tipo}`
    }, {
      columnDef: 'serie',
      header: 'Serie',
      cell: (gen: Generador) => `${gen.serie}`
    }, {
      columnDef: 'color',
      header: 'Color',
      cell: (gen: Generador) => `${gen.color}`
    }, {
      columnDef: 'estado',
      header: 'Estado',
      cell: (gen: Generador) => `${gen.estado}`
    }, {
      columnDef: 'usuario',
      header: 'Usuario',
      cell: (gen: Generador) => `${gen.usuario}`
    }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();

    this.bdjGeneradorGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.definirTabla();
    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.dataSource = null;
    // this.banMonitoreoFrmGrp.get('estadoMonitoreoFrmCtrl').setValue(ESTADO_MONITOREO.pendienteInformacion);
    this.cargarDatosTabla();
  }

  definirTabla(): void {
    this.displayedColumns = [];
    this.columnsGrilla.forEach(c => {
      this.displayedColumns.push(c.columnDef);
    });
    // this.displayedColumns.push('opt');
  }

  public cargarDatosTabla(): void {
    if (this.listaGeneradores.length > 0) {
      this.dataSource = new MatTableDataSource(this.listaGeneradores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    this.spinnerService.hide();
  }

  buscar() {
    console.log('Buscar');
  }

  exportarExcel() {
    console.log('Exportar');
  }

  regVehiculo(obj): void {
    // console.log(obj);
    // const dialogRef = this.dialog.open(RegistrarVehiculoComponent, {
    //   width: '500px',
    //   data: { name: 'NERIO', animal: 'LEON' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

}
