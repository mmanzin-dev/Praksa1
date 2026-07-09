import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
  // First you create HttpClient using inject()
  http = inject(HttpClient);

  // We will save API call result into the Signal list
  userList: WritableSignal<any[]> = signal([]);
  photosList: WritableSignal<any[]> = signal([]);
  busVendorList: WritableSignal<any[]> = signal([]);

  // On page load, constructor will execute
  // This is before I knew about ngOnInit()
  constructor() {
    this.getAllUsers();
    this.getPhotos();
    this.getBusVendors();
  }

  // Secondly create the first API call
  getAllUsers() {
    // Give the API URL and then subscribe to it
    // Subscribe gives two calls
    // next is successful API call, error is failed API call
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next: (res: any) => {
        this.userList.set(res);
      },
      error: (err: any) => {

      }
    })
  }

  getPhotos() {
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe({
      next: (res: any) => {
        this.photosList.set(res);
      },
      error: (err: any) => {

      }
    })
  }

  getBusVendors() {
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next: (res: any) => {
        this.busVendorList.set(res);
      },
      error: (err: any) => {

      }
    })
  }
}
