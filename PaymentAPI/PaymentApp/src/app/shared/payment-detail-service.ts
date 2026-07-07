import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Service()
export class PaymentDetailService {
    // HttpClient for API fetch
    // Constructor DI was replaced by inject()
    private http = inject(HttpClient)
    url: string = environment.apiBaseUrl + '/PaymentDetail'
    list: PaymentDetail[] = [];
    // Payment Detail Form
    formData: PaymentDetail = new PaymentDetail();
    // Bool to check if form was submitted
    formSubmitted: boolean = false;

    refreshList() {
        this.http.get(this.url)
        .subscribe({
            next: res => {this.list = res as PaymentDetail[]},
            error: err => {console.log(err)}
        })
    }

    postPaymentDetail() {
        return this.http.post(this.url, this.formData)
    }

    resetForm(form:NgForm) {
        form.form.reset()
        this.formData = new PaymentDetail()
        this.formSubmitted = false
    }
}
