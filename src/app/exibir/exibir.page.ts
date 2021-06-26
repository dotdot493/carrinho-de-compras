import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';//new

@Component({
  selector: 'app-exibir',
  templateUrl: './exibir.page.html',
  styleUrls: ['./exibir.page.scss'],
})
export class ExibirPage{

  lista: any = [];

  constructor(public http: HttpClient) {
      this.escreveDados();
   }

   escreveDados(){
    this.http.get("https://coberturaeconimicsolar.000webhostapp.com/ionic/jsonleitura.php").subscribe( data =>{
      this.lista = data;
      //console.log(data); 
    })
  }

}

