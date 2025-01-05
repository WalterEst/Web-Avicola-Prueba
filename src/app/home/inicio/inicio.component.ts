import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../../shared/barnav/barnav.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  standalone: true,
  imports: [CommonModule, BarnavComponent, FooterComponent],
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  images: string[] = [
    'asset/Banner.jpg',
    'asset/image1.jpg',
    'asset/image2.jpg',
    'asset/image3.jpg'
  ];

  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log('InicioComponent initialized');
  }

  prevImage(): void {
    this.changeImage(-1);
  }

  nextImage(): void {
    this.changeImage(1);
  }

  private changeImage(direction: number): void {
    const imageElement = document.querySelector('.gallery-image') as HTMLImageElement;
    
    if (imageElement) {
      // Desvanecer antes de cambiar la imagen
      imageElement.style.opacity = '0';  // Empieza la transición de desvanecimiento

      setTimeout(() => {
        // Cambiar la imagen después de la animación de desvanecimiento
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
      }, 200);  // El tiempo de espera debe coincidir con la duración de la transición en CSS

      // Después de cambiar la imagen, restauramos la opacidad
      setTimeout(() => {
        imageElement.style.opacity = '1';  // Restauramos la opacidad para la transición de entrada
      }, 200);  // Igual que el tiempo de la transición
    }
  }

  get currentImage(): string {
    return this.images[this.currentIndex];
  }
}
