import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirUsuariosComponent } from './anadir-usuarios/anadir-usuarios.component';
import { AppComponent } from './app.component';
import { IniciComponent } from './inici/inici.component';
import { ListadoCitasComponent } from './listado-citas/listado-citas.component';

const routes: Routes = [
  { path: '', component: IniciComponent },
  { path: 'listado', component: ListadoCitasComponent },
  { path: 'añadirUsuarios', component: AnadirUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
