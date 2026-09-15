import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [JsonPipe],
  selector: 'app-data-binding',
  styleUrl: './data-binding.css',
  templateUrl: './data-binding.html',
})
export class DataBinding {
  name = 'Hello from Angular 22';
  topic = '4 type of data binding';
  data = {
    name: 'Хазик',
    age: 11,
    sex: 'male',
  };

  onSubmitClick() {
    alert('Click button on Submit');
  }

  onCountryChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    alert(selectElement.value);
  }
}
