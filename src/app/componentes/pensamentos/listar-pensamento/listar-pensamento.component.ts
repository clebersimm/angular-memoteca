import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Aaaaangularrrrr  :)',
      autoria: 'Eu',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Angular 2',
      autoria: 'Eu',
      modelo: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
