import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarruselService {
  /*  DE LA BARBERIA */
  serviciosCarrusel: any[] = [];
  /*  los MASAJES */
  serviciosCarruselMasajes: any[] = [];

  constructor() {
    /*  DE LA BARBERIA */
    const serviciosCarruselString = sessionStorage.getItem('serviciosCarrusel');
    this.serviciosCarrusel = serviciosCarruselString
      ? JSON.parse(serviciosCarruselString)
      : [];

    /*  los MASAJES */
    const serviciosCarruselStringMasajes = sessionStorage.getItem(
      'serviciosCarruselMasajes'
    );
    this.serviciosCarruselMasajes = serviciosCarruselStringMasajes
      ? JSON.parse(serviciosCarruselStringMasajes)
      : [];
  }

  /*  DE LA BARBERIA */
  saveServiciosCarrusel(servicios: any[]): void {
    this.serviciosCarrusel = servicios;
    sessionStorage.setItem('serviciosCarrusel', JSON.stringify(servicios));
  }
  /*  los MASAJES */
  saveServiciosCarruselMasajes(servicios: any[]): void {
    this.serviciosCarruselMasajes = servicios;
    sessionStorage.setItem(
      'serviciosCarruselMasajes',
      JSON.stringify(servicios)
    );
  }
}
