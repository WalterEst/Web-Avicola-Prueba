import { Routes } from '@angular/router';
import { InicioComponent  } from './home/inicio/inicio.component';
import { ContactoComponent } from './contact/contacto/contacto.component';
import { InformacionComponent } from './information/informacion/informacion.component';
import { CatalogoComponent } from './catalog/catalogo/catalogo.component';
import { RecetasComponent } from './recipes/recetas/recetas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home/inicio', pathMatch: 'full' }, 
  { path: 'home/inicio', component: InicioComponent },
  { path: 'contact/contacto', component: ContactoComponent },
  { path: 'information/informacion', component: InformacionComponent },
  { path: 'catalog/catalogo', component: CatalogoComponent},
  { path: 'recipes/recetas', component: RecetasComponent } 
  
];
