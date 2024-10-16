import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent {
  numero1: number = 5;
  numero2: number = 6;
  resultado: number = 0;
  caminhoImagem: string =
    'https://facens.br/wp-content/uploads/2021/03/logo-f.png';

  somar() {
    this.resultado = this.numero1 + this.numero2;
  }
  subtrair() {
    this.resultado = this.numero1 - this.numero2;
  }
}
