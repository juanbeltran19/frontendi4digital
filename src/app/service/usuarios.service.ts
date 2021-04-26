import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioUrl = 'http://localhost:8080/v1/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuarios[]>{
    return this.httpClient.get<Usuarios[]>(this.usuarioUrl + 'usuarios');
  }
}
