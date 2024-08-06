import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFacadeService } from '../domain/cart.facade';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartFacade = inject(CartFacadeService);
  cart$ = this.cartFacade.getState();
  constructor(){
    this.cartFacade.dispatch({type:'x', payload: [1,2,3]})
  }
}
