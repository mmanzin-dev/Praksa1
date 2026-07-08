import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
// Importing FormsModule will fix the NgModel model error about import
// since NgModel cant be imported by itself
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-example',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './directive-example.html',
  styleUrl: './directive-example.css',
})
export class DirectiveExample {
  divClassName: string = "";
  isChecked: boolean = false;
  inputText: string = "";
  isTextValid: boolean = false;
  inputColor: string = "";
  div4Css: any = {};

  changeDiv1Color(className: string) {
    this.divClassName = className;
  }

  checkCharLength() {
    if (this.inputText.length > 5) {
      this.isTextValid = false;
    } else {
      this.isTextValid = true;
    }
  }

  // Depending on passed parameter from .html file it will either pass circle css or square css
  changeType(type: string) {
    if (type == 'circle') {
      this.div4Css = {
        'background-color': 'red', // Its in quotes because it has hypen (-) in between property
        height: '100px',
        width: '100px',
        'border-radius': '50%' // Same thing
      }
    } else {
      this.div4Css = {
        'background-color': 'green', // Its in quotes because it has hypen (-) in between property
        height: '100px',
        width: '100px'
      }
    }
  }
}
