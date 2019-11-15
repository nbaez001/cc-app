import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-conf-orden-compra',
  templateUrl: './conf-orden-compra.component.html',
  styleUrls: ['./conf-orden-compra.component.scss']
})
export class ConfOrdenCompraComponent implements OnInit {
  ordenGrp: FormGroup;
  displayedColumns: string[] = ['codigo', 'cantidad', 'unidadMedida', 'descripcion', 'unitario', 'total'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ConfOrdenCompraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(UsuarioService) private user: UsuarioService) { }

  ngOnInit() {
    this.ordenGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.ELEMENT_DATA = [];

    this.dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  get getUser(): UsuarioService { return this.user; }

  onNoClick(): void {
    this.dialogRef.close();
  }

  limpiar(): void {
    console.log('limpiar');
  }

}


export interface DialogData {
  animal: string;
  name: string;
}