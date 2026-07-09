import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  companyObj: any = {
    companyId: 0,
    companyName: '',
    pinCode: '',
    address: '',
    phone: ''
  };

  onSaveCompany(formRef: NgForm) {
    if (formRef.invalid) {
      alert("Provide all the required details")
    } else {
      confirm("Do you want to save?")
      const formValue = this.companyObj;
    }
  }

  onPinChange() {
    console.log("Pin Code changed")
  }
}
