import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css'],
})
export class ClienteDetalheComponent implements OnInit {
  id: number = 0;
  constructor(public route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }
}
