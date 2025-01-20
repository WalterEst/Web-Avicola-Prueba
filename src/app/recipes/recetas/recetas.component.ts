import { Component } from '@angular/core';
import { BarnavComponent } from '../../shared/barnav/barnav.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {

}
