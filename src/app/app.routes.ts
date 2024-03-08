import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'sobreMi', component: SobreMiComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
