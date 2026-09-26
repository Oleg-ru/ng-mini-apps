import { Component, input, model, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  userName = input('-');
  saved = output<string>();

  quantityChild = model(2);

  increase() {
    this.quantityChild.set(this.quantityChild() + 1);
  }

  onSave() {
    this.saved.emit('🧒');
  }
}
