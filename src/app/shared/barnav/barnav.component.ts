import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barnav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './barnav.component.html',
  styleUrls: ['./barnav.component.css'],
})
export class BarnavComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
