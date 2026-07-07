import { Component, inject } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail-service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule],
  templateUrl: './payment-detail-form.html',
  styles: ``,
})
export class PaymentDetailForm {
  public service = inject(PaymentDetailService)
  toastr = inject(ToastrService);

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      this.service.postPaymentDetail()
      .subscribe({
        next:res => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success('Insert successful', 'Payment Detail Register');
        },
        error:err => {console.log(err)}
      })
    }
  }
}