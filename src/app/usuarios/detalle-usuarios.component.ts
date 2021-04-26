import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicaciones } from '../models/publicaciones';
import { PublicacionesService } from '../service/publicaciones.service';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {

  publicaciones: Publicaciones[] = [];
  
  constructor(
    private publicacionesService: PublicacionesService,
    private activateRoute: ActivatedRoute,
    private router: Router 
    ) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.publicacionesService.detalle(id).subscribe(
      data => {
        this.publicaciones = data;
      },
      err => {
        console.log(err);
      }
    ); 
  }

  
}
