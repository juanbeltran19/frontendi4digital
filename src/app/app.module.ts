import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './usuarios/detalle-usuarios.component';
import { ListaLogsComponent } from './usuarios/lista-logs.component';
import { ListarFotosComponent } from './usuarios/listar-fotos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    DetalleUsuariosComponent,
    ListaLogsComponent,
    ListarFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
