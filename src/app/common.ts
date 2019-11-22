import { Master } from './model/master.model';
import { Perfil } from './model/perfil.model';
import { Vehiculo } from './model/vehiculo.model';
import { Kilometraje } from './model/kilometraje.model';
import { Tambo } from './model/tambo.model';
import { Unidad } from './model/unidad.model';
import { AsignacionPresupuestal } from './model/asignacion-presupuestal.model';
import { Adquisicion } from './model/adquisicion.model';
import { Generador } from './model/generador.model';
import { CuadroControl } from './model/cuadro-control.model';
import { EjecucionPresupuestal } from './model/ejecucion-presupuestal.model';
import { Deslizador } from './model/deslizador.model';
import { HorasDeslizador } from './model/horas-deslizador.model';

export const UNIDADES: Unidad[] = [
    { id: 1, nombre: 'U.T. AYACUCHO NORTE' },
    { id: 2, nombre: 'U.T. CUSCO' },
    { id: 3, nombre: 'U.T. UCAYALI' }
];

export const TAMBOS: Tambo[] = [
    { id: 1, nombre: 'ANCARPATA', idunidad: 1 },
    { id: 2, nombre: 'BARRIO VISTA ALEGRE', idunidad: 1 },
    { id: 3, nombre: 'CCERAOCRO', idunidad: 1 },
    { id: 4, nombre: 'CHACHASPATA', idunidad: 1 }
];

export const TIPOSVEHICULO: Master[] = [
    { id: 1, nombre: 'CAMIONETA' },
    { id: 2, nombre: 'MOTOCICLETA' }
];

export const ESTADOVEHICULO: Master[] = [
    { id: 1, nombre: 'OPERATIVO' },
    { id: 2, nombre: 'NO OPERATIVO' },
    { id: 3, nombre: 'CON LIMITACIONES' }
];

export const TIPOSCOMBUSTIBLE: Master[] = [
    { id: 1, nombre: 'DIESEL B-5' },
    { id: 2, nombre: 'GASOHOL' }
];

export const PERFILES: Perfil[] = [
    { id: 1, nombre: "GESTOR PLATAFORMA", abreviacion: 'GP' },
    { id: 2, nombre: "JEFE UNIDAD TERRITORIAL", abreviacion: 'JUT' },
    { id: 3, nombre: "ENCARGADO DE TRANSPORTES", abreviacion: 'ET' }
];


