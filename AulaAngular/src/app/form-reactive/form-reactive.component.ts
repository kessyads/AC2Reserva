import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {
  form: FormGroup;

  constructor(){
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      celular: new FormControl('', [Validators.required, Validators.minLength(11)]),
    });
  }
salvar(){
  console.log(this.form.value);
}
}
