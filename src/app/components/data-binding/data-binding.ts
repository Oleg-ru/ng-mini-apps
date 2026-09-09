import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name = 'Hello from Angular 22';
  topic = '4 type of data binding';
  onSubmitClick() {
    alert('Click button on Submit')
  };
}
