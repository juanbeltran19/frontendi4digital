import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fotos } from '../models/fotos';
import { FotosService } from '../service/fotos.service';


@Component({
  selector: 'app-listar-fotos',
  templateUrl: './listar-fotos.component.html',
  styleUrls: ['./listar-fotos.component.css']
})
export class ListarFotosComponent implements OnInit {

  fotos: Fotos = null;

  constructor(
    private fotosService: FotosService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.fotosService.detalle(id).subscribe(
      data => {
        this.fotos = data;
      },
      err => {
        console.log(err);
      }
    );  
  }

}
