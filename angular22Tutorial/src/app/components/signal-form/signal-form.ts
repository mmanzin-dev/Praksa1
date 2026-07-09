import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  // Specify the model for the form
  employeeModel = signal({
    empName: '',
    empCity: '',
    empState: ''
  });

  // Pass that model to Signal form
  // Validation specification is done here as well
  employeeForm = form(this.employeeModel, schema => {
    required(schema.empName, {message: 'Name is required'}),
    minLength(schema.empName, 3, {message: 'Minimum 3 characters'})
    required(schema.empCity, {message: 'City is required'}),
    minLength(schema.empCity, 3, {message: 'Minimum 3 characters'}),
    required(schema.empState, {message: 'State is required'})
  });

  onSaveEmp() {
    const formValue = this.employeeForm().value();
    debugger;
  }
}
