import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reg-conductor',
  templateUrl: './reg-conductor.component.html',
  styleUrls: ['./reg-conductor.component.scss']
})
export class RegConductorComponent implements OnInit {
  conductorGrp: FormGroup;
  displayedColumns: string[] = ['nro', 'empresa', 'fechaInicio', 'fechaFin'];
  dataSource: MatTableDataSource<Object>;
  ELEMENT_DATA: Object[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegConductorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.conductorGrp = this.fb.group({
      name: ['', [Validators.required]]
    });

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

  limpiar(): void {
    console.log('limpiar');
  }

}


export interface DialogData {
  animal: string;
}
