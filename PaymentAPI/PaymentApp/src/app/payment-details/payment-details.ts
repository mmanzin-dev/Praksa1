import { Component, inject, OnInit } from '@angular/core';
import { PaymentDetailForm } from "./payment-detail-form/payment-detail-form";
import { PaymentDetailService } from '../shared/payment-detail-service';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailForm],
  templateUrl: './payment-details.html',
  styles: ``,
})
export class PaymentDetails implements OnInit {
  // Inject of service
  // Old was using constructor
  public service = inject(PaymentDetailService)

  ngOnInit(): void {
    this.service.refreshList();
  }
}
