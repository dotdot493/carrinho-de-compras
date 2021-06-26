import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  //-----------função dobrar---------------//
  desconto: number=0;
  formulario: any = {valor: ''};
  //formulario: any={valor:'', parcela1:''  , parcela2: '' };
  dobrar(){
    this.desconto=this.formulario.valor*0.7;
  }
  

}
