import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-registrar-soat',
  templateUrl: './registrar-soat.component.html',
  styleUrls: ['./registrar-soat.component.scss']
})
export class RegistrarSoatComponent implements OnInit {
  displayedColumns: string[] = ['nro', 'empresa', 'fechaInicio', 'fechaFin'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialogRef: MatDialogRef<RegistrarSoatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.ELEMENT_DATA = [
      { nro: 1, empresa: 'RIMAC SEGUROS', fechaInicio: '26/02/2018', fechaFin: '26/02/2019' },
      { nro: 2, empresa: 'LA POSITIVA', fechaInicio: '26/02/2017', fechaFin: '26/02/2018' },
      { nro: 3, empresa: 'LA POSITIVA', fechaInicio: '26/02/2016', fechaFin: '26/02/2017' }
    ];

    this.dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


export interface DialogData {
  animal: string;
  name: string;
}
