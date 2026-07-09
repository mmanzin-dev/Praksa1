import { Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  // Reactive Form using FormGroup
  userForm: FormGroup = new FormGroup ({
    userId: new FormControl(0),
    userName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    fullName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  // Reactive Form using FormBuilder service
  // Services are injected, constructor was the old way
  formBuilder = inject(FormBuilder)
  // We use ! to NOT initialize here
  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      // Specify the FormControls
      studId: [0],
      studName: ['', Validators.required, Validators.minLength(2)],
      city: ['']
    })
  }

  onSaveCustomer() {
    if (this.userForm.invalid) {
      alert('Form is not valid');
    } else {
      confirm('Do you want to save?');
      const formValue = this.userForm.value;
    }
  }
}
