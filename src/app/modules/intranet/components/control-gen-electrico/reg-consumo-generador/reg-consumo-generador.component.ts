import { Component, OnInit, Inject } from '@angular/core';
import { UNIDADES, TAMBOS } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConsumoGenerador } from 'src/app/model/consumo-generador.model';

@Component({
  selector: 'app-reg-consumo-generador',
  templateUrl: './reg-consumo-generador.component.html',
  styleUrls: ['./reg-consumo-generador.component.scss']
})
export class RegConsumoGeneradorComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  generadores: Object[] = [
    { id: 1, unidad: 'AYACUCHO NORTE', tambo: 'VISTA ALEGRE', marca: 'PERKINS', serie: 'EA-9263' }
  ];
  consumoGeneradorGrp: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegConsumoGeneradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsumoGenerador) { }

  ngOnInit() {
    this.consumoGeneradorGrp = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tambo: [{ value: '', disabled: true }, [Validators.required]],
      generador: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      totalHoras: [{ value: '', disabled: true }, [Validators.required]],
      observacion: ['', [Validators.required]]
    });

    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.consumoGeneradorGrp.get('unidad').setValue(this.unidades[0]);
    this.consumoGeneradorGrp.get('tambo').setValue(this.tambos[0]);
  }

  calcular(): void {
    this.consumoGeneradorGrp.get('totalHoras').setValue(this.timeCalc());
  }

  timeCalc() {
    let start = this.consumoGeneradorGrp.get('horaInicio').value; //to update time value in each input bar
    let end = this.consumoGeneradorGrp.get('horaFin').value; //to update time value in each input bar

    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    return (hours + minutes/60).toFixed(1);
  }

  guardar(): void {
    let con = new ConsumoGenerador();
    con.id = 0;
    con.unidad = this.consumoGeneradorGrp.get('unidad').value.nombre;
    con.tambo = this.consumoGeneradorGrp.get('tambo').value.nombre;
    con.marca = this.consumoGeneradorGrp.get('generador').value.marca;
    con.serie = this.consumoGeneradorGrp.get('generador').value.serie;
    con.horaInicio = this.consumoGeneradorGrp.get('horaInicio').value;
    con.horaFin = this.consumoGeneradorGrp.get('horaFin').value;
    con.horas = this.consumoGeneradorGrp.get('totalHoras').value;
    con.fecha = this.consumoGeneradorGrp.get('fecha').value;
    con.observacion = this.consumoGeneradorGrp.get('observacion').value;

    this.dialogRef.close(con);
  }

}