import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';

@Component({
  imports: [RouterOutlet, User, DataBinding, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-mini-apps');
}
