import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedOption: string = 'option1'; // Default selected option

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
