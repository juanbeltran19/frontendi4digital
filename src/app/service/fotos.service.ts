import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fotos } from '../models/fotos';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  fotosUrl = 'http://localhost:8080/v1/';

  constructor(private httpClient: HttpClient) { }

  public detalle(id: number): Observable<Fotos>{
    return this.httpClient.get<Fotos>(this.fotosUrl+`fotos/${id}`);
  }

}
