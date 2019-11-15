import { Injectable } from '@angular/core';
import { Perfil } from '../model/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  id: number;
  usuario: string;
  contrasenia: string;
  perfil: Perfil;
  idUnidad: number;
  idTambo: number;

  constructor() { }

  set setId(id: number) { this.id = id; }
  set setUsuario(usuario: string) { this.usuario = usuario; }
  set setContrasenia(contrasenia: string) { this.contrasenia = contrasenia; }
  set setPerfil(perfil: Perfil) { this.perfil = perfil; }
  set setIdUnidad(idUnidad: number) { this.idUnidad = idUnidad; }
  set setIdTambo(idTambo: number) { this.idTambo = idTambo; }

  get getId() { return this.id; }
  get getUsuario() { return this.usuario; }
  get getContrasenia() { return this.contrasenia; }
  get getPerfil() { return this.perfil; }
  get getIdUnidad() { return this.idUnidad; }
  get getIdTambo() { return this.idTambo; }

  public limpiarRegistro(): void {
    this.id = null;
    this.usuario = null;
    this.contrasenia = null;
    this.perfil = null;
    this.idUnidad = null;
    this.idTambo = null;
    return null;
  }
}
