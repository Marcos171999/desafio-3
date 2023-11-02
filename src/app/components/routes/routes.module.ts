import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations: [
        InicioComponent,
        PeliculasComponent,
        SeriesComponent,
        IngresarComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        
    ],
})
export class RoutesModule { }
