import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../models/usuarios';
import {UsuariosService} from '../service/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: Usuarios[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void{
    this.usuariosService.lista().subscribe(
      data => {
        this.usuarios = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
