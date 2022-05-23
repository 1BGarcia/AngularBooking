import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalRegistrarCitasComponent } from './modal-registrar-citas/modal-registrar-citas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ListadoCitasComponent } from './listado-citas/listado-citas.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IniciComponent } from './inici/inici.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { AnadirUsuariosComponent } from './anadir-usuarios/anadir-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalRegistrarCitasComponent,
    ListadoCitasComponent,
    IniciComponent,
    NavbarComponent,
    FooterbarComponent,
    AnadirUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
