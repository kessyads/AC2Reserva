import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reservaForm = this.fb.group({
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      numeroPassageiros: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      emailContato: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.reservaForm.valid) {
      console.log(this.reservaForm.value);
    } else {
      console.log("Formulário inválido");
    }
  }

  get f() {
    return this.reservaForm.controls;
  }
}
