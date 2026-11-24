import { Component, signal } from '@angular/core';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { async } from 'rxjs';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-angular-forms',
  styleUrl: './angular-forms.css',
  templateUrl: './angular-forms.html',
})
export class AngularForms {
  ProfileModel = signal({
    name: '',
    email: '',
    password: '',
  });
  profileForm = form(
    this.ProfileModel,
    (shemaPath) => {
      required(shemaPath.name, {
        message: 'Name is required',
      });
      required(shemaPath.email, {
        message: 'Email is required',
      });
      required(shemaPath.password, {
        message: 'Password is required',
      });
      email(shemaPath.email, {
        message: 'Please enter a valid email',
      });
      minLength(shemaPath.password, 6, {
        message: 'Password must be at least 6 characters',
      });
    },
    {
      submission: {
        action: async (field) => {
          console.log('Form Data: ', field().value());
          alert('Registration successful! 😊');
        },
      },
    },
  );
}
