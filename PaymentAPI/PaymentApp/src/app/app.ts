import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetails } from "./payment-details/payment-details";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaymentDetails],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('PaymentApp');
}
