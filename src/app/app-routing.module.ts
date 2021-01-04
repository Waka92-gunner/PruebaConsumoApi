import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListapeliculasComponent } from '../app/vistas/listapeliculas/listapeliculas.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:ListapeliculasComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
