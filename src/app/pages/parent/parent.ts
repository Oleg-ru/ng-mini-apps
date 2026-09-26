import { Component, computed, effect, signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  imports: [Child],
  selector: 'app-parent',
  styleUrl: './parent.css',
  templateUrl: './parent.html',
})
export class Parent {
  userNameParent = 'Angular22_signal';

  quantity = signal(1);

  constructor() {
    effect(() => {
      console.log('Quantity updated in Parent: ' + this.quantity());

    });
  }

  handlerSave(str: string) {
    console.log('Saved event occur from child component: ' + str);
  }
}
