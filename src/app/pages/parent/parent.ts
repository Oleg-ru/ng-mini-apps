import { Component, effect, inject, signal, viewChild } from '@angular/core';
import { Child } from '../child/child';
import { CartService } from '../../services/cart-service';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  childComponent = viewChild(Child);

  userNameParent = 'Angular22_signal';
  quantity = signal(1);
  cartService = inject(CartService);

  constructor() {
    effect(() => {
      console.log('Quantity updated in Parent: ' + this.quantity());

    });
  }

  handlerSave(str: string) {
    console.log('Saved event occur from child component: ' + str);
  }
}
