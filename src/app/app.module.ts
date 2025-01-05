import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { routes } from './app.routes';
import { BarnavComponent } from "./shared/barnav/barnav.component";
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BarnavComponent
],
  declarations: [], // Declarar otros componentes si es necesario
})
export class AppModule { }
