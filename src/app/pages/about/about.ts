import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule, NgStyle, NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  isActive = true;
  textColor = 'green';

  isLoggedIn = false;
  users = ['Anton', 'Baton', 'Garden'];
  status = 'active';
}
