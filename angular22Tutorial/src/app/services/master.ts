import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

// Services are for boilerplate/repeated code/code that should NOT be in components
@Service()
export class Master {
    loggedUser: string = "";

    http = inject(HttpClient);

    getFormattedCardNo(cardNo: string) {
        const hiddenCardNo = "**** **** ****";
        return hiddenCardNo + " " + cardNo.substring(12);
    }

    // We should move all API calls into a service
    // Components should only have code that changes the DOM (the web page)
    // API does NOT do that and only fetches/sends the data
    getClients() {
        // We dont do subscribe in service we just call the API and do a return
        return this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients");
    }

    saveClient(obj: any) {
        return this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", obj);
    }
}
