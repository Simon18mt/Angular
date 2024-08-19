import { Component, AfterViewInit } from '@angular/core';
import { MessagesService } from '../../servicios/messages.service';
import { CarruselService } from '../../servicios/carrusel.service';

@Component({
  selector: 'app-barberia-perfil',
  templateUrl: './barberia-perfil.component.html',
  styleUrls: ['./barberia-perfil.component.css'],
})
export class BarberiaPerfilComponent implements AfterViewInit {
  /* inyectamos el servicio */
  constructor(
    public messagesService: MessagesService,
    public carruselService: CarruselService
  ) {}

  /* datosBarberia */
  nombre = this.messagesService.nombreService;
  locacion = this.messagesService.locacionService;
  servicio = this.messagesService.servicioService;
  datosInfo = this.messagesService.datosInfoService;

  /* CARRUSEL */
  servicios: any[] = []; // Array de servicios

  // Propiedades para Carrusel 1
  currentIndex1: number = 0;
  cardWidth1: number = 0;
  totalCards1: number = 0;

  // Propiedades para Carrusel 2
  currentIndex2: number = 0;
  cardWidth2: number = 0;
  totalCards2: number = 0;

  ngAfterViewInit() {
    // Obtener los datos del servicio
    this.servicios = this.carruselService.serviciosCarrusel;

    setTimeout(() => {
      this.updateCardCount('carousel1');
      this.updateCarousel('carousel1');
    }, 100); // Espera para asegurar que el DOM se haya actualizado
  }

  updateCardCount(carouselId: string) {
    const carousel = document.getElementById(
      `${carouselId}Inner`
    ) as HTMLElement;
    if (carousel) {
      const cards = carousel.querySelectorAll(
        '.card'
      ) as NodeListOf<HTMLElement>;
      if (cards.length > 0) {
        if (carouselId === 'carousel1') {
          this.cardWidth1 = cards[0].offsetWidth + 20; // Ancho de la tarjeta + margen
          this.totalCards1 = cards.length;
        } else if (carouselId === 'carousel2') {
          this.cardWidth2 = cards[0].offsetWidth + 20; // Ancho de la tarjeta + margen
          this.totalCards2 = cards.length;
        }
      }
    }
  }

  moveNext(carouselId: string) {
    const carousel = document.getElementById(
      `${carouselId}Inner`
    ) as HTMLElement;
    if (carousel) {
      if (carouselId === 'carousel1') {
        this.currentIndex1++;
        if (this.currentIndex1 >= this.totalCards1) {
          this.currentIndex1 = 0;
        }
        this.updateCarousel('carousel1');
      } else if (carouselId === 'carousel2') {
        this.currentIndex2++;
        if (this.currentIndex2 >= this.totalCards2) {
          this.currentIndex2 = 0;
        }
        this.updateCarousel('carousel2');
      }
    }
  }

  movePrev(carouselId: string) {
    const carousel = document.getElementById(
      `${carouselId}Inner`
    ) as HTMLElement;
    if (carousel) {
      if (carouselId === 'carousel1') {
        this.currentIndex1--;
        if (this.currentIndex1 < 0) {
          this.currentIndex1 = this.totalCards1 - 1;
        }
        this.updateCarousel('carousel1');
      } else if (carouselId === 'carousel2') {
        this.currentIndex2--;
        if (this.currentIndex2 < 0) {
          this.currentIndex2 = this.totalCards2 - 1;
        }
        this.updateCarousel('carousel2');
      }
    }
  }

  updateCarousel(carouselId: string) {
    const carousel = document.getElementById(
      `${carouselId}Inner`
    ) as HTMLElement;
    if (carousel) {
      const cardWidth =
        carouselId === 'carousel1' ? this.cardWidth1 : this.cardWidth2;
      const currentIndex =
        carouselId === 'carousel1' ? this.currentIndex1 : this.currentIndex2;
      carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      carousel.style.transition = 'transform 0.5s ease-in-out';
    }
  }
}
