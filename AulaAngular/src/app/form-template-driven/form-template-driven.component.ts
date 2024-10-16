import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Cliente {
  nome: string;
  email: string;
  celular: string;
}

@Component({
  selector: 'app-form-template-driven',
  templateUrl: './form-template-driven.component.html',
  styleUrls: ['./form-template-driven.component.css'],
})
export class FormTemplateDrivenComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    celular: '',
  };
  salvar(form: NgForm) {
    if (form.valid) {
      console.log(this.cliente);
    }
  }
}
