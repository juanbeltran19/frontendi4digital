import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleUsuariosComponent } from './usuarios/detalle-usuarios.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios.component';
import { ListaLogsComponent } from './usuarios/lista-logs.component';
import { ListarFotosComponent } from './usuarios/listar-fotos.component';

const routes: Routes = [
  {path: '', component: ListaUsuariosComponent},
  {path: 'detalle/:id', component: DetalleUsuariosComponent},
  {path: 'verlogs', component: ListaLogsComponent},
  {path: 'verfotos/:id', component: ListarFotosComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
