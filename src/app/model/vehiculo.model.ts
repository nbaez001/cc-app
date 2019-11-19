import { Unidad } from './unidad.model';
import { Tambo } from './tambo.model';
import { Master } from './master.model';
import { RevisionTecnica } from './revision-tecnica.model';
import { SeguroSoat } from './seguro-soat.model';
import { InfraccionVehicular } from './infraccion-vehicular.model';

export class Vehiculo {
    id: number;
    idUnidad: number;
    unidad: string;
    idTambo: number;
    tambo: string;
    idTipo: number;
    nomTipo: string;
    marca: string;
    placa: string;
    codPatrimonio: string;
    nombre: string;

    idTipocombustible: number;
    nomTipocombustible: string;
    idEstado: number;
    nomEstado: string;
    fechaMantenimiento: Date;
}