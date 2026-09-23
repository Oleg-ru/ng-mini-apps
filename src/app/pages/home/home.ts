import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  @ViewChild('email') email!: ElementRef;

  getMessage() {
    return 'Home component works';
  }

  showMessage(event: Event) {
    console.log(event.target);
  }

  getValue(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  showName(value: string) {
    console.log('Value is ' + value);
  }

  focusInput() {
    this.email.nativeElement.focus();
  };
}
