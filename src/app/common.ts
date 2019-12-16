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
import { CuadroControlTambo } from './model/cuadro-control-tambo.model';
import { ConsumoGenerador } from './model/consumo-generador.model';
import { MantenimientoVehicular } from './model/mantenimiento-vehiculo.model';
import { SolicitudMant } from './model/solicitud-mant.model';
import { Banco } from './model/config/banco.model';
import { Proveedor } from './model/config/proveedor.model';
import { Orden } from './model/config/orden.model';

export const UNIDADES: Unidad[] = [
    { id: 1, nombre: 'U.T. AYACUCHO NORTE' },
    { id: 2, nombre: 'U.T. CUSCO' },
    { id: 3, nombre: 'U.T. HUANCAVELICA' },
    { id: 20, nombre: 'U.T. LORETO' },
    { id: 21, nombre: 'U.T. UCAYALI' },
    { id: 22, nombre: 'U.T. SAN MARTIN' }
];

export const TAMBOS: Tambo[] = [
    { id: 1, nombre: 'ANCARPATA', idUnidad: 1 },
    { id: 2, nombre: 'BARRIO VISTA ALEGRE', idUnidad: 1 },
    { id: 3, nombre: 'CCERAOCRO', idUnidad: 1 },
    { id: 4, nombre: 'CHACHASPATA', idUnidad: 1 },
    { id: 5, nombre: 'CHURUNMARCA', idUnidad: 1 },
    { id: 6, nombre: 'COCHAPAMPA', idUnidad: 1 },
    { id: 7, nombre: 'CAYARPACHI', idUnidad: 1 },
    { id: 8, nombre: 'AUQUIRACCAY', idUnidad: 1 },
    { id: 9, nombre: 'CUNYA', idUnidad: 1 },
    { id: 10, nombre: 'CUSIBAMBA', idUnidad: 1 },
    { id: 11, nombre: 'HUANCA PAMPA', idUnidad: 1 },
    { id: 12, nombre: 'MARCCARACCAY', idUnidad: 1 },
    { id: 13, nombre: 'OCCO CHIRURA', idUnidad: 1 },
    { id: 14, nombre: 'OCCOLLO', idUnidad: 1 },
    { id: 15, nombre: 'PACCHA', idUnidad: 1 },
    { id: 17, nombre: 'PACCO LOMA - HUAYCHAO', idUnidad: 1 },
    { id: 18, nombre: 'PARAS', idUnidad: 1 },
    { id: 19, nombre: 'PATAHUASI', idUnidad: 1 },
    { id: 20, nombre: 'PAUCHO', idUnidad: 1 },
    { id: 21, nombre: 'POMAPUKIO', idUnidad: 1 },
    { id: 90, nombre: 'SAN ANTONIO DEL ESTRECHO', idUnidad: 20 },
    { id: 91, nombre: 'ESPERANZA', idUnidad: 20 },
    { id: 92, nombre: 'REMANZO', idUnidad: 20 },
    { id: 93, nombre: 'NUEVA ANGUSILLA', idUnidad: 20 },
    { id: 94, nombre: 'SOPLIN VARGAS', idUnidad: 20 },
    { id: 95, nombre: 'HUANTA', idUnidad: 20 },
    { id: 96, nombre: 'COCHIQUINAS', idUnidad: 20 },
    { id: 97, nombre: 'LEONCIO PRADO', idUnidad: 20 },
    { id: 98, nombre: 'INDUSTRIAL (PUERTO INDUSTRIAL)', idUnidad: 20 },
    { id: 99, nombre: 'TRES FRONTERAS', idUnidad: 20 },
    { id: 100, nombre: 'EL ALAMO', idUnidad: 20 },
    { id: 101, nombre: 'FLOR DE AGOSTO', idUnidad: 20 },
    { id: 102, nombre: 'COLONIA CACO', idUnidad: 21 },
    { id: 103, nombre: 'DOS DE MAYO', idUnidad: 22 },
    { id: 104, nombre: 'BRETAÑA', idUnidad: 20 },
    { id: 105, nombre: 'SANTA MERCEDES', idUnidad: 20 }
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
    { id: 1, codPatrimonio: '01212', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: 'OFICINA DE UNIDAD TERRITORIAL', idTipo: 1, nomTipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', idTipocombustible: 1, nomTipocombustible: 'DIESEL B-5', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'CAMIONETA NISSAN EGT-079' },
    { id: 2, codPatrimonio: '01216', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA ZONGSHEN EA-9256' },
    { id: 3, codPatrimonio: '01342', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 2, tambo: 'BARRIO VISTA ALEGRE', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9263', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA ZONGSHEN EA-9263' },
    { id: 4, codPatrimonio: '01565', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 3, tambo: 'CCERAOCRO', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0715', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA HONDA EW-0715' },
    { id: 5, codPatrimonio: '01652', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 4, tambo: 'CHACHASPATA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EB-7316', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA HONDA EB-7316' },
    { id: 6, codPatrimonio: '01664', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 5, tambo: 'CHURUNMARCA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'HONDA', placa: 'EW-0724', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA HONDA EW-0724' },
    { id: 7, codPatrimonio: '01733', idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 6, tambo: 'COCHAPAMPA', idTipo: 2, nomTipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9316', idTipocombustible: 2, nomTipocombustible: 'GASOHOL', idEstado: 1, nomEstado: 'OPERATIVO', fechaMantenimiento: new Date('2019-10-10'), nombre: 'MOTOCICLETA ZONGSHEN EA-9316' }
];

export const generadores: Generador[] = [
    { id: 1, codPatrimonio: '31183', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2800', tipo: 'S/T', serie: '1406X07868', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 2, codPatrimonio: '31184', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2801', tipo: 'S/T', serie: '1406X07815', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 3, codPatrimonio: '31185', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: '3100/2802', tipo: 'S/T', serie: '1406X07814', color: 'AMARILLO', estado: 'R', observacion: '', usuario: 'ROXANA YACHAPA CONDEÑA' },
    { id: 4, codPatrimonio: '31247', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-213009X00587', color: 'AMARILLO', estado: 'B', observacion: '43227', usuario: 'ROSA SANCHEZ MENDOZA' },
    { id: 5, codPatrimonio: '31533', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'BARRIO VISTA ALEGRE', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LEK', tipo: 'MONOFASICO', serie: '17040010S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'FERNANDO LIMA MEDINA' },
    { id: 6, codPatrimonio: '31720', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'CCERAOCRO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'GILVER LUIS CISNEROS VEGA' },
    { id: 7, codPatrimonio: '31913', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CHACHASPATA', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF5200DFW', tipo: 'MONOFASICO', serie: '200589', color: 'AZUL', estado: 'B', observacion: '', usuario: 'GOTARDO FREDY CANDIA DELGADILLO' },
    { id: 10, codPatrimonio: '32542', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'CHURUNMARCA', denominacion: 'GRUPO ELECTROGENO', marca: 'BRIGGS STRATTON', modelo: 'GS6500', tipo: 'S/T', serie: '1705231600749', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'JOEL SAUL LOPEZ QUINTERO' },
    { id: 11, codPatrimonio: '32590', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'COCHAPAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'PREMIUM', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'YO NIANDIA CRISOSTOMO' },
    { id: 8, codPatrimonio: '32129', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 7, nomTambo: 'CAYARPACHI', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-3001', tipo: 'S/T', serie: '4710837075', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ADRIEL ROJAS GONZALES' },
    { id: 9, codPatrimonio: '32183', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 8, nomTambo: 'AUQUIRACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'HONDA', modelo: 'PANTER', tipo: 'S/T', serie: 'GCAFH-0623048', color: 'ROJO', estado: 'B', observacion: '', usuario: 'JULIO CURO HUALLPA' },
    { id: 12, codPatrimonio: '32774', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 9, nomTambo: 'CUNYA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'S/T', serie: '15100129S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'CLIVER JHONNYMARTÍNEZ CASTRO' },
    { id: 13, codPatrimonio: '33091', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 10, nomTambo: 'CUSIBAMBA', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: 'POWER', tipo: 'MONOFASICO', serie: 'GDA6800E ', color: 'ROJO', estado: 'B', observacion: 'NINGUNA', usuario: 'JOHN KENY HUERTAS RODRIGUEZ' },
    { id: 14, codPatrimonio: '33275', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 11, nomTambo: 'HUANCA PAMPA', denominacion: 'GRUPO ELECTROGENO', marca: 'KOHLER', modelo: 'PRO75E-2001', tipo: 'S/T', serie: '4416631185', color: 'AZUL', estado: 'B', observacion: '', usuario: 'ELIZABETH YUPA YUPANQUI' },
    { id: 15, codPatrimonio: '33308', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 12, nomTambo: 'MARCCARACCAY', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'ST168F-21309X00753', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'TANIA ROSMERY SOLIER MINAYA' },
    { id: 16, codPatrimonio: '33456', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 13, nomTambo: 'OCCO CHIRURA', denominacion: 'GRUPO ELECTROGENO', marca: 'HYUNDAI', modelo: 'HY9000LE', tipo: 'ELECTRICO', serie: '161204685S', color: 'NEGRO', estado: 'B', observacion: '', usuario: 'YOVANA BEATRIZ TENORIO MAMANI' },
    { id: 17, codPatrimonio: '33802', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 14, nomTambo: 'OCCOLLO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'GODOLFREDO CLAUDIO MARQUINA ATAUCUSI' },
    { id: 18, codPatrimonio: '33922', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 15, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'ME-28000CK', tipo: 'ELECTRICO', serie: 'CT168F-2', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 19, codPatrimonio: '', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 15, nomTambo: 'PACCHA', denominacion: 'GRUPO ELECTROGENO', marca: 'PHANTER', modelo: 'MF2800CX', tipo: 'ELECTRICO', serie: 'S/S', color: 'NEGRO', estado: 'R', observacion: '', usuario: 'RICHARD BAUTISTA RIVERA' },
    { id: 20, codPatrimonio: '33991', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 17, nomTambo: 'PACCO LOMA - HUAYCHAO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'M', observacion: 'MALOGRADO', usuario: 'MARICRIS JELITZ ASTO QUICHCA' },
    { id: 21, codPatrimonio: '35381', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 18, nomTambo: 'PARAS', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'EFRAIN ROLANDO GOMEZ GUTIERREZ' },
    { id: 22, codPatrimonio: '34255', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 19, nomTambo: 'PATAHUASI', denominacion: 'GRUPO ELECTROGENO', marca: 'DAEWOO', modelo: '7500W', tipo: 'MONOFASICO', serie: 'GDA8000E', color: 'ANARANJADO', estado: 'B', observacion: '', usuario: 'PELAGIO MENDEZ FARFAN' },
    { id: 23, codPatrimonio: '34347', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 20, nomTambo: 'PAUCHO', denominacion: 'GRUPO ELECTROGENO', marca: 'YAMAHA', modelo: 'EF7200DE', tipo: 'ELECTRICO', serie: '4002392', color: 'AZUL', estado: 'B', observacion: '', usuario: 'PAUL VICTOR BARZOLA PAREDES' },
    { id: 24, codPatrimonio: '34534', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 21, nomTambo: 'POMAPUKIO', denominacion: 'GRUPO ELECTROGENO', marca: 'PANTHER', modelo: 'MF2800CX', tipo: 'MONOFASICO', serie: 'S/S', color: 'AMARILLO', estado: 'B', observacion: '', usuario: 'MARITZA CAROLINA YAULI BENDEZU' }
];

export const deslizadores: Deslizador[] = [
    { id: 1, codPatrimonio: '21183', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 90, nomTambo: 'SAN ANTONIO DEL ESTRECHO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. SAN ANTONIO DEL ESTRECHO (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610848/ MATRICULA IQ-51601-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 2, codPatrimonio: '21184', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 91, nomTambo: 'ESPERANZA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. ESPERANZA (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610850/ MATRICULA IQ-51600-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 3, codPatrimonio: '21185', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 92, nomTambo: 'REMANZO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. REMANSO (TAMBO)', motor: 'SUZUKI 60 HP MODELO DF 60A. N° DE SERIE 06002F-611580/ MATRICULA IQ-51515-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 8 PERSONAS. PARABRISAS ' },
    { id: 4, codPatrimonio: '21186', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 93, nomTambo: 'NUEVA ANGUSILLA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. NUEVA ANGUSILLA (TAMBO)', motor: 'SUZUKI 70 HP MODELO DF 70. N° DE SERIE 07003F610851/ MATRICULA IQ-51602-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 5, codPatrimonio: '21187', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 94, nomTambo: 'SOPLIN VARGAS', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. SOPLIN VARGAS (TAMBO)', motor: 'SUZUKI 60 HP MODELO DF 60. N ° DE SERIE 06002F611579/ MATRICULA IQ-51604-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
    { id: 6, codPatrimonio: '21188', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 95, nomTambo: 'HUANTA', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. HUANTA (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10, PISO DE ALUMINIO' },
    { id: 7, codPatrimonio: '21189', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 96, nomTambo: 'COCHIQUINAS', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. COCHIQUINAS (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10, PISO DE ALUMINIO' },
    { id: 8, codPatrimonio: '21190', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 97, nomTambo: 'LEONCIO PRADO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'SI', ubicacionFisica: 'CP. LEONCIO PRADO (TAMBO)', motor: 'MOTOR: FUERA DE BORDA MARCA:YAMAHA MODELOE60HWL POTENCIA:60HP TIPO DE MOTOR: 2 T. PAÍS DE PROCEDENCIA:JAPÒN.', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO TIPO DE FABRICACIÓN: A PEDIDO, MODELO,5052-H34-MODELO BX TAMAÑO DE LA ESLORA: 6,00M, TAMAÑO DE LA MANGA: 2,00M, TAMAÑO DEL PUNTAL: 085MTS, CON PARABRISAS DE ALUMINIO LISO 2,05MM. , TIPO DEL TECHO: DE ALUMINIO , NUMERO DE ASIENTOS 8 TAPIZADOS  TIPO PULL MAN,  CANTIDAD DE OCUPANTES 10   ,PISO DE ALUMINIO' },
    { id: 9, codPatrimonio: '21191', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 98, nomTambo: 'INDUSTRIAL (PUERTO INDUSTRIAL)', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'CP. PUERTO INDUSTRIAL (TAMBO)', motor: 'MOTOR FUERA DE BORDA YAMAHA 60HP 2T : 96 KILOGRAMOS, MODELO: E60HWDL, POTENCIA: 60 HP A 5500 RPM, TIPO DE MOTOR: 2 TIEMPOS, ', potencia: 60, detalle: 'BOTE DESLIZADOR DE ALUMINIO DE 08 PAX, DE LARGO:6.00M, ANCHO:2.00M, PUNTAL:0.85M. MOTOR FUERA DE BORDA DE 60 HP. PARABRISAS: DE ESTRUCTURA DE ALUMINIO CON PUERTA DE ENTRADA CENTRAL; LAS VENTANAS CON LUNAS DE 6MM Y FRISA DE JEBE.  TECHO: FORRADO INTERIOR Y EXTERIORMENTE CON ALUMINIO LISO DE 1MM. Y EN LA PARTE MEDIA UNA PLANCHA DE TECKNOPORT PARA DISIPAR EL CALOR. ASIENTOS: OCHO (08) ASIENTOS VIP UNIPERSONALES TAPIZADOS TIPO PULL MAN. PISO DE CUBIERTA DE PASAJEROS: PISO ALUMINIO ESTRIADO ANTIDESLIZANTE.' },
    { id: 10, codPatrimonio: '21192', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 99, nomTambo: 'TRES FRONTERAS', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'YAMAHA MOTOR 115 HP. MODELO E115AETL. N° DE SERIE 1037259. MATRICULA IQ-51743-BF', potencia: 60, detalle: 'ESCOLA :10.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 12 PERSONAS. PARABRISAS ' },
    { id: 11, codPatrimonio: '21193', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 100, nomTambo: 'EL ALAMO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'SUZUKI 140 HP MODELO DF 140 ° DE SERIE 14001F516391/ MATRICULA IQ-51599-BF', potencia: 60, detalle: 'ESCOLA :10.00MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 12 PERSONAS. PARABRISAS ' },
    { id: 12, codPatrimonio: '21194', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 101, nomTambo: 'FLOR DE AGOSTO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA - BASE DE LA MARINA DE GUERRA', motor: 'SUZUKI 60 HP MODELO DF 60A. N° DE SERIE 06002F-611577/ MATRICULA IQ-51517-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 8 PERSONAS. PARABRISAS ' },
    { id: 13, codPatrimonio: '21195', idUnidad: 21, nomUnidad: 'U.T. UCAYALI', idTambo: 102, nomTambo: 'COLONIA CACO', denominacion: 'DESLIZADOR', estado: 'RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'MOTOR FUERA DE BORDA, MARCA YAMAHA DE E60HWDL, SERIE NRO 6K5K1058509', potencia: 60, detalle: 'BOTE DESLIZADOR: ALUMINIO MODELO BX-20, DE ESLORA 6MT, MAGAN 2 MTS, PUNTAL 0,85 MTS, LATERAL 0,55 MT DE 08 PASAJEROS' },
    { id: 14, codPatrimonio: '21196', idUnidad: 22, nomUnidad: 'U.T. SAN MARTIN', idTambo: 103, nomTambo: 'DOS DE MAYO', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'VALOR: POR DEFINIR  MARCA: YAMAHA MODELO: E60HMHDL  POTENCIA: 60HP A 5,500 RPM TIPO DE MOTOR: DOS TIEMPOS  PAIS DE PROCEDENCIA: CHINA NUMERO DE MOTOR: 1053432', potencia: 60, detalle: 'MATERIAL: ALUMINIO DE ALEACION NAVAL  TIPO DE FABRICACION: SOLDADURA MIG  MODELO: C70  MANGA: 1.75 M  ESLORA: 8.40 M  PUNTAL: 0.70 M  PARABRISAS: NO PRESENTA TIPO DE TECHO:  ESTRUCTURA DE TUBO 1/2"" TOLDO COMPLETO DE LONA PLASTIFICADA.  N° DE ASIENTOS: 08 CANTIDAD DE OCUPANTES: 09  TIPO DEL PISO: ALUMINIO ESTRIADO DE 2.05 MM ' },
    { id: 15, codPatrimonio: '21197', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 104, nomTambo: 'BRETAÑA', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA DEL PROVEEDOR', motor: 'MOTOR FUERA DE BORDA DE 60 HP 4 TIEMPOS. MARCA: ZUZUKI, MODELO: DF60A, SERIE:01.', potencia: 60, detalle: 'BOTE DESLIZADOR DE ALUMINIO, ESLORA:6.00M, MANGA:2.00M, PUNTAL:0.85M. CAP. 08 PERSONAS.' },
    { id: 16, codPatrimonio: '21198', idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 105, nomTambo: 'SANTA MERCEDES', denominacion: 'DESLIZADOR', estado: 'NO RECEPCIONADO', tieneSeguro: 'SI', iniFechaVigencia: new Date('2019-05-28'), finFechaVigencia: new Date('2020-05-27'), isOperativo: 'NO', ubicacionFisica: 'EN CUSTODIA CON EL PROVEEDOR ASTILLERO GRUPO CAM (SE TIENE UN SALDO PENDIENTE DE PAGO Y CUSTODIA) DENUNCIA AL RESIDENTE', motor: 'SUZUKI 60 HP MODELO DF 60. N° DE SERIE 06002F611581/ MATRICULA IQ-51603-BF', potencia: 60, detalle: 'ESCOLA :6.00 MANGA 2.00 PUNTAL 0.85. MATERIAL ALUMINO. CAPACIDAD 9 PERSONAS. PARABRISAS ' },
];

export const KILOMETRAJES: Kilometraje[] = [
    { id: 1, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: 'OFICINA DE UNIDAD TERRITORIAL', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5100', kilometrajeLlegada: '5110', kilometrosRecorrido: 10, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0243', fechaComision: '01/10/2019' },
    { id: 2, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: 'OFICINA DE UNIDAD TERRITORIAL', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5110', kilometrajeLlegada: '5130', kilometrosRecorrido: 20, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '0434', fechaComision: '02/10/2019' },
    { id: 3, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: 'OFICINA DE UNIDAD TERRITORIAL', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5130', kilometrajeLlegada: '5145', kilometrosRecorrido: 15, lugarDestino: 'CP TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '0444', fechaComision: '01/10/2019' },
    { id: 4, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 0, tambo: 'OFICINA DE UNIDAD TERRITORIAL', idVehiculo: 1, tipo: 'CAMIONETA', marca: 'NISSAN', placa: 'EGT-079', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5145', kilometrajeLlegada: '5157', kilometrosRecorrido: 12, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '0545', fechaComision: '01/10/2019' },
    { id: 5, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '10:00 AM', kilometrajeSalida: '5150', kilometrajeLlegada: '5155', kilometrosRecorrido: 5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '034', fechaComision: '05/10/2019' },
    { id: 6, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:00 AM', horaLlegada: '9:10 AM', kilometrajeSalida: '5155', kilometrajeLlegada: '5159.5', kilometrosRecorrido: 4.5, lugarDestino: 'CP QUIÑASI', observaciones: 'COORIDNACION CON AUTORIDADES DEL C.P. QUIÑASI', codComisionSISMONITOR: '012', fechaComision: '10/10/2019' },
    { id: 7, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '11:00 AM', horaLlegada: '12:00 AM', kilometrajeSalida: '5164', kilometrajeLlegada: '5180.5', kilometrosRecorrido: 16.5, lugarDestino: 'TOTOS', observaciones: 'COORIDNACION CON LA MUNICIPALIDAD DISTRITAL DE TOTOS', codComisionSISMONITOR: '016', fechaComision: '20/10/2019' },
    { id: 8, idUnidad: 1, unidad: 'U.T. AYACUCHO NORTE', idTambo: 1, tambo: 'ANCARPATA', idVehiculo: 2, tipo: 'MOTOCICLETA', marca: 'ZONGSHEN', placa: 'EA-9256', horaSalida: '9:30 AM', horaLlegada: '9:40 AM', kilometrajeSalida: '5197', kilometrajeLlegada: '5199', kilometrosRecorrido: 2, lugarDestino: 'CP QUIÑASI', observaciones: 'VERIFICACION DE CHACRAS AFECTADAS POR LA SEQUIA', codComisionSISMONITOR: '051', fechaComision: '30/10/2019' }
];

export const CONSUMOSGENERADOR: ConsumoGenerador[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', marca: 'PANTHER', serie: 'S/S', horaInicio: '9:00 AM', horaFin: '2:30 PM', horas: 5.5, fecha: new Date('2019-09-20'), observacion: 'SE USO GENERADOR PARA DESARROLLO DE ACTIVIDADES E ILUMINACION EN LA PLATAFORMA' },
    { id: 2, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', marca: 'PANTHER', serie: 'ST168F-213009X00587', horaInicio: '9:00 AM', horaFin: '2:30 PM', horas: 5.5, fecha: new Date('2019-09-20'), observacion: 'SE USO GENERADOR PARA DESARROLLO DE ACTIVIDADES E ILUMINACION EN LA PLATAFORMA' },
    { id: 3, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', marca: 'PANTHER', serie: 'ST168F-213009X00587', horaInicio: '9:30 AM', horaFin: '2:30 PM', horas: 5.0, fecha: new Date('2019-10-05'), observacion: 'SE USO GENERADOR PARA LA TENCION INTEGRAL EN SALUD' },
    { id: 4, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', marca: 'PANTHER', serie: 'ST168F-213009X00587', horaInicio: '10:00 AM', horaFin: '6:00 PM', horas: 8.0, fecha: new Date('2019-10-30'), observacion: 'SE USO GENERADOR EN EL TAMBO POR CAUSA DE CORTE DE ENERGIA ELECTRICA' },
    { id: 5, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'BARRIO VISTA ALEGRE', marca: 'HYUNDAI', serie: '17040010S', horaInicio: '9:00 AM', horaFin: '9:30 AM', horas: 0.5, fecha: new Date('2019-10-10'), observacion: 'SE USO GENERADOR EN EL TAMBO POR CAUSA DE CORTE DE ENERGIA ELECTRICA' },
    { id: 6, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'CCERAOCRO', marca: 'PANTHER', serie: 'S/S', horaInicio: '10:00 AM', horaFin: '11:00 AM', horas: 1.0, fecha: new Date('2019-10-15'), observacion: 'SE USO GENERADOR PARA LA TENCION INTEGRAL EN SALUD' },
    { id: 7, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CHACHASPATA', marca: 'YAMAHA', serie: '200589', horaInicio: '11:00 AM', horaFin: '12:00 AM', horas: 1.0, fecha: new Date('2019-10-20'), observacion: 'SE USO GENERADOR PARA DESARROLLO DE ACTIVIDADES E ILUMINACION EN LA PLATAFORMA' },
    { id: 8, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'CHURUNMARCA', marca: 'BRIGGS STRATTON', serie: '1705231600749', horaInicio: '3:00 PM', horaFin: '4:00 PM', horas: 1.0, fecha: new Date('2019-10-25'), observacion: '' },
    { id: 9, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'COCHAPAMPA', marca: 'PANTHER', serie: 'PREMIUM', horaInicio: '9:30 AM', horaFin: '2:30 PM', horas: 5.0, fecha: new Date('2019-10-30'), observacion: '' }
];

export const CONSUMOSDESLIZADOR: HorasDeslizador[] = [
    { id: 1, idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', potencia: 70, horaInicio: '6:00 AM', horaFin: '4:30 AM', horas: 10.5, fecha: new Date('2019-10-10'), observacion: '' },
    { id: 2, idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 90, nomTambo: 'SAN ANTONIO DEL ESTRECHO', potencia: 70, horaInicio: '12:00 AM', horaFin: '04:00 PM', horas: 4.0, fecha: new Date('2019-10-15'), observacion: '' },
    { id: 3, idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 90, nomTambo: 'SAN ANTONIO DEL ESTRECHO', potencia: 70, horaInicio: '10:00 AM', horaFin: '03:00 PM', horas: 5.0, fecha: new Date('2019-10-20'), observacion: '' },
    { id: 4, idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 90, nomTambo: 'SAN ANTONIO DEL ESTRECHO', potencia: 70, horaInicio: '3:00 PM', horaFin: '4:00 PM', horas: 1.0, fecha: new Date('2019-10-25'), observacion: '' },
    { id: 5, idUnidad: 20, nomUnidad: 'U.T. LORETO', idTambo: 91, nomTambo: 'ESPERANZA', potencia: 70, horaInicio: '9:30 AM', horaFin: '2:30 AM', horas: 5.0, fecha: new Date('2019-10-30'), observacion: '' }
];

export const PARTIDAS: Object[] = [
    { id: 1, nombre: '2.3.13.11', descripcion: 'COMBUSTIBLE Y CARBURANTES' },
    { id: 2, nombre: '2.3.13.12', descripcion: 'GASES' },
    { id: 3, nombre: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES' }
];

export const EJECUCIONPRESUPUESTAL: EjecucionPresupuestal[] = [
    { id: 1, idTipoejecucion: 3, nomTipoejecucion: 'FONDO POR ENCARGO (F/E)', idUnidad: 20, nomUnidad: 'U.T. AYACUCHO SUR', idOrdencompra: 0, nroOrdencompra: '', nroResAdministracion: '165-2018', monto: 10290.00, fecha: new Date('2018-07-20'), observacion: '' },
    { id: 2, idTipoejecucion: 3, nomTipoejecucion: 'FONDO POR ENCARGO (F/E)', idUnidad: 20, nomUnidad: 'U.T. AYACUCHO SUR', idOrdencompra: 0, nroOrdencompra: '', nroResAdministracion: '102-2018', monto: 6945.00, fecha: new Date('2018-01-01'), observacion: '' },
    { id: 3, idTipoejecucion: 2, nomTipoejecucion: 'ORDEN DE COMPRA (OC)', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idOrdencompra: 1, nroOrdencompra: '0000060-2019', nroResAdministracion: '', monto: 10188.08, fecha: new Date('2019-06-15'), observacion: '' },
    { id: 4, idTipoejecucion: 3, nomTipoejecucion: 'ORDEN DE COMPRA (OC)', idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idOrdencompra: 1, nroOrdencompra: '0000019-2019', nroResAdministracion: '', monto: 7245.00, fecha: new Date('2019-01-01'), observacion: '' }
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

export const CUADROCONTROL: CuadroControl[] = [
    { secFun: 22, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 65889.00, combCamionetas: 10395.00, combMotocicletas: 52272.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 2500.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 22, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 2700.00, combCamionetas: 10395.00, combMotocicletas: 52272.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 2500.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 26, idUnidad: 4, nomUnidad: 'U.T. HUANUCO', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 34000.00, combCamionetas: 0.00, combMotocicletas: 32771.20, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 0, lubMotocicletas: 2800.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 26, idUnidad: 4, nomUnidad: 'U.T. HUANUCO', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 2800.00, combCamionetas: 0.00, combMotocicletas: 32771.20, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 0, lubMotocicletas: 2800.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 39, idUnidad: 3, nomUnidad: 'U.T. UCAYALI', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 5390.00, combCamionetas: 0.00, combMotocicletas: 4950.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 0, lubMotocicletas: 200.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 39, idUnidad: 3, nomUnidad: 'U.T. UCAYALI', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 200.00, combCamionetas: 0.00, combMotocicletas: 4950.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 0, lubMotocicletas: 200.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 24, idUnidad: 2, nomUnidad: 'U.T. CUSCO', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 80000.00, combCamionetas: 8339.10, combMotocicletas: 66528.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 2500.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 24, idUnidad: 2, nomUnidad: 'U.T. CUSCO', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 3000.00, combCamionetas: 8339.10, combMotocicletas: 66528.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 2500.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 32, idUnidad: 5, nomUnidad: 'U.T. MADRE DE DIOS', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 3520.07, combCamionetas: 0.00, combMotocicletas: 3080.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 160.00, lubMotocicletas: 160.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 32, idUnidad: 5, nomUnidad: 'U.T. MADRE DE DIOS', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 160.00, combCamionetas: 0.00, combMotocicletas: 3080.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 160.00, lubMotocicletas: 160.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 36, idUnidad: 6, nomUnidad: 'U.T. PUNO', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 70000.00, combCamionetas: 11440.00, combMotocicletas: 55440.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1816.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 36, idUnidad: 6, nomUnidad: 'U.T. PUNO', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 2016.00, combCamionetas: 11440.00, combMotocicletas: 55440.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1816.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 27, idUnidad: 7, nomUnidad: 'U.T. JUNIN', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 40000.00, combCamionetas: 11176.00, combMotocicletas: 23408.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1320.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 27, idUnidad: 7, nomUnidad: 'U.T. JUNIN', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 1600.00, combCamionetas: 11176.00, combMotocicletas: 23408.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1520.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 21, idUnidad: 8, nomUnidad: 'U.T. AYACUCHO SUR', idPartida: 1, nomPartida: '2.3.13.11', totalAvancePresupuestal: 35000.00, combCamionetas: 7480.00, combMotocicletas: 25839.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1816.00, lubGeneradores: 0, lubDeslizadores: 0 },
    { secFun: 21, idUnidad: 8, nomUnidad: 'U.T. AYACUCHO SUR', idPartida: 2, nomPartida: '2.3.13.13', totalAvancePresupuestal: 2016.00, combCamionetas: 7480.00, combMotocicletas: 25839.00, combGeneradores: 220.00, combDeslizadores: 220.00, lubCamionetas: 200.00, lubMotocicletas: 1816.00, lubGeneradores: 0, lubDeslizadores: 0 },
];

export const ASIGNACIONPRESUPUESTAL: AsignacionPresupuestal[] = [
    { id: 1, codigoMeta: '0007', nomMeta: 'AMAZONAS', partida: '2.3.13.11', descripcion: 'COMBUSTIBLES Y CARBURANTES', pim: 15540.00, certificado: 100.00, saldo: 15440.00, fecha: new Date('2019-01-15') },
    { id: 2, codigoMeta: '0007', nomMeta: 'AMAZONAS', partida: '2.3.13.12', descripcion: 'GASES', pim: 8100.00, certificado: 0.00, saldo: 8100.00, fecha: new Date('2019-01-15') },
    { id: 3, codigoMeta: '0007', nomMeta: 'AMAZONAS', partida: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES', pim: 3500.00, certificado: 0.00, saldo: 3500.00, fecha: new Date('2019-01-15') },
    { id: 4, codigoMeta: '0008', nomMeta: 'ANCASH', partida: '2.3.13.11', descripcion: 'COMBUSTIBLES Y CARBURANTES', pim: 18498.00, certificado: 100.00, saldo: 18398.00, fecha: new Date('2019-01-15') },
    { id: 5, codigoMeta: '0008', nomMeta: 'ANCASH', partida: '2.3.13.12', descripcion: 'GASES', pim: 9180.00, certificado: 0.00, saldo: 9180.00, fecha: new Date('2019-01-15') },
    { id: 6, codigoMeta: '0008', nomMeta: 'ANCASH', partida: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES', pim: 5300.00, certificado: 0.00, saldo: 5300.00, fecha: new Date('2019-01-15') },
    { id: 7, codigoMeta: '0009', nomMeta: 'APURIMAC', partida: '2.3.13.11', descripcion: 'COMBUSTIBLES Y CARBURANTES', pim: 23587.00, certificado: 100.00, saldo: 23487.00, fecha: new Date('2019-01-15') },
    { id: 8, codigoMeta: '0009', nomMeta: 'APURIMAC', partida: '2.3.13.12', descripcion: 'GASES', pim: 3600.00, certificado: 0.00, saldo: 3600.00, fecha: new Date('2019-01-15') },
    { id: 9, codigoMeta: '0009', nomMeta: 'APURIMAC', partida: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES', pim: 4810.00, certificado: 0.00, saldo: 4810.00, fecha: new Date('2019-01-15') },
    { id: 10, codigoMeta: '0010', nomMeta: 'AREQUIPA', partida: '2.3.13.11', descripcion: 'COMBUSTIBLES Y CARBURANTES', pim: 16848.00, certificado: 100.00, saldo: 16748.00, fecha: new Date('2019-01-15') },
    { id: 12, codigoMeta: '0010', nomMeta: 'AREQUIPA', partida: '2.3.13.12', descripcion: 'GASES', pim: 1800.00, certificado: 0.00, saldo: 1800.00, fecha: new Date('2019-01-15') },
    { id: 13, codigoMeta: '0010', nomMeta: 'AREQUIPA', partida: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES', pim: 821.00, certificado: 0.00, saldo: 821.00, fecha: new Date('2019-01-15') },
    { id: 14, codigoMeta: '0011', nomMeta: 'AYACUCHO', partida: '2.3.13.11', descripcion: 'COMBUSTIBLES Y CARBURANTES', pim: 50294.00, certificado: 200.00, saldo: 50094.00, fecha: new Date('2019-01-15') },
    { id: 14, codigoMeta: '0011', nomMeta: 'AYACUCHO', partida: '2.3.13.12', descripcion: 'GASES', pim: 5200.00, certificado: 0.00, saldo: 5200.00, fecha: new Date('2019-01-15') },
    { id: 14, codigoMeta: '0011', nomMeta: 'AYACUCHO', partida: '2.3.13.13', descripcion: 'LUBRICANTES, GRASAS Y AFINES', pim: 2496.00, certificado: 0.00, saldo: 2496.00, fecha: new Date('2019-01-15') },
];

export const METAS: Object[] = [
    { id: 1, codigo: '0007', nombre: 'AMAZONAS', descripcion: '0007 - AMAZONAS' },
    { id: 2, codigo: '0008', nombre: 'ANCASH', descripcion: '0008 - ANCASH' },
    { id: 3, codigo: '0009', nombre: 'APURIMAC', descripcion: '0009 - APURIMAC' },
    { id: 4, codigo: '0010', nombre: 'AREQUIPA', descripcion: '0010 - AREQUIPA' },
    { id: 5, codigo: '0011', nombre: 'AYACUCHO', descripcion: '0011 - AYACUCHO' },
    { id: 6, codigo: '0012', nombre: 'CAJAMARCA', descripcion: '0012 - CAJAMARCA' },
    { id: 7, codigo: '0013', nombre: 'CUSCO', descripcion: '0013 - CUSCO' },
];

export const ANIOPRESUPUESTAL: Master[] = [
    { id: 1, nombre: '2019' },
    { id: 2, nombre: '2018' },
    { id: 3, nombre: '2017' }
];

export const CUADROCONTROLTAMBO: CuadroControlTambo[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA UNIDAD TERRITORIAL', dieselConsumo: 229, dieselPromCosto: 12.9, dieselTotal: 2954.1, gasConsMotocicletas: 0, gasPromCosto: 0, gasMotocicletasTotal: 0, gasConsGeneradores: 0, gasGeneradoresTotal: 0, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 60, lubricantesTotal: 60, idPartida: 1, nomPartida: '2.3.13.11', total: 2954.1, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 60 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'ANCARPATA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 13.4, gasMotocicletasTotal: 402, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 469, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'AUQUIRACCAY', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 27, gasPromCosto: 14.8, gasMotocicletasTotal: 399.6, gasConsGeneradores: 5, gasGeneradoresTotal: 74, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 473.6, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'BARRIO VISTA ALEGRE', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 13.4, gasMotocicletasTotal: 402, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 469, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CC SANTIAGO DE LUCANAMARCA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 22, gasPromCosto: 13.4, gasMotocicletasTotal: 294.8, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 361.8, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CCAYARPACHI', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 18, gasPromCosto: 15, gasMotocicletasTotal: 270, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 345, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CCERAOCRO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CHACHASPATA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 14, gasPromCosto: 13.4, gasMotocicletasTotal: 187.6, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 254.6, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CHURUNMARCA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 39, gasPromCosto: 13.4, gasMotocicletasTotal: 522.6, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 589.6, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'COCHAPAMPA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CUNYA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15.5, gasMotocicletasTotal: 465, gasConsGeneradores: 5, gasGeneradoresTotal: 77.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 542.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'CUSIBAMBA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 13.4, gasMotocicletasTotal: 335, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 402, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'HUANCA PAMPA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'MARCCARACCAY', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 13.4, gasMotocicletasTotal: 402, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 469, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OCCO CHIRURA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OCCOLLO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PACCHA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 10, gasPromCosto: 14, gasMotocicletasTotal: 140, gasConsGeneradores: 5, gasGeneradoresTotal: 70, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 210, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PACCO LOMA -HUAYCHAO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 14.7, gasMotocicletasTotal: 441, gasConsGeneradores: 5, gasGeneradoresTotal: 73.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 514.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PARAS', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 15.5, gasMotocicletasTotal: 387.5, gasConsGeneradores: 5, gasGeneradoresTotal: 77.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 465, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PATAHUASI', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 38, gasPromCosto: 15.5, gasMotocicletasTotal: 589, gasConsGeneradores: 5, gasGeneradoresTotal: 77.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 666.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PAUCHO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15.5, gasMotocicletasTotal: 465, gasConsGeneradores: 5, gasGeneradoresTotal: 77.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 542.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'POMAPUKIO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 12.9, gasMotocicletasTotal: 387, gasConsGeneradores: 5, gasGeneradoresTotal: 64.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 451.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'PUNTURCO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 14, gasMotocicletasTotal: 350, gasConsGeneradores: 5, gasGeneradoresTotal: 70, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 420, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'QUISPILLACTA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 28, gasPromCosto: 14, gasMotocicletasTotal: 392, gasConsGeneradores: 5, gasGeneradoresTotal: 70, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 462, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'SACHABAMBA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 28, gasPromCosto: 14, gasMotocicletasTotal: 392, gasConsGeneradores: 5, gasGeneradoresTotal: 70, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 462, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'SAN CRISTOBAL DE MORCCO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15.5, gasMotocicletasTotal: 465, gasConsGeneradores: 5, gasGeneradoresTotal: 77.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 542.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'SANABAMBA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 24, gasPromCosto: 13.5, gasMotocicletasTotal: 324, gasConsGeneradores: 5, gasGeneradoresTotal: 67.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 391.5, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'SANTA CRUZ DE HOSPICIO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 14.5, gasMotocicletasTotal: 362.5, gasConsGeneradores: 5, gasGeneradoresTotal: 72.5, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 435, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'SANTA LUCIA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 13.4, gasMotocicletasTotal: 335, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 402, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'TIOPAMPA', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 14.8, gasMotocicletasTotal: 370, gasConsGeneradores: 5, gasGeneradoresTotal: 74, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 444, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'URAS', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 15, gasMotocicletasTotal: 375, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 25, lubricantesTotal: 25, idPartida: 1, nomPartida: '2.3.13.11', total: 450, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 25 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'VISTA ALEGRE DE CCARHUACCOCCO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 25, gasPromCosto: 13.4, gasMotocicletasTotal: 335, gasConsGeneradores: 5, gasGeneradoresTotal: 67, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 30, lubricantesTotal: 30, idPartida: 1, nomPartida: '2.3.13.11', total: 402, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 30 },
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'YURAQ PUNKO', dieselConsumo: 0, dieselPromCosto: 0, dieselTotal: 0, gasConsMotocicletas: 30, gasPromCosto: 15, gasMotocicletasTotal: 450, gasConsGeneradores: 5, gasGeneradoresTotal: 75, gasConsDeslizadores: 0, gasDeslizadoresTotal: 0, lubricConsumo: 1, lubricPromCosto: 35, lubricantesTotal: 35, idPartida: 1, nomPartida: '2.3.13.11', total: 525, idPartida2: 3, nomPartida2: '2.3.13.13', total2: 35 },
];

export const PRODUCTOSLUBRICANTE: Object[] = [
    { id: 1, nombre: 'LUBRICANTE' },
    { id: 2, nombre: 'ACEITE' },
];

export const TIPOSMANTENIMIENTO: Object[] = [
    { id: 1, nombre: 'PREVENTIVO' },
    { id: 2, nombre: 'CORRECTIVO' },
];

export const ESTADOSMANTENIMIENTO = [
    { id: 1, nombre: 'SOLICITADO' },
    { id: 2, nombre: 'PEND. REQUERIMIENTO' },
    { id: 3, nombre: 'PEND. ASIGNACION' },
    { id: 4, nombre: 'PEND. CONFORMIDAD' },
    { id: 5, nombre: 'CONFORME' },
];

export const TIPOSPRESUPUESTO: Master[] = [
    { id: 1, nombre: 'ORDEN DE SERVICIO (OS)' },
    { id: 2, nombre: 'ORDEN DE COMPRA (OC)' },
    { id: 3, nombre: 'FONDO POR ENCARGO (F/E)' },
    { id: 4, nombre: 'CAJA CHICA (CC)' }
];

export const MANTENIMIENTOS: MantenimientoVehicular[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTipomantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', nroHojatramiteReq: '24721-2019', nroInformeReq: '211-2019', idTipoAsigPresupuesto: 1, nomTipoAsigPresupuesto: 'ORDEN DE SERVICIO (OS)', codAsigPresupuesto: '1576-2019', importeAsigPresupuesto: 6086.00, nroHojatramiteConf: '24721-2019', nroInformeConf: '', actaRecepcionEmpresa: '', cartaInformeProveedor: '', actaRecepccionUURR: '', obsRecepccionUURR: 'EJECUTADO CONFORME', idEstadoMantenimiento: 2, nomEstadoMantenimiento: 'PEND. AUTORIZACION', cotizacion: 2000, asuntoSolicitud: 'SOLICITUD MANTENIMIENTO PREVENTIVO', detalleSolicitud: 'Estimado Sr. Angel:\n Mediante el presente;  solicito a Usted autorización para proceder el cambio de aceite por los 5,000 km de recorrido de la camioneta EGA-125; el mismo que asciende a un monto de S/. 313.00 el cual se estaría cubriendo con fondos de caja chica.\nAgradezco su atención.', conBadge: false },
    { id: 2, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTipomantenimiento: 1, nomTipoMantenimiento: 'PREVENTIVO', nroHojatramiteReq: '24734-2019', nroInformeReq: '456-2019', idTipoAsigPresupuesto: 3, nomTipoAsigPresupuesto: 'FONDO POR ENCARGO (F/E)', codAsigPresupuesto: '448-2019', importeAsigPresupuesto: 1600.00, nroHojatramiteConf: '29187-2019', nroInformeConf: '', actaRecepcionEmpresa: '', cartaInformeProveedor: '', actaRecepccionUURR: '', obsRecepccionUURR: 'EJECUTADO CONFORME', idEstadoMantenimiento: 2, nomEstadoMantenimiento: 'PEND. AUTORIZACION', cotizacion: 2000, asuntoSolicitud: 'SOLICITUD MANTENIMIENTO PREVENTIVO', detalleSolicitud: 'Estimado Sr. Angel:\nMediante el presente;  solicito a Usted autorización para proceder el cambio de aceite por los 5,000 km de recorrido de la camioneta EGA-125; el mismo que asciende a un monto de S/. 313.00 el cual se estaría cubriendo con fondos de caja chica.\n\nAgradezco su atención.', conBadge: false },
    { id: 3, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTipomantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', nroHojatramiteReq: '24755-2019', nroInformeReq: '234-2019', idTipoAsigPresupuesto: 0, nomTipoAsigPresupuesto: '', codAsigPresupuesto: '', importeAsigPresupuesto: 0, nroHojatramiteConf: '', nroInformeConf: '', actaRecepcionEmpresa: '', cartaInformeProveedor: '', actaRecepccionUURR: '', obsRecepccionUURR: '', idEstadoMantenimiento: 1, nomEstadoMantenimiento: 'SOLICITADO', cotizacion: 2000, asuntoSolicitud: 'SOLICITUD MANTENIMIENTO PREVENTIVO', detalleSolicitud: 'Estimado Sr. Angel:\n Mediante el presente;  solicito a Usted autorización para proceder el cambio de aceite por los 5,000 km de recorrido de la camioneta EGA-125; el mismo que asciende a un monto de S/. 313.00 el cual se estaría cubriendo con fondos de caja chica.\nAgradezco su atención.', conBadge: false },
    { id: 4, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTipomantenimiento: 1, nomTipoMantenimiento: 'PREVENTIVO', nroHojatramiteReq: '24767-2019', nroInformeReq: '543-2019', idTipoAsigPresupuesto: 3, nomTipoAsigPresupuesto: 'FONDO POR ENCARGO (F/E)', codAsigPresupuesto: '052-2019', importeAsigPresupuesto: 3741.00, nroHojatramiteConf: '', nroInformeConf: '04-2019', actaRecepcionEmpresa: '', cartaInformeProveedor: '', actaRecepccionUURR: '', obsRecepccionUURR: 'EJECUTADO CONFORME', idEstadoMantenimiento: 3, nomEstadoMantenimiento: 'PEND. CONF. SERVICIO', cotizacion: 2000, asuntoSolicitud: 'SOLICITUD MANTENIMIENTO PREVENTIVO', detalleSolicitud: 'Estimado Sr. Angel:\n Mediante el presente;  solicito a Usted autorización para proceder el cambio de aceite por los 5,000 km de recorrido de la camioneta EGA-125; el mismo que asciende a un monto de S/. 313.00 el cual se estaría cubriendo con fondos de caja chica.\nAgradezco su atención.', conBadge: false },
    { id: 5, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTipomantenimiento: 1, nomTipoMantenimiento: 'PREVENTIVO', nroHojatramiteReq: '24791-2019', nroInformeReq: '765-2019', idTipoAsigPresupuesto: 4, nomTipoAsigPresupuesto: 'CAJA CHICA (CC)', codAsigPresupuesto: '', importeAsigPresupuesto: 50.00, nroHojatramiteConf: '', nroInformeConf: '03-2019', actaRecepcionEmpresa: '', cartaInformeProveedor: '', actaRecepccionUURR: '', obsRecepccionUURR: 'EJECUTADO CONFORME', idEstadoMantenimiento: 3, nomEstadoMantenimiento: 'PEND. CONF. SERVICIO', cotizacion: 2000, asuntoSolicitud: 'SOLICITUD MANTENIMIENTO PREVENTIVO', detalleSolicitud: 'Estimado Sr. Angel:\n Mediante el presente;  solicito a Usted autorización para proceder el cambio de aceite por los 5,000 km de recorrido de la camioneta EGA-125; el mismo que asciende a un monto de S/. 313.00 el cual se estaría cubriendo con fondos de caja chica.\nAgradezco su atención.', conBadge: false }
];

export const _estadosSolicitudMant = [
    { id: 1, nombre: 'REGISTRADO' },
    { id: 2, nombre: 'PEND. ASIGNACION' },
];

export const _tiposProducto = [
    { id: 1, nombre: 'REPUESTOS' },
    { id: 2, nombre: 'SERVICIOS' },
];

export const _tiposDocumento = [
    { id: 1, nombre: 'RUC' },
    { id: 2, nombre: 'DNI' },
];

export const _solicitudesMant: SolicitudMant[] = [
    { id: 1, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 0, nomTambo: 'OFICINA DE UNIDAD TERRITORIAL', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 1, idTipoVehiculo: 1, nomTipoVehiculo: 'CAMIONETA', marcaVehiculo: 'NISSAN', placaVehiculo: 'EGT-079', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 1200.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 2, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 1, nomTambo: 'ANCARPATA', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 2, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'ZONGSHEN', placaVehiculo: 'EA-9256', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 634.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 3, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 2, nomTambo: 'BARRIO VISTA ALEGRE', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 3, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'ZONGSHEN', placaVehiculo: 'EA-9263', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 984.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 4, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 3, nomTambo: 'CCERAOCRO', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 3, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'HONDA', placaVehiculo: 'EW-0715', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 348.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 5, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 4, nomTambo: 'CHACHASPATA', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 3, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'HONDA', placaVehiculo: 'EB-7316', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 418.80, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 6, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 5, nomTambo: 'CHURUNMARCA', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 3, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'HONDA', placaVehiculo: 'EW-0724', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 457.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
    { id: 7, idUnidad: 1, nomUnidad: 'U.T. AYACUCHO NORTE', idTambo: 6, nomTambo: 'COCHAPAMPA', idTipoMantenimiento: 2, nomTipoMantenimiento: 'CORRECTIVO', idVehiculo: 3, idTipoVehiculo: 2, nomTipoVehiculo: 'MOTOCICLETA', marcaVehiculo: 'ZONGSHEN', placaVehiculo: 'EA-9316', idProveedor: 0, nomProveedor: 'ZEA SILVA VLADIMIR', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10411143932', fecha: new Date('2019-12-09'), monto: 488.00, proforma: null, observacion: '', idEstado: 1, nomEstado: 'REGISTRADO', detalleSolicitudMant: null, fechaMant: null, kilometrajeInicio: null },
];


//CONFIGURACION
export const _estadosBanco = [
    { id: 1, nombre: 'ACTIVO' },
    { id: 2, nombre: 'INACTIVO' }
];
export const _bancos: Banco[] = [
    { id: 1, nombre: 'INTERBANK', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '20478876653', fecha: new Date('2019-12-09'), idEstado: 1, nomEstado: 'ACTIVO' },
    { id: 2, nombre: 'SCOTIABANK', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '20244433435', fecha: new Date('2019-12-09'), idEstado: 1, nomEstado: 'ACTIVO' },
    { id: 3, nombre: 'BANCO DE LA NACION', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '20354422242', fecha: new Date('2019-12-09'), idEstado: 2, nomEstado: 'INACTIVO' },
];

export const _departamentos = [
    { id: 1, nombre: 'AYACUCHO' },
    { id: 2, nombre: 'LIMA' }
];

export const _provincias = [
    { id: 1, nombre: 'HUAMANGA', idDepartamento: 1 },
    { id: 2, nombre: 'LIMA', idDepartamento: 2 }
];

export const _distritos = [
    { id: 1, nombre: 'JESUS NAZARENO', idProvincia: 1 },
    { id: 2, nombre: 'LIMA', idProvincia: 2 }
];

export const _proveedores: Proveedor[] = [
    { id: 1, nombre: 'SERVICENTRO MODA S.A.C', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '20452629284', idDepartamento: 1, nomDepartamento: 'AYACUCHO', idProvincia: 1, nomProvincia: 'HUAMANGA', idDistrito: 1, nomDistrito: 'JESUS NAZARENO', direccion: 'PROLONGACION KENNDY NRO. SN (SALIDA HACIA CUSCO)', telefono: '', fecha: new Date('2019-12-09'), idBanco: 0, nomBanco: '', nroCuenta: '', cciCuenta: '' },
    { id: 2, nombre: 'ESCOBAL JULCAMORO ROSA ELVIRA', idTipoDocumento: 1, nomTipoDocumento: 'RUC', nroDocumento: '10419147601', idDepartamento: 2, nomDepartamento: 'LIMA', idProvincia: 2, nomProvincia: 'LIMA', idDistrito: 2, nomDistrito: 'LIMA', direccion: 'AVENIDA MARTINES DE UCHURACAY 250 BR SAN MARTIN', telefono: '', fecha: new Date('2019-12-09'), idBanco: 0, nomBanco: '', nroCuenta: '', cciCuenta: '' },
];

export const _estadosCuentaBanco = [
    { id: 1, nombre: 'PRINCIPAL' },
    { id: 2, nombre: 'SECUNDARIO' },
];

export const _tiposOrden: any[] = [
    { id: 1, nombre: '' },
    { id: 2, nombre: 'ORDEN DE COMPRA (OC)' },
];

export const _ordenes: Orden[] = [
    { id: 1, nroOrdenCompra: '0000060', nroExpSIAF: '0000002811', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452629284', idProveedor: 1, nomProveedor: 'SERVICENTRO MODA S.A.C', monto: 10188.08, idEstado: 1, nomEstado: 'IMPORTADO', idTipoOrden: 1, nomTipoOrden: 'ORDEN DE SERVICIO (OS)' },
    { id: 2, nroOrdenCompra: '0000045', nroExpSIAF: '0000002412', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452631858', idProveedor: 2, nomProveedor: 'COORPORACION SANTA BERTHA S.A.C', monto: 6945.00, idEstado: 2, nomEstado: 'ACTIVO', idTipoOrden: 2, nomTipoOrden: 'ORDEN DE COMPRA (OC)' },
    { id: 3, nroOrdenCompra: '0000036', nroExpSIAF: '0000002345', fecha: new Date('12/06/2019'), idTipoDocumento: 2, nomTipoDocumento: 'RUC', nroDocumento: '20452629284', idProveedor: 1, nomProveedor: 'SERVICENTRO MODA S.A.C', monto: 9188.00, idEstado: 3, nomEstado: 'INACTIVO', idTipoOrden: 1, nomTipoOrden: 'ORDEN DE SERVICIO (OS)' }
];