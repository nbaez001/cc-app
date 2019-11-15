import { Master } from './model/master.model';
import { Perfil } from './model/perfil.model';
import { Vehiculo } from './model/vehiculo.model';
import { Kilometraje } from './model/kilometraje.model';
import { Tambo } from './model/tambo.model';
import { Unidad } from './model/unidad.model';
import { AsignacionPresupuestal } from './model/asignacion-presupuestal.model';
import { Adquisicion } from './model/adquisicion.model';
import { Generador } from './model/generador.model';

export const UNIDADES: Unidad[] = [
    { id: 0, nombre: 'TODOS' },
    { id: 1, nombre: 'U.T. DE AYACUCHO NORTE' },
    { id: 2, nombre: 'U.T. DE HUANCAVELICA' },
    { id: 3, nombre: 'U.T. DE CUSCO' }
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
    { id: 1, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', codPatrimonio: '01212', nombre: 'CAMIONETA NISSAN EGT-079' },
    { id: 2, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', codPatrimonio: '01216', nombre: 'MOTOCICLETA ZONGSHEN EA-9256' },
    { id: 3, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 2, tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', codPatrimonio: '01342', nombre: 'MOTOCICLETA ZONGSHEN EA-9263' },
    { id: 4, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 3, tambo: 'CCERAOCRO', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0715', codPatrimonio: '01565', nombre: 'MOTOCICLETA HONDA EW-0715' },
    { id: 5, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 4, tambo: 'CHACHASPATA', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EB-7316', codPatrimonio: '01652', nombre: 'MOTOCICLETA HONDA EB-7316' },
    { id: 6, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 5, tambo: 'CHURUNMARCA', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0724', codPatrimonio: '01664', nombre: 'MOTOCICLETA HONDA EW-0724' },
    { id: 7, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 6, tambo: 'COCHAPAMPA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9316', codPatrimonio: '01733', nombre: 'MOTOCICLETA ZONGSHEN EA-9316' }
];

export const KILOMETRAJES: Kilometraje[] = [
    { id: 1, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5100', kilometrajeLlegada: '5110', kilometrosRecorrido: 10, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0243', fechaComision: '01/10/2019' },
    { id: 2, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5110', kilometrajeLlegada: '5130', kilometrosRecorrido: 20, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0434', fechaComision: '02/10/2019' },
    { id: 3, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5130', kilometrajeLlegada: '5145', kilometrosRecorrido: 15, lugarDestino: 'CP TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '0444', fechaComision: '01/10/2019' },
    { id: 4, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5145', kilometrajeLlegada: '5157', kilometrosRecorrido: 12, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '0545', fechaComision: '01/10/2019' },
    { id: 5, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5150', kilometrajeLlegada: '5155', kilometrosRecorrido: 5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '034', fechaComision: '05/10/2019' },
    { id: 6, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5155', kilometrajeLlegada: '5159.5', kilometrosRecorrido: 4.5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '012', fechaComision: '10/10/2019' },
    { id: 7, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5164', kilometrajeLlegada: '5180.5', kilometrosRecorrido: 16.5, lugarDestino: 'TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '016', fechaComision: '20/10/2019' },
    { id: 8, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5197', kilometrajeLlegada: '5199', kilometrosRecorrido: 2, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '051', fechaComision: '30/10/2019' }
];

export const TIPOASIGNACION: Master[] = [
    { id: 1, nombre: 'FONDO POR ENCARGO (F/E)' },
    { id: 2, nombre: 'ORDEN DE COMPRA (OC)' }
];


export const PARTIDAS: Master[] = [
    { id: 1, nombre: '2.3.1.3.1.1' },
    { id: 2, nombre: '2.3.1.3.1.3' }
];

export const ASIGNACIONPRESUPUESTAL: AsignacionPresupuestal[] = [
    { id: 1, idTipoAsignacion: 1, nomTipoAsignacion: 'FONDO POR ENCARGO (F/E)', idPartida: 1, nomPartida: '2.3.1.3.1.1', monto: 25000, fecha: new Date('2019-11-12') },
    { id: 2, idTipoAsignacion: 1, nomTipoAsignacion: 'FONDO POR ENCARGO (F/E)', idPartida: 2, nomPartida: '2.3.1.3.1.3', monto: 6945, fecha: new Date('2019-10-05') },
    { id: 3, idTipoAsignacion: 1, nomTipoAsignacion: 'FONDO POR ENCARGO (F/E)', idPartida: 2, nomPartida: '2.3.1.3.1.3', monto: 23540, fecha: new Date('2019-09-15') },
    { id: 4, idTipoAsignacion: 2, nomTipoAsignacion: 'ORDEN DE COMPRA (OC)', idPartida: 1, nomPartida: '2.3.1.3.1.1', monto: 4322, fecha: new Date('2019-09-14') },
    { id: 5, idTipoAsignacion: 2, nomTipoAsignacion: 'ORDEN DE COMPRA (OC)', idPartida: 1, nomPartida: '2.3.1.3.1.1', monto: 43230, fecha: new Date('2019-10-11') }
];

export const ADQUISICION: Adquisicion[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: '', idTipoCombustible: 1, nomTipoCombustible: 'DIESEL B-5', cantidad: 70, costoGalon: 13.5, costoTotal: 945, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 2, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 3, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'AUQUIRACCAY', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 4, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'BARRIO VISTA ALEGRE', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 5, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CCAYARPACHI', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 6, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'CCERAOCRO', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 7, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'CHACHASPATA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 8, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 7, nomTambo: 'CHURUNMARCA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 9, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 8, nomTambo: 'COCHAPAMPA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
    { id: 10, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 9, nomTambo: 'CUNYA', idTipoCombustible: 2, nomTipoCombustible: 'GASOLINA', cantidad: 15, costoGalon: 12.5, costoTotal: 187.50, ciudadPuntoAbastecimiento: 'HUAMANGA', distPuntoAbastecimiento: 0, proveedor: 'COORPORACION SANTA BERTHA', rucProveedor: '20452631858', observacion: 'RETIRO DIRECTOR POR GESTOR' },
];

export const generadores: Generador[] = [
    { id: 1, codPatrimonio: '31183', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2800', tipo: 'S/T', serie: '1406X07868', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 2, codPatrimonio: '31184', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2801', tipo: 'S/T', serie: '1406X07815', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 3, codPatrimonio: '31185', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 0, nomTambo: '.OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2802', tipo: 'S/T', serie: '1406X07814', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 4, codPatrimonio: '31247', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-213009X00587', color: 'AMARILLO', estado: 'B', observacion: '43227', usuario: 'ROSA SANCHEZ MENDOZA' },
    { id: 5, codPatrimonio: '31533', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 2, nomTambo: 'AUQUIRACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LEK', tipo: 'MONOFASICO', serie: '17040010S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'FERNANDO LIMA MEDINA' },
    { id: 6, codPatrimonio: '31720', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 3, nomTambo: 'BARRIO VISTA ALEGRE', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'GILVER LUIS CISNEROS VEGA' },
    { id: 7, codPatrimonio: '31913', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 4, nomTambo: 'CAYARPACHI', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF5200DFW', tipo: 'MONOFASICO', serie: '200589', color: 'AZUL', estado: 'B', observacion: '', usuario: 'GOTARDO FREDY CANDIA DELGADILLO' },
    { id: 8, codPatrimonio: '32129', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 5, nomTambo: 'CCERAOCRO', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-3001', tipo: 'S/T', serie: '4710837075', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ADRIEL ROJAS GONZALES' },
    { id: 9, codPatrimonio: '32183', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 6, nomTambo: 'CHACHASPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'HONDA', modelo: 'PANTER', tipo: 'S/T', serie: 'GCAFH-0623048', color: 'ROJO', estado: 'B', observacion: '', usuario: 'JULIO CURO HUALLPA' },
    { id: 10, codPatrimonio: '32542', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 7, nomTambo: 'CHURUNMARCA', denominacion: 'GRUPO ELECTROGENO', marca: 'BRIGGS STRATTON', modelo: 'GS6500', tipo: 'S/T', serie: '1705231600749', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'JOEL SAUL LOPEZ QUINTERO' },
    { id: 11, codPatrimonio: '32590', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 8, nomTambo: 'COCHAPAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'PREMIUM', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'YO NIANDIA CRISOSTOMO' },
    { id: 12, codPatrimonio: '32774', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 9, nomTambo: 'CUNYA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'S/T', serie: '15100129S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'CLIVER JHONNYMARTÍNEZ CASTRO' },
    { id: 13, codPatrimonio: '33091', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 10, nomTambo: 'CUSIBAMBA', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: 'POWER', tipo: 'MONOFASICO', serie: 'GDA6800E ', color: 'ROJO', estado: 'B', observacion: 'NINGUNA', usuario: 'JOHN KENY HUERTAS RODRIGUEZ' },
    { id: 14, codPatrimonio: '33275', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 11, nomTambo: 'HUANCA PAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-2001', tipo: 'S/T', serie: '4416631185', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ELIZABETH YUPA YUPANQUI' },
    { id: 15, codPatrimonio: '33308', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 12, nomTambo: 'MARCCARACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-21309X00753', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'TANIA ROSMERY SOLIER MINAYA' },
    { id: 16, codPatrimonio: '33456', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 13, nomTambo: 'OCCO CHIRURA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'ELECTRICO', serie: '161204685S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'YOVANA BEATRIZ TENORIO MAMANI' },
    { id: 17, codPatrimonio: '33802', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 14, nomTambo: 'OCCOLLO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'GODOLFREDO CLAUDIO MARQUINA ATAUCUSI' },
    { id: 18, codPatrimonio: '33922', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 15, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'ME-28000CK', tipo: 'ELECTRICO', serie: 'CT168F-2', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 19, codPatrimonio: '', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 16, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'MF2800CX', tipo: 'ELECTRICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 20, codPatrimonio: '33991', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 17, nomTambo: 'PACCO LOMA - HUAYCHAO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'M', observacion: 'MALOGRADO', usuario: 'MARICRIS JELITZ ASTO QUICHCA' },
    { id: 21, codPatrimonio: '35381', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 18, nomTambo: 'PARAS', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'EFRAIN ROLANDO GOMEZ GUTIERREZ' },
    { id: 22, codPatrimonio: '34255', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 19, nomTambo: 'PATAHUASI', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: '7500W', tipo: 'MONOFASICO', serie: 'GDA8000E', color: 'ANARANJADO', estado: 'B', observacion: '', usuario: 'PELAGIO MENDEZ FARFAN' },
    { id: 23, codPatrimonio: '34347', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 20, nomTambo: 'PAUCHO', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF7200DE', tipo: 'ELECTRICO', serie: '4002392', color: 'AZUL', estado: 'B', observacion: '', usuario: 'PAUL VICTOR BARZOLA PAREDES' },
    { id: 24, codPatrimonio: '34534', idUnidad: 1, nomUnidad: 'AYACUCHO NORTE', idTambo: 21, nomTambo: 'POMAPUKIO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'MARITZA CAROLINA YAULI BENDEZU' }
];