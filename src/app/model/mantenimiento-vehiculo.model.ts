export class MantenimientoVehicular {
    id: number;
    idUnidad: number;
    nomUnidad: string;
    idTipomantenimiento: number;
    nomTipoMantenimiento: string;

    nroHojatramiteReq: string;
    nroInformeReq: string;
    fecha: Date;

    idTipoAsigPresupuesto: number;
    nomTipoAsigPresupuesto: string;
    codAsigPresupuesto: string;
    importeAsigPresupuesto: number;

    nroHojatramiteConf: string;
    nroInformeConf: string;
    actaRecepcionEmpresa: string;
    cartaInformeProveedor: string;
    actaRecepccionUURR: string;
    obsRecepccionUURR: string;

    idEstadoMantenimiento: number;
    nomEstadoMantenimiento: string;

    asuntoSolicitud: string;
    detalleSolicitud: string;

    cotizacion: number;

    conBadge: boolean;
}