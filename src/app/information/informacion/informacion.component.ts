import { Component } from '@angular/core';
import { BarnavComponent } from '../../shared/barnav/barnav.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [BarnavComponent, FooterComponent],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

}
