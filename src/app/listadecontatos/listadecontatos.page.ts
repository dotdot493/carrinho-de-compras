import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadecontatos',
  templateUrl: './listadecontatos.page.html',
  styleUrls: ['./listadecontatos.page.scss'],
})
export class ListadecontatosPage{
  contatos: any = []

  constructor() {
    this.contatos=[
      {
    "nome": "maria",
    "sobrenome": "Crivelli",
    "telefone": "32 9999-9999"
  },
  {
    "nome": "Marcia",
    "sobrenome": "Costa",
    "telefone": "32 9876-5432"
  },
  {
    "nome": "Marta",
    "sobrenome": "Carvalho",
    "telefone": "32 9999-8888"
  },
  {
    "nome": "Marta",
    "sobrenome": "Carvalho",
    "telefone": "32 9999-8888"
  },
  {
    "nome": "Isabel",
    "sobrenome": "Carvalho",
    "telefone": "32 9999-8888"
  },
  {
    "nome": "Mirian",
    "sobrenome": "Carvalho",
    "telefone": "32 9999-8888"
  },
  {
    "nome": "Marta",
    "sobrenome": "Carvalho",
    "telefone": "32 9999-8888"
  },
    ]
  }
}