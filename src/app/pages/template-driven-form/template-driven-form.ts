import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../user';

@Component({
  imports: [FormsModule],
  selector: 'app-template-driven-form',
  styleUrl: './template-driven-form.css',
  templateUrl: './template-driven-form.html',
})
export class TemplateDrivenForm {
  iserObject: User = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }
}
