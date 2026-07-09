import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDiv1Visible: boolean = true;
  isOffer: boolean = false;
  orderStatus: string = "gone";

  cityList = ["Zagreb", "Bjelovar", "Osijek", "Rijeka", "Dubrovnik"];

  // Service injection
  masterSrv = inject(Master)

  studentList = [
    {studId: 9090, name: 'abc', city: 'gradA', rollNo: 120},
    {studId: 9091, name: 'efg', city: 'gradB', rollNo: 121},
    {studId: 9092, name: 'ijk', city: 'gradC', rollNo: 122},
    {studId: 9093, name: 'lmn', city: 'gradD', rollNo: 123},
    {studId: 9090, name: 'abc', city: 'gradA', rollNo: 120},
    {studId: 9091, name: 'efg', city: 'gradB', rollNo: 121},
    {studId: 9092, name: 'ijk', city: 'gradC', rollNo: 122},
    {studId: 9093, name: 'lmn', city: 'gradD', rollNo: 123}
  ]

  selectedStudent = "";

  toggleDiv1() {
    this.isDiv1Visible = !this.isDiv1Visible;
  }

  // Service injection tutorial
  storeLoggedData() {
    this.masterSrv.loggedUser = "servis_injekcija";
  }

  // Service tutorial
  originalCardNo = "1111222233334444";
  formattedCardNo: string = "";

  constructor() {
    this.formattedCardNo = this.masterSrv.getFormattedCardNo(this.originalCardNo);
  }
}
