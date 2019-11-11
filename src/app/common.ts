import { Master } from './model/master.model';
import { Perfil } from './model/perfil.model';
import { Vehiculo } from './model/vehiculo.model';
import { Kilometraje } from './model/kilometraje.model';

export const UNIDADES: Master[] = [
    { id: 0, nombre: 'TODOS' },
    { id: 1, nombre: 'U.T. DE AYACUCHO NORTE' },
    { id: 2, nombre: 'U.T. DE HUANCAVELICA' },
    { id: 3, nombre: 'U.T. DE CUSCO' }
];

export const TAMBOS: Master[] = [
    { id: 0, nombre: 'TODOS' },
    { id: 1, nombre: 'ANCARPATA' },
    { id: 2, nombre: 'BARRIO VISTA ALEGRE' },
    { id: 3, nombre: 'CCERAOCRO' },
    { id: 4, nombre: 'CHACHASPATA' }
];

export const TIPOSVEHICULO: Master[] = [
    { id: 1, nombre: 'CAMIONETA' },
    { id: 2, nombre: 'MOTOCICLETA' }
];





export const PERFILES: Perfil[] = [
    { id: 1, nombre: "GESTOR PLATAFORMA", abreviacion: 'GP' },
    { id: 2, nombre: "JEFE UNIDAD TERRITORIAL", abreviacion: 'JUT' },
    { id: 3, nombre: "ENCARGADO DE TRANSPORTES", abreviacion: 'ET' }
];


export const VEHICULOS: Vehiculo[] = [
    { id: 1, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 0, tambo: '', tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', codPatrimonio: '01212' },
    { id: 2, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', codPatrimonio: '01216' },
    { id: 3, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 2, tambo: 'BARRIO VISTA ALEGRE', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', codPatrimonio: '01342' },
    { id: 4, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 3, tambo: 'CCERAOCRO', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0715', codPatrimonio: '01565' },
    { id: 5, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 4, tambo: 'CHACHASPATA', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EB-7316', codPatrimonio: '01652' },
    { id: 6, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 5, tambo: 'CHURUNMARCA', tipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0724', codPatrimonio: '01664' },
    { id: 7, idUnidad: 1, unidad: 'AYACUCHO NORTE', idTambo: 6, tambo: 'COCHAPAMPA', tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9316', codPatrimonio: '01733' }
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