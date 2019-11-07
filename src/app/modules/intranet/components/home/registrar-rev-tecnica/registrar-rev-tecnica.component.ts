import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-rev-tecnica',
  templateUrl: './registrar-rev-tecnica.component.html',
  styleUrls: ['./registrar-rev-tecnica.component.scss']
})
export class RegistrarRevTecnicaComponent implements OnInit {
  revTecnicaGrp: FormGroup;
  displayedColumns: string[] = ['nro', 'empresa', 'fechaInicio', 'fechaFin'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegistrarRevTecnicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.revTecnicaGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.ELEMENT_DATA = [
      { nro: 1, empresa: 'MECANICA RAMOS', fechaInicio: '19/05/2018', fechaFin: '19/05/2019' },
      { nro: 2, empresa: 'MECANICA RAMOS', fechaInicio: '19/05/2017', fechaFin: '19/05/2018' },
      { nro: 3, empresa: 'MECANICA RAMOS', fechaInicio: '19/05/2016', fechaFin: '19/05/2017' }
    ];

    this.dataSource = new MatTableDataSource<Object>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }

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