import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../servicios/messages.service';
import { CarruselService } from '../../servicios/carrusel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-masajes-editar-agregar',
  templateUrl: './masajes-editar-agregar.component.html',
  styleUrl: './masajes-editar-agregar.component.css',
})
export class MasajesEditarAgregarComponent implements OnInit {
  //
  /* inyectamos el constructor de nuestro servicio "MessagesService" */
  constructor(
    public messagesService: MessagesService,
    public carruselService: CarruselService
  ) {
    // Inicializar los valores con los datos del servicio " ***** messages ***** "
    this.nombre = this.messagesService.nombreMasajes;
    this.locacion = this.messagesService.locacionMasajes;
    this.servicio = this.messagesService.servicioMasajes;
    this.datosInfo = this.messagesService.datosInfoMasajes;
    // Inicializar los valores con los datos del servicio " ***** carrusel ***** "
    this.servicios = this.carruselService.serviciosCarruselMasajes;
  }

  //valores del servicio "messages"
  nombre: string;
  locacion: string;
  servicio: string;
  datosInfo: string;

  updateInfo(field: string, value: string): void {
    switch (field) {
      case 'nombre':
        this.messagesService.updateNombreMasaje(value);
        break;
      case 'locacion':
        this.messagesService.updateLocacionMasaje(value);
        break;
      case 'servicio':
        this.messagesService.updateServicioMasaje(value);
        break;
      case 'datosInfo':
        this.messagesService.updateDatosInfoMasaje(value);
        break;
    }
    // Solo desenfocar el campo si el evento está definido
    if (event) {
      (event.target as HTMLElement).blur();
    }
  }

  /* *****************************segundo contenedor***************************** */
  //Crear nuevos servicios
  // Definimos el formulario con sus controles
  formServicio = new FormGroup({
    nombreServicio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });

  // Getters para los controles del formulario
  get nombreServicio() {
    return this.formServicio.get('nombreServicio') as FormControl;
  }
  get descripcion() {
    return this.formServicio.get('descripcion') as FormControl;
  }
  get precio() {
    return this.formServicio.get('precio') as FormControl;
  }

  /* funcion para guardar los datos en el "sessionStorage"
  cada vez que se envie el formulario */
  ngOnInit() {
    // Recuperar los datos de sessionStorage al inicializar el componente
    const storedServicios = sessionStorage.getItem('servicios');
    if (storedServicios) {
      this.servicios = JSON.parse(storedServicios);
      // Inicializar el array de servicios con los datos guardados
      this.servicios = this.carruselService.serviciosCarruselMasajes;
    }
  }

  // Array para guardar los servicios
  servicios: any[] = [];
  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.formServicio.valid) {
      /* comprobando la valides del formulario */
      /* almacenamos le objeto que nos envia "formServicio" en la variable "nuevoServicio " */
      const nuevoServicio = this.formServicio.value;
      /* los datos de "servicios" se agregan a "nuevoServicio" usando ".push" */
      this.servicios.push(nuevoServicio);

      // Guardar en sessionStorage y en el servicio
      this.carruselService.saveServiciosCarruselMasajes(this.servicios);

      // Limpiar el formulario
      this.formServicio.reset();
    }
  }

  // Función para eliminar un servicio
  eliminarServicio(index: number) {
    this.servicios.splice(index, 1);

    // Guardar los servicios actualizados en sessionStorage
    sessionStorage.setItem('servicios', JSON.stringify(this.servicios));
  }
}
