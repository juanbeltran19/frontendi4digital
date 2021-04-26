import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logs } from '../models/logs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logsUrl = 'http://localhost:8080/v1/'; 

  constructor(private httpClient: HttpClient) { }

  public listarLogs(): Observable<Logs[]>{
    return this.httpClient.get<Logs[]>(this.logsUrl + 'logs');
  } 
}
