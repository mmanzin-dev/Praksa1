import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Service()
export class PaymentDetail {
    // HttpClient for API fetch
    // Constructor DI was replaced by inject()
    private http = inject(HttpClient)
    url: string = environment.apiBaseUrl + '/PaymentDetail'

    refreshList() {
        this.http.get(this.url)
        .subscribe({
            next: res => {console.log(res)},
            error: err => {console.log(err)}
        })
    }
}
