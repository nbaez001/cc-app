import { Component, OnInit, Inject } from '@angular/core';
import { UNIDADES, TAMBOS } from 'src/app/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ValidationService } from 'src/app/services/validation.service';
import { ConsumoDeslizador } from 'src/app/model/consumo-deslizador.model';

@Component({
  selector: 'app-reg-hrs-deslizador',
  templateUrl: './reg-hrs-deslizador.component.html',
  styleUrls: ['./reg-hrs-deslizador.component.scss']
})
export class RegHrsDeslizadorComponent implements OnInit {
  unidades = UNIDADES;
  tambos = TAMBOS;
  deslizadores: Object[] = [
    { id: 1, unidad: 'U.T. LORETO', tambo: 'VISTA ALEGRE', descripcion: 'DESLIZADOR', marca: 'PERKINS', serie: 'EA-9263' }
  ];

  consumoDeslizadorGrp: FormGroup;
  messages = {
    'unidad': {
      'required': 'Campo obligatorio'
    },
    'tambo': {
      'required': 'Campo obligatorio'
    },
    'deslizador': {
      'required': 'Campo obligatorio'
    },
    'fecha': {
      'required': 'Campo obligatorio'
    },
    'horaInicio': {
      'required': 'Campo obligatorio'
    },
    'horaFin': {
      'required': 'Campo obligatorio'
    },
    'totalHoras': {
      'required': 'Campo obligatorio'
    },
    'observacion': {
      'required': 'Campo obligatorio'
    }
  };
  formErrors = {
    'unidad': '',
    'tambo': '',
    'deslizador': '',
    'fecha': '',
    'horaInicio': '',
    'horaFin': '',
    'totalHoras': '',
    'observacion': ''
  };

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegHrsDeslizadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConsumoDeslizador,
    @Inject(ValidationService) private validationService: ValidationService) { }

  ngOnInit() {
    this.consumoDeslizadorGrp = this.fb.group({
      unidad: [{ value: '', disabled: true }, [Validators.required]],
      tambo: [{ value: '', disabled: true }, [Validators.required]],
      deslizador: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
      totalHoras: [{ value: '', disabled: true }, [Validators.required]],
      observacion: ['', [Validators.required]]
    });

    this.inicializarVariables();
  }

  public inicializarVariables(): void {
    this.consumoDeslizadorGrp.get('unidad').setValue(this.unidades[0]);
    this.consumoDeslizadorGrp.get('tambo').setValue(this.tambos[0]);
  }

  calcular(): void {
    this.consumoDeslizadorGrp.get('totalHoras').setValue(this.timeCalc());
  }

  timeCalc() {
    let start = this.consumoDeslizadorGrp.get('horaInicio').value; //to update time value in each input bar
    let end = this.consumoDeslizadorGrp.get('horaFin').value; //to update time value in each input bar

    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    return (hours + minutes / 60).toFixed(1);
  }

  guardar(): void {
    if (this.consumoDeslizadorGrp.valid) {
      let con = new ConsumoDeslizador();
      con.id = 0;
      con.unidad = this.consumoDeslizadorGrp.get('unidad').value.nombre;
      con.tambo = this.consumoDeslizadorGrp.get('tambo').value.nombre;
      con.marca = this.consumoDeslizadorGrp.get('deslizador').value.marca;
      con.serie = this.consumoDeslizadorGrp.get('deslizador').value.serie;
      con.horaInicio = this.consumoDeslizadorGrp.get('horaInicio').value;
      con.horaFin = this.consumoDeslizadorGrp.get('horaFin').value;
      con.horas = this.consumoDeslizadorGrp.get('totalHoras').value;
      con.fecha = this.consumoDeslizadorGrp.get('fecha').value;
      con.observacion = this.consumoDeslizadorGrp.get('observacion').value;

      this.dialogRef.close(con);
    } else {
      this.validationService.getValidationErrors(this.consumoDeslizadorGrp, this.messages, this.formErrors, true);
    }
  }

}
