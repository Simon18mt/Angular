import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'], // Corregido a 'styleUrls'
})
export class FormularioComponent {
  // Define el array que almacenará los datos del formulario
  usersArray: any[] = [];

  /* INFORMACION DEL BARBERO */
  arrayBarbero = ['simon', 'el@jaga', '12345', 'pelosqui'];

  /* INFORMACION DEL MASAJISTA */
  arrayMasaje = ['gabriel', 'el@gmail', '56789', 'aceitosqui'];

  /* Definimos el formulario "formUser" */
  formUser = new FormGroup({
    /* Aca dentro definimos todos los inputs que forman parte de este formulario */
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  /* Usamos un constructor con router */
  constructor(private router: Router) {}

  Acceso() {
    if (this.formUser.valid) {
      // Obtiene los valores del formulario
      const formValues = this.formUser.value;

      // Agrega los valores al array
      this.usersArray.push(formValues);

      // Compara los valores del formulario con los arrays
      const isBarbero = this.arrayBarbero.every(
        (val, index) => val === Object.values(formValues)[index]
      );
      const isMasajista = this.arrayMasaje.every(
        (val, index) => val === Object.values(formValues)[index]
      );

      if (isBarbero) {
        this.router.navigate(['/perfilBarbero']);
      } else if (isMasajista) {
        this.router.navigate(['/perfilMasajes']);
      } else {
        console.log('Los datos no coinciden con ningún perfil conocido');
      }
    } else {
      // Muestra un mensaje de error si el formulario es inválido
      console.log('El formulario no es válido');
    }
  }

  /* Definimos los getters de los inputs del formulario */
  get nombre() {
    return this.formUser.get('nombre') as FormControl;
  }
  get correo() {
    return this.formUser.get('correo') as FormControl;
  }
  get telefono() {
    return this.formUser.get('telefono') as FormControl;
  }
  get password() {
    return this.formUser.get('password') as FormControl;
  }
}
