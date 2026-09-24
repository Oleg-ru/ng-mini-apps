import { computed, effect, Service, signal } from '@angular/core';

@Service()
export class CartService {
  private price = signal(40);
  private quantity = signal(2);

  public total = computed(() => {
    return this.price() * this.quantity();
  });

  public readonlyQuantity = this.quantity.asReadonly();

  constructor() {
    effect(() => {
      localStorage.setItem('cart-total', this.total().toString());
    });
  }

  public increaseQuantity() {
    this.quantity.update(prev => prev + 1);
  }

  public changePrice(price: number) {
    this.price.set(price);
  }
}
