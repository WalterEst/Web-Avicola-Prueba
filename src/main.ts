import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Asegúrate de que AppComponent esté importado
import { provideRouter } from '@angular/router';  // Proveedor para las rutas
import { routes } from './app/app.routes';  // Las rutas que has definido

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Proveedor de rutas
  ]
});
