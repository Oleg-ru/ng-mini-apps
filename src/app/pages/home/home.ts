import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  getMessage() {
    return 'Home component works';
  }

  showMessage(event: Event) {
    console.log(event.target);
  };

  getValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
