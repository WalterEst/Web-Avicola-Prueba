import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marca este componente como standalone
  imports: [RouterModule]  // Asegúrate de importar RouterModule
})
export class AppComponent { }
