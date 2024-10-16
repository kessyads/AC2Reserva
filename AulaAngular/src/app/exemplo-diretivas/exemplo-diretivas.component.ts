import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretivas',
  templateUrl: './exemplo-diretivas.component.html',
  styleUrls: ['./exemplo-diretivas.component.css'],
})
export class ExemploDiretivasComponent {
  mostrarAlunos: boolean = true;
  nomeAluno: string = '';
  alunos: any[] = [
    { ra: '123', nome: 'joão', curso: 'ADS' },
    { ra: '321', nome: 'José', curso: 'Jogos Digitais' },
    { ra: '333', nome: 'Maria', curso: 'ADS' },
    { ra: '444', nome: 'Carlos', curso: 'Jogos Digitais' },
  ];
}
