import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  userName = input('-');
  saved = output<string>();

  onSave() {
    this.saved.emit('🧒');
  }
}
