import { Component } from '@angular/core';
import { BarnavComponent } from '../../shared/barnav/barnav.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
