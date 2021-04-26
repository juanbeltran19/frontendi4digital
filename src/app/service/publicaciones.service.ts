import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  publicacionUrl = 'http://localhost:8080/v1/';

  constructor(private httpClient: HttpClient) { }

  public detalle(id: number): Observable<Publicaciones[]>{
    return this.httpClient.get<Publicaciones[]>(this.publicacionUrl + `publicaciones/${id}`);
  }    

}
