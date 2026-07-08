import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  productName: string = "Product1";
  productPrice: number = 399;
  maxAllowedChar: number = 5;
  dynamicType: string = "checkbox";
  isProductActive: boolean = true;

  showAlert() {
    alert("Angular 22 Alert");
  }

  onDropdownChange() {
    alert("Dropdown has changed");
  }

  onMouseEnter() {
    console.log("Mouse has entered the circle");
  }

  onMouseLeave() {
    console.log("Mouse has left the circle");
  }
}
