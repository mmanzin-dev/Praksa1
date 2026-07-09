import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-crud',
  imports: [FormsModule],
  templateUrl: './client-crud.html',
  styleUrl: './client-crud.css',
})
export class ClientCrud {
  http = inject(HttpClient);

  clientList: WritableSignal<any[]> = signal([]);
  newClientObj: any = {
    clientId: 0,
    clientName: "",
    businessName: "",
    contactPerson: "",
    contactNo: "",
    altContactNo: "",
    email: "",
    createdDate: new Date(),
    logo: ""
  }

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients").subscribe({
      next: (res: any) => {
        // Based on response, the actual data is inside the data part of response
        this.clientList.set(res.data);
      },
      error: (res: any) => {

      }
    })
  }

  onSaveClient() {
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/AddClient", this.newClientObj).subscribe ({
      next: (res: any) => {
        if (res.result) {
          alert("POST successful");
          this.getAllClients();
        } else {
          alert("ERROR: " + res.message);
        }
      },
      error: (res: any) => {

      }
    })
  }

  onEdit(data: any) {
    this.newClientObj = data;
  }

  // Update is always PUT but this is a mistake from API creator
  onUpdateClient() {
    this.http.post("https://api.freeprojectapi.com/api/SmartParking/UpdateClient", this.newClientObj).subscribe ({
      next: (res: any) => {
        if (res.result) {
          alert("PUT successful");
          this.getAllClients();
        } else {
          alert("ERROR: " + res.message);
        }
      },
      error: (res: any) => {

      }
    })
  }

  // Delete is always DELETE but again this is mistake from API creator
  // We pass the id into query string and based on that id (PRIMARY KEY) it deletes the record
  onDelete(id: number) {
    const isConfirm = confirm("Do you want to delete this record?");
    if (isConfirm) {
      this.http.post("https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=" + id, {}).subscribe({
        next: (res: any) => {
          if (res.result) {
            alert("DELETE successful");
            this.getAllClients();
          } else {
            alert("ERROR: " + res.message);
          }
        },
        error: (res: any) => {

        }
      })
    }
  }
}
