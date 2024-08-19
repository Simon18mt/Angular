import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  /* ******************************** contructor del servicio ******************************** */
  constructor() {
    /* INFORMACION DE BARBERIA */
    this.nombreService =
      sessionStorage.getItem('nombreService') ?? 'Simon Madrid';
    this.locacionService =
      sessionStorage.getItem('locacionService') ?? 'Medellín Colombia';
    this.servicioService =
      sessionStorage.getItem('servicioService') ?? 'Cortes clásicos';
    this.datosInfoService =
      sessionStorage.getItem('datosInfoService') ??
      `"En Barbería Elegante, ofrecemos cortes de cabello y afeitados con estilo y precisión. 
      Nuestro equipo de expertos barberos combina técnicas tradicionales con tendencias modernas, 
      garantizando una experiencia personalizada y de alta calidad. Relájate en un ambiente 
      sofisticado mientras transformamos tu look. ¡Descubre el arte del grooming en su máxima expresión!"`;

    /* INFORMACION DE MASAJES */
    this.nombreMasajes = sessionStorage.getItem('nombreMasajes') ?? 'Gabriel';
    this.locacionMasajes =
      sessionStorage.getItem('locacionMasajes') ?? 'España';
    this.servicioMasajes =
      sessionStorage.getItem('servicioMasajes') ?? 'Masajes clásicos';
    this.datosInfoMasajes =
      sessionStorage.getItem('datosInfoMasajes') ??
      `"Con más de 10 años de experiencia, ofrezco masajes terapéuticos diseñados para aliviar el estrés, 
      mejorar la circulación y restaurar el equilibrio del cuerpo y la mente. Utilizo una combinación de 
      técnicas que incluyen masaje sueco, tejido profundo y aromaterapia, adaptando cada sesión a las 
      necesidades individuales de mis clientes."`;
  }
  /* **********************INFORMACION DE BARBERIA********************** */
  /* métodos para editar y guardar la información */
  // Métodos para actualizar y guardar en sessionStorage
  // el nombre
  /********** MESSAGE barberia **********/
  nombreService: string;
  locacionService: string;
  servicioService: string;
  datosInfoService: string;
  updateNombre(nombre: string) {
    this.nombreService = nombre;
    sessionStorage.setItem('nombreService', nombre);
  }

  //la locación
  updateLocacion(locacion: string) {
    this.locacionService = locacion;
    sessionStorage.setItem('locacionService', locacion);
  }

  //el servicio
  updateServicio(servicio: string) {
    this.servicioService = servicio;
    sessionStorage.setItem('servicioService', servicio);
  }

  //  datos adicionales
  updateDatosInfo(datosInfo: string) {
    this.datosInfoService = datosInfo;
    sessionStorage.setItem('datosInfoService', datosInfo);
  }

  /* ********************** INFORMACION DE MASAJES ********************** */
  /* métodos para editar y guardar la información */
  // Métodos para actualizar y guardar en sessionStorage
  // el nombre
  /********** MESSAGE barberia **********/
  nombreMasajes: string;
  locacionMasajes: string;
  servicioMasajes: string;
  datosInfoMasajes: string;
  updateNombreMasaje(nombre: string) {
    this.nombreMasajes = nombre;
    sessionStorage.setItem('nombreMasajes', nombre);
  }

  //la locación
  updateLocacionMasaje(locacion: string) {
    this.locacionMasajes = locacion;
    sessionStorage.setItem('locacionMasajes', locacion);
  }

  //el servicio
  updateServicioMasaje(servicio: string) {
    this.servicioMasajes = servicio;
    sessionStorage.setItem('servicioMasajes', servicio);
  }

  //  datos adicionales
  updateDatosInfoMasaje(datosInfo: string) {
    this.datosInfoMasajes = datosInfo;
    sessionStorage.setItem('datosInfoMasajes', datosInfo);
  }
}
