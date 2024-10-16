import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']

})
export class AlunoComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      ra: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      curso: new FormControl('', Validators.required),
      valor: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100000)]),
      dataMatricula: new FormControl(new Date().toISOString().substring(0, 10), Validators.required), 
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulário enviado com sucesso:', this.form.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
