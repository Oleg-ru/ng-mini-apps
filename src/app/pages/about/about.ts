import { Component } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, FormsModule, NgStyle, NgIf, NgForOf],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  isActive = true;
  textColor = 'green';

  isLoggedIn = false;
  users = ['Anton', 'Baton', 'Garden'];
}
