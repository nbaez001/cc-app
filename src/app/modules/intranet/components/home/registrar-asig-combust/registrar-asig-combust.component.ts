import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registrar-asig-combust',
  templateUrl: './registrar-asig-combust.component.html',
  styleUrls: ['./registrar-asig-combust.component.scss']
})
export class RegistrarAsigCombustComponent implements OnInit {
  tiposcombustible: Object[];
  displayedColumns: string[] = ['nro', 'combustible', 'cantidad'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<RegistrarAsigCombustComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
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


export interface DialogData {
  animal: string;
  name: string;
}

