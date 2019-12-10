import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DataDialog } from 'src/app/model/data-dialog.model';

@Component({
  selector: 'app-registrar-asig-combust',
  templateUrl: './registrar-asig-combust.component.html',
  styleUrls: ['./registrar-asig-combust.component.scss']
})
export class RegistrarAsigCombustComponent implements OnInit {
  asigCombustibleGrp:FormGroup;
  tiposcombustible: Object[];
  displayedColumns: string[] = ['nro', 'combustible', 'cantidad'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder,public dialogRef: MatDialogRef<RegistrarAsigCombustComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataDialog,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.asigCombustibleGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.tiposcombustible = [
      { id: 1, nombre: 'DIESEL B5' },
      { id: 2, nombre: 'GASOHOL 90' }
    ];

    this.ELEMENT_DATA = [
      { nro: 1, combustible: 'GASOHOL 90', cantidad: '10' },
      { nro: 2, combustible: 'GASOHOL 90', cantidad: '15' },
      { nro: 3, combustible: 'GASOHOL 90', cantidad: '10' }
    ];

    this.dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  limpiar(): void{
    console.log('limpiar');
  }

}