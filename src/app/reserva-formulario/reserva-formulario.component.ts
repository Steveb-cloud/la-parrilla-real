// reserva-formulario.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-formulario',
  templateUrl: './reserva-formulario.component.html',
  styleUrls: ['./reserva-formulario.component.css']
})
export class ReservaFormularioComponent {
[x: string]: any;
  formData = {
    name: '',
    email: '',
    date: '',
    details: ''
  };

  showConfirmation: boolean = false;


  onSubmit() { 
    console.log('Reserva enviada:', this.formData);

    this.showConfirmation = true;

    setTimeout(() => {
      this.showConfirmation = false;
    }, 5000);
  }
}

