import { Component, OnInit } from '@angular/core';
import { Logs } from '../models/logs';
import { LogsService } from '../service/logs.service';

@Component({
  selector: 'app-lista-logs',
  templateUrl: './lista-logs.component.html',
  styleUrls: ['./lista-logs.component.css']
})
export class ListaLogsComponent implements OnInit {

  logs: Logs[] = [];

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.cargarLogs();
  }

  cargarLogs(): void{
    this.logsService.listarLogs().subscribe(
      data => {
        this.logs = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
