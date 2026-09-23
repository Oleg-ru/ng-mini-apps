import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signal',
  styleUrl: './signal.css',
  templateUrl: './signal.html',
})
export class Signal {
  count = signal(0);

  increment() {
    this.count.set(this.count() + 1)
  }

  decrement() {
    this.count.update(prev => prev - 1);
  }

  reset() {
    this.count.set(0);
  }
}