export const VEHICULOS: Vehiculo[] = [
    { id: 1, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: '', idTipo: 1, nomTipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', codPatrimonio: '01212', nombre: 'CAMIONETA NISSAN EGT-079', idTipocombustible: 1, nomTipocombustible: 'DIESEL B-5', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 2, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', codPatrimonio: '01216', nombre: 'MOTOCICLETA ZONGSHEN EA-9256', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 3, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 2, tambo: 'BARRIO VISTA ALEGRE', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', codPatrimonio: '01342', nombre: 'MOTOCICLETA ZONGSHEN EA-9263', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 4, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 3, tambo: 'CCERAOCRO', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0715', codPatrimonio: '01565', nombre: 'MOTOCICLETA HONDA EW-0715', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 5, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 4, tambo: 'CHACHASPATA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EB-7316', codPatrimonio: '01652', nombre: 'MOTOCICLETA HONDA EB-7316', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 6, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 5, tambo: 'CHURUNMARCA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0724', codPatrimonio: '01664', nombre: 'MOTOCICLETA HONDA EW-0724', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') },
    { id: 7, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 6, tambo: 'COCHAPAMPA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9316', codPatrimonio: '01733', nombre: 'MOTOCICLETA ZONGSHEN EA-9316', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10') }
];

export const KILOMETRAJES: Kilometraje[] = [
    { id: 1, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5100', kilometrajeLlegada: '5110', kilometrosRecorrido: 10, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0243', fechaComision: '01/10/2019' },
    { id: 2, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5110', kilometrajeLlegada: '5130', kilometrosRecorrido: 20, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0434', fechaComision: '02/10/2019' },
    { id: 3, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5130', kilometrajeLlegada: '5145', kilometrosRecorrido: 15, lugarDestino: 'CP TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '0444', fechaComision: '01/10/2019' },
    { id: 4, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5145', kilometrajeLlegada: '5157', kilometrosRecorrido: 12, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '0545', fechaComision: '01/10/2019' },
    { id: 5, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5150', kilometrajeLlegada: '5155', kilometrosRecorrido: 5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '034', fechaComision: '05/10/2019' },
    { id: 6, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5155', kilometrajeLlegada: '5159.5', kilometrosRecorrido: 4.5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '012', fechaComision: '10/10/2019' },
    { id: 7, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5164', kilometrajeLlegada: '5180.5', kilometrosRecorrido: 16.5, lugarDestino: 'TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '016', fechaComision: '20/10/2019' },
    { id: 8, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5197', kilometrajeLlegada: '5199', kilometrosRecorrido: 2, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '051', fechaComision: '30/10/2019' }
];

export const TIPOEJECUCION: Master[] = [
    { id: 1, nombre: 'FONDO POR ENCARGO (F/E)' },
    { id: 2, nombre: 'ORDEN DE COMPRA (OC)' }
];


export const PARTIDAS: Master[] = [
    { id: 1, nombre: '2.3.13.11' },
    { id: 2, nombre: '2.3.13.13' }
];

export const EJECUCIONPRESUPUESTAL: EjecucionPresupuestal[] = [
    { id: 1, idTipoejecucion: 2, nomTipoejecucion: 'FONDO POR ENCARGO (F/E)', idUnidad: 20, nomUnidad: 'U.T. AYACUCHO SUR', idOrdencompra: 0, nroOrdencompra: '', nroResAdministracion: '165-2018', monto: 10290.00, fecha: new Date('2018-07-20'), observacion: '' },
    { id: 2, idTipoejecucion: 2, nomTipoejecucion: 'FONDO POR ENCARGO (F/E)', idUnidad: 20, nomUnidad: 'U.T. AYACUCHO SUR', idOrdencompra: 0, nroOrdencompra: '', nroResAdministracion: '102-2018', monto: 6945.00, fecha: new Date('2018-01-01'), observacion: '' },
    { id: 3, idTipoejecucion: 1, nomTipoejecucion: 'ORDEN DE COMPRA (OC)', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idOrdencompra: 1, nroOrdencompra: '0000060-2019', nroResAdministracion: '', monto: 10188.08, fecha: new Date('2019-06-15'), observacion: '' },
    { id: 3, idTipoejecucion: 1, nomTipoejecucion: 'ORDEN DE COMPRA (OC)', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idOrdencompra: 1, nroOrdencompra: '0000019-2019', nroResAdministracion: '', monto: 7245.00, fecha: new Date('2019-01-01'), observacion: '' }
];

export const ADQUISICION: Adquisicion[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: '', idTipoCombustible: 1, nomTipoCombustible: 'DIESEL B-5', cantidad: 70, costoGalon: 13.5, costoTotal: 945, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 2, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 3, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'BARRIO VISTA ALEGRE', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 4, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'CCERAOCRO', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 5, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CHACHASPATA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 6, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'AUQUIRACCAY', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 7, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'CCAYARPACHI', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 8, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 7, nomTambo: 'CHURUNMARCA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 9, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 8, nomTambo: 'COCHAPAMPA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 10, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 9, nomTambo: 'CUNYA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
];

export const generadores: Generador[] = [
    { id: 1, codPatrimonio: '31183', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2800', tipo: 'S/T', serie: '1406X07868', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 2, codPatrimonio: '31184', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2801', tipo: 'S/T', serie: '1406X07815', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 3, codPatrimonio: '31185', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2802', tipo: 'S/T', serie: '1406X07814', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 4, codPatrimonio: '31247', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-213009X00587', color: 'AMARILLO', estado: 'B', observacion: '43227', usuario: 'ROSA SANCHEZ MENDOZA' },
    { id: 5, codPatrimonio: '31533', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'BARRIO VISTA ALEGRE', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LEK', tipo: 'MONOFASICO', serie: '17040010S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'FERNANDO LIMA MEDINA' },
    { id: 6, codPatrimonio: '31720', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'CCERAOCRO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'GILVER LUIS CISNEROS VEGA' },
    { id: 7, codPatrimonio: '31913', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CHACHASPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF5200DFW', tipo: 'MONOFASICO', serie: '200589', color: 'AZUL', estado: 'B', observacion: '', usuario: 'GOTARDO FREDY CANDIA DELGADILLO' },
    { id: 8, codPatrimonio: '32129', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'CAYARPACHI', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-3001', tipo: 'S/T', serie: '4710837075', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ADRIEL ROJAS GONZALES' },
    { id: 9, codPatrimonio: '32183', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'AUQUIRACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'HONDA', modelo: 'PANTER', tipo: 'S/T', serie: 'GCAFH-0623048', color: 'ROJO', estado: 'B', observacion: '', usuario: 'JULIO CURO HUALLPA' },
    { id: 10, codPatrimonio: '32542', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 7, nomTambo: 'CHURUNMARCA', denominacion: 'GRUPO ELECTROGENO', marca: 'BRIGGS STRATTON', modelo: 'GS6500', tipo: 'S/T', serie: '1705231600749', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'JOEL SAUL LOPEZ QUINTERO' },
    { id: 11, codPatrimonio: '32590', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 8, nomTambo: 'COCHAPAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'PREMIUM', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'YO NIANDIA CRISOSTOMO' },
    { id: 12, codPatrimonio: '32774', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 9, nomTambo: 'CUNYA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'S/T', serie: '15100129S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'CLIVER JHONNYMARTÍNEZ CASTRO' },
    { id: 13, codPatrimonio: '33091', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 10, nomTambo: 'CUSIBAMBA', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: 'POWER', tipo: 'MONOFASICO', serie: 'GDA6800E ', color: 'ROJO', estado: 'B', observacion: 'NINGUNA', usuario: 'JOHN KENY HUERTAS RODRIGUEZ' },
    { id: 14, codPatrimonio: '33275', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 11, nomTambo: 'HUANCA PAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-2001', tipo: 'S/T', serie: '4416631185', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ELIZABETH YUPA YUPANQUI' },
    { id: 15, codPatrimonio: '33308', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 12, nomTambo: 'MARCCARACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-21309X00753', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'TANIA ROSMERY SOLIER MINAYA' },
    { id: 16, codPatrimonio: '33456', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 13, nomTambo: 'OCCO CHIRURA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'ELECTRICO', serie: '161204685S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'YOVANA BEATRIZ TENORIO MAMANI' },
    { id: 17, codPatrimonio: '33802', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 14, nomTambo: 'OCCOLLO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'GODOLFREDO CLAUDIO MARQUINA ATAUCUSI' },
    { id: 18, codPatrimonio: '33922', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 15, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'ME-28000CK', tipo: 'ELECTRICO', serie: 'CT168F-2', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 19, codPatrimonio: '', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 16, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'MF2800CX', tipo: 'ELECTRICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 20, codPatrimonio: '33991', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 17, nomTambo: 'PACCO LOMA - HUAYCHAO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'M', observacion: 'MALOGRADO', usuario: 'MARICRIS JELITZ ASTO QUICHCA' },
    { id: 21, codPatrimonio: '35381', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 18, nomTambo: 'PARAS', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'EFRAIN ROLANDO GOMEZ GUTIERREZ' },
    { id: 22, codPatrimonio: '34255', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 19, nomTambo: 'PATAHUASI', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: '7500W', tipo: 'MONOFASICO', serie: 'GDA8000E', color: 'ANARANJADO', estado: 'B', observacion: '', usuario: 'PELAGIO MENDEZ FARFAN' },
    { id: 23, codPatrimonio: '34347', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 20, nomTambo: 'PAUCHO', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF7200DE', tipo: 'ELECTRICO', serie: '4002392', color: 'AZUL', estado: 'B', observacion: '', usuario: 'PAUL VICTOR BARZOLA PAREDES' },
    { id: 24, codPatrimonio: '34534', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 21, nomTambo: 'POMAPUKIO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'MARITZA CAROLINA YAULI BENDEZU' }
];

export const CUADROCONTROL: CuadroControl[] = [
    { secFun: 22, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idPartida: 1, nomPartida: '2.3.13.11', total: 20889.00, saldo: 100.73, dieselConsumo: 770, dieselPromCosto: 13.5, dieselTotal: 10395.00, gasConsMotocicletas: 3872, gasPromCosto: 13.50, gasMotocicletasTotal: 52272.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 27, lubricPromCosto: 25.00, lubricantesTotal: 2700.00 },
    { secFun: 22, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idPartida: 2, nomPartida: '2.3.13.13', total: 20889.00, saldo: 100.73, dieselConsumo: 770, dieselPromCosto: 13.5, dieselTotal: 10395.00, gasConsMotocicletas: 3872, gasPromCosto: 13.50, gasMotocicletasTotal: 52272.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 27, lubricPromCosto: 25.00, lubricantesTotal: 2700.00 },
    { secFun: 26, idUnidad: 4, nomUnidad: 'U.T. HUANUCO', idPartida: 1, nomPartida: '2.3.13.11', total: 10923.73, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 2464, gasPromCosto: 13.30, gasMotocicletasTotal: 32771.20, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 28, lubricPromCosto: 25.00, lubricantesTotal: 2800.00 },
    { secFun: 26, idUnidad: 4, nomUnidad: 'U.T. HUANUCO', idPartida: 2, nomPartida: '2.3.13.13', total: 10923.73, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 2464, gasPromCosto: 13.30, gasMotocicletasTotal: 32771.20, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 28, lubricPromCosto: 25.00, lubricantesTotal: 2800.00 },
    { secFun: 39, idUnidad: 3, nomUnidad: 'U.T. UCAYALI', idPartida: 1, nomPartida: '2.3.13.11', total: 1650.00, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 330, gasPromCosto: 15.00, gasMotocicletasTotal: 4950.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 2, lubricPromCosto: 25.00, lubricantesTotal: 200.00 },
    { secFun: 39, idUnidad: 3, nomUnidad: 'U.T. UCAYALI', idPartida: 2, nomPartida: '2.3.13.13', total: 1650.00, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 330, gasPromCosto: 15.00, gasMotocicletasTotal: 4950.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 2, lubricPromCosto: 25.00, lubricantesTotal: 200.00 },
    { secFun: 24, idUnidad: 2, nomUnidad: 'U.T. CUSCO', idPartida: 1, nomPartida: '2.3.13.11', total: 24955.70, saldo: 100.73, dieselConsumo: 770, dieselPromCosto: 10.83, dieselTotal: 8339.10, gasConsMotocicletas: 4928, gasPromCosto: 13.50, gasMotocicletasTotal: 66528.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 45, lubricPromCosto: 20.00, lubricantesTotal: 2700.00 },
    { secFun: 24, idUnidad: 2, nomUnidad: 'U.T. CUSCO', idPartida: 2, nomPartida: '2.3.13.13', total: 24955.70, saldo: 100.73, dieselConsumo: 770, dieselPromCosto: 10.83, dieselTotal: 8339.10, gasConsMotocicletas: 4928, gasPromCosto: 13.50, gasMotocicletasTotal: 66528.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 45, lubricPromCosto: 20.00, lubricantesTotal: 2700.00 },
    { secFun: 32, idUnidad: 5, nomUnidad: 'U.T. MADRE DE DIOS', idPartida: 1, nomPartida: '2.3.13.11', total: 1026.67, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 220, gasPromCosto: 14.00, gasMotocicletasTotal: 3080.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 2, lubricPromCosto: 20.00, lubricantesTotal: 160.00 },
    { secFun: 32, idUnidad: 5, nomUnidad: 'U.T. MADRE DE DIOS', idPartida: 2, nomPartida: '2.3.13.13', total: 1026.67, saldo: 100.73, dieselConsumo: 0, dieselPromCosto: null, dieselTotal: 0.00, gasConsMotocicletas: 220, gasPromCosto: 14.00, gasMotocicletasTotal: 3080.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 2, lubricPromCosto: 20.00, lubricantesTotal: 160.00 },
    { secFun: 36, idUnidad: 6, nomUnidad: 'U.T. PUNO', idPartida: 1, nomPartida: '2.3.13.11', total: 22293.33, saldo: 100.73, dieselConsumo: 880, dieselPromCosto: 13, dieselTotal: 11440.00, gasConsMotocicletas: 3696, gasPromCosto: 15.00, gasMotocicletasTotal: 55440.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 42, lubricPromCosto: 12.00, lubricantesTotal: 2016.00 },
    { secFun: 36, idUnidad: 6, nomUnidad: 'U.T. PUNO', idPartida: 2, nomPartida: '2.3.13.13', total: 22293.33, saldo: 100.73, dieselConsumo: 880, dieselPromCosto: 13, dieselTotal: 11440.00, gasConsMotocicletas: 3696, gasPromCosto: 15.00, gasMotocicletasTotal: 55440.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 42, lubricPromCosto: 12.00, lubricantesTotal: 2016.00 },
    { secFun: 27, idUnidad: 7, nomUnidad: 'U.T. JUNIN', idPartida: 1, nomPartida: '2.3.13.11', total: 11528.00, saldo: 100.73, dieselConsumo: 880, dieselPromCosto: 12.7, dieselTotal: 11176.00, gasConsMotocicletas: 1672, gasPromCosto: 14.00, gasMotocicletasTotal: 23408.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 19, lubricPromCosto: 20.00, lubricantesTotal: 1520.00 },
    { secFun: 27, idUnidad: 7, nomUnidad: 'U.T. JUNIN', idPartida: 2, nomPartida: '2.3.13.13', total: 11528.00, saldo: 100.73, dieselConsumo: 880, dieselPromCosto: 12.7, dieselTotal: 11176.00, gasConsMotocicletas: 1672, gasPromCosto: 14.00, gasMotocicletasTotal: 23408.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 19, lubricPromCosto: 20.00, lubricantesTotal: 1520.00 },
    { secFun: 21, idUnidad: 8, nomUnidad: 'U.T. AYACUCHO SUR', idPartida: 1, nomPartida: '2.3.13.11', total: 11106.33, saldo: 100.73, dieselConsumo: 550, dieselPromCosto: 13.6, dieselTotal: 7480.00, gasConsMotocicletas: 1782, gasPromCosto: 14.50, gasMotocicletasTotal: 25839.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 18, lubricPromCosto: 28.00, lubricantesTotal: 2016.00 },
    { secFun: 21, idUnidad: 8, nomUnidad: 'U.T. AYACUCHO SUR', idPartida: 2, nomPartida: '2.3.13.13', total: 11106.33, saldo: 100.73, dieselConsumo: 550, dieselPromCosto: 13.6, dieselTotal: 7480.00, gasConsMotocicletas: 1782, gasPromCosto: 14.50, gasMotocicletasTotal: 25839.00, gasConsGeneradores: 225, gasGeneradoresTotal: 220.00, gasConsDeslizadores: 225, gasDeslizadoresTotal: 220.00, lubricConsumo: 18, lubricPromCosto: 28.00, lubricantesTotal: 2016.00 },
];

export const deslizadores: Deslizador[] = [
    { id: 1, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 20, nomTambo: 'SAN ANTONIO DEL ESTRECHO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. SAN ANTONIO DEL ESTRECHO (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610848/ MATRICULA IQ-51601-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 2, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 21, nomTambo: 'ESPERANZA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. ESPERANZA (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610850/ MATRICULA IQ-51600-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 3, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 22, nomTambo: 'REMANZO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. REMANSO (TAMBO)', motor: 'SUZUKI 60 HP MODELO DF 60A. N° DE SERIE 06002F-611580/ MATRICULA IQ-51515-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 8 PERSONAS. PARABRISAS ' },
    { id: 4, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 23, nomTambo: 'NUEVA ANGUSILLA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. NUEVA ANGUSILLA (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610851/ MATRICULA IQ-51602-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 5, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 24, nomTambo: 'SOPLIN VARGAS', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. SOPLIN VARGAS (TAMBO)', motor: 'SUZUKI 60 HP MODELO DF 60. N ° DE SERIE 06002F611579/ MATRICULA IQ-51604-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 6, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 25, nomTambo: 'HUANTA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. HUANTA (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10, PISO DE ALUMINIO' },
    { id: 7, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 26, nomTambo: 'COCHIQUINAS', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. COCHIQUINAS (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10, PISO DE ALUMINIO' },
    { id: 8, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 27, nomTambo: 'LEONCIO PRADO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. LEONCIO PRADO (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10   ,PISO DE ALUMINIO' },
    { id: 9, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 28, nomTambo: 'INDUSTRIAL (PUERTO INDUSTRIAL)', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'CP. PUERTO INDUSTRIAL (TAMBO)', motor: 'MOTOR FUERA DE BORDA YAMAHA 60HP 2T : 96 KILOGRAMOS, MODELO: E60HWDL, POTENCIA: 60 HP A 5500 RPM, TIPO DE MOTOR: 2 TIEMPOS, ', potencia: 60, detalle: 'BOTE DESLIZADOR DE ALUMINIO DE 08 PAX, DE LARGO:6.00M, ANCHO:2.00M, PUNTAL:0.85M. MOTOR FUERA DE BORDA DE 60 HP. PARABRISAS: DE ESTRUCTURA DE ALUMINIO CON PUERTA DE ENTRADA CENTRAL; LAS VENTANAS CON LUNAS DE 6MM Y FRISA DE JEBE.  TECHO: FORRADO INTERIOR Y EXTERIORMENTE CON ALUMINIO LISO DE 1MM. Y EN LA PARTE MEDIA UNA PLANCHA DE TECKNOPORT PARA DISIPAR EL CALOR. ASIENTOS: OCHO (08) ASIENTOS VIP UNIPERSONALES TAPIZADOS TIPO PULL MAN. PISO DE CUBIERTA DE PASAJEROS: PISO ALUMINIO ESTRIADO ANTIDESLIZANTE.' },
    { id: 10, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 29, nomTambo: 'TRES FRONTERAS', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'YAMAHA MOTOR 115 HP. MODELO E115AETL. N° DE SERIE 1037259. MATRICULA IQ-51743-BF', potencia: 60, detalle: 'ESCOLA :10.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 12 PERSONAS. PARABRISAS ' },
    { id: 11, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 30, nomTambo: 'EL ALAMO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'SUZUKI 140 HP MODELO DF 140 ° DE SERIE 14001F516391/ MATRICULA IQ-51599-BF', potencia: 60, detalle: 'ESCOLA :10.00MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 12 PERSONAS. PARABRISAS ' },
    { id: 12, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 31, nomTambo: 'FLOR DE AGOSTO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'SUZUKI 60 HP MODELO DF 60A. N° DE SERIE 06002F-611577/ MATRICULA IQ-51517-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 8 PERSONAS. PARABRISAS ' },
    { id: 13, codPatrimonio: '', idUnidad: 11, nomUnidad: 'U.T. UCAYALI', idTambo: 34, nomTambo: 'COLONIA CACO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'MOTOR FUERA DE BORDA, MARCA YAMAHA DE E60HWDL, SERIE NRO 6K5K1058509', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO MODELO BX-20, DE ESLORA 6MT, MAGAN 2 MTS, PUNTAL 0,85 MTS, LATERAL 0,55 MT DE 08 PASAJEROS' },
    { id: 14, codPatrimonio: '', idUnidad: 12, nomUnidad: 'U.T. SAN MARTIN', idTambo: 35, nomTambo: 'DOS DE MAYO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'VALOR: POR DEFINIR  MARCA: YAMAHA MODELO: E60HMHDL  POTENCIA: 60HP A 5,500 RPM TIPO DE MOTOR: DOS TIEMPOS  PAIS DE PROCEDENCIA: CHINA NUMERO DE MOTOR: 1053432', potencia: 60, detalle: 'MATERIAL: ALUMINIO DE ALEACION NAVAL  TIPO DE FABRICACION: SOLDADURA MIG  MODELO: C70  MANGA: 1.75 M  ESLORA: 8.40 M  PUNTAL: 0.70 M  PARABRISAS: NO PRESENTA TIPO DE TECHO:  ESTRUCTURA DE TUBO 1/2"" TOLDO COMPLETO DE LONA PLASTIFICADA.  N° DE ASIENTOS: 08 CANTIDAD DE OCUPANTES: 09  TIPO DEL PISO: ALUMINIO ESTRIADO DE 2.05 MM ' },
    { id: 15, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 32, nomTambo: 'BRETAÑA', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'MOTOR FUERA DE BORDA DE 60 HP 4 TIEMPOS. MARCA: ZUZUKI, MODELO: DF60A, SERIE:01.', potencia: 60, detalle: 'BOTE DESLIZADOR DE ALUMINIO, ESLORA:6.00M, MANGA:2.00M, PUNTAL:0.85M. CAP. 08 PERSONAS.' },
    { id: 16, codPatrimonio: '', idUnidad: 10, nomUnidad: 'U.T. LORETO', idTambo: 33, nomTambo: 'SANTA MERCEDES', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA CON EL PROVEEDOR ASTILLERO GRUPO CAM (SE TIENE UN SALDO PENDIENTE DE PAGO Y CUSTODIA) DENUNCIA AL RESIDENTE', motor: 'SUZUKI 60 HP MODELO DF 60. N° DE SERIE 06002F611581/ MATRICULA IQ-51603-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
];

export const horasDeslizador: HorasDeslizador[] = [
    { id: 1, unidad: 'AYACUCHO NORTE', tambo: 'VISTA ALEGRE', deslizador: 'DESLIZADOR 70HP', potencia: 70, horaInicio: '9:00 AM', horaFin: '9:30 AM', horas: 0.5, fecha: '10/10/2019', observacion: 'SE USO GENERADOR EN EL TAMBO POR CAUSA DE CORTE DE ENERGIA ELECTRICA' },
    { id: 2, unidad: 'AYACUCHO NORTE', tambo: 'CCERAOCRO', deslizador: 'DESLIZADOR 70HP', potencia: 70, horaInicio: '10:00 AM', horaFin: '11:00 AM', horas: 1.0, fecha: '15/10/2019', observacion: 'SE USO GENERADOR PARA LA TENCION INTEGRAL EN SALUD' },
    { id: 3, unidad: 'AYACUCHO NORTE', tambo: 'CHACHASPATA', deslizador: 'DESLIZADOR 70HP', potencia: 70, horaInicio: '11:00 AM', horaFin: '12:00 AM', horas: 1.0, fecha: '20/10/2019', observacion: 'SE USO GENERADOR PARA DESARROLLO DE ACTIVIDADES E ILUMINACION EN LA PLATAFORMA' },
    { id: 4, unidad: 'AYACUCHO NORTE', tambo: 'CHURUNMARCA', deslizador: 'DESLIZADOR 70HP', potencia: 70, horaInicio: '3:00 PM', horaFin: '4:00 PM', horas: 1.0, fecha: '25/10/2019', observacion: '' },
    { id: 5, unidad: 'AYACUCHO NORTE', tambo: 'COCHAPAMPA', deslizador: 'DESLIZADOR 70HP', potencia: 70, horaInicio: '9:30 AM', horaFin: '2:30 AM', horas: 5.0, fecha: '30/10/2019', observacion: '' }
];