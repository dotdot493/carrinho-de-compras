import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Lista de Contatos', url: '/listadecontatos', icon: 'call' },
    { title: 'Promoção', url: '/promocao', icon: 'paper-plane' },
    { title: 'Encomendas', url: '/contatos', icon: 'heart' },
    { title: 'Pedidos', url: '/pedidos', icon: 'cart' },
    { title: 'Lista de Produtos', url: '/exibir', icon: 'menu' },
    
  ];
 
}
