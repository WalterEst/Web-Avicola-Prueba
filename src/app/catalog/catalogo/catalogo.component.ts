import { Component } from '@angular/core';
import { BarnavComponent } from '../../shared/barnav/barnav.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
