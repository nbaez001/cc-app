export class RequerimientoBien {
    id: number;
    idUnidad: number;
    nomUnidad: string;
    detalleRequerimiento: string;

    nroHojatramiteReq: string;
    nroInformeReq: string;

    idTipoAsigPresupuesto: number;
    nomTipoAsigPresupuesto: string;
    codAsigPresupuesto: string;
    importeAsigPresupuesto: number;

    idEstadoRequerimiento: number;
    nomEstadoRequerimiento: string;

    cotizacion: number;

    conBadge: boolean;
}