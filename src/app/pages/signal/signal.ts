import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-signal',
  styleUrl: './signal.css',
  templateUrl: './signal.html',
})
export class Signal {
  count = signal(0);

  price = signal(0);
  quantity = signal(2);

  total = computed(() => {
    return this.price() + this.quantity();
  });

  isLight = signal(true);
  constructor() {
    effect(() => {
      localStorage.setItem('theme', this.isLight() ? 'light' : 'dark');
    });
  }

  readonlyCount = this.count.asReadonly();

  //count methods
  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.update((prev) => prev - 1);
  }

  reset() {
    this.count.set(0);
  }
}
