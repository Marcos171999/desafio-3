import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { SharedModule } from './components/shared/shared.module';


const routes: Routes = [
  {
    path:'incio',
    component: InicioComponent
  },
  {
    path:'peliculas',
    component: PeliculasComponent
  },
  {
    path:'series',
    component: SeriesComponent
  },
  {
    path:'ingresar',
    component:IngresarComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
