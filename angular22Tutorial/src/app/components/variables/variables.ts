import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  studentName: string = "Prvi student";
  rollNo: number = 1;
  isStudentActive: boolean = false;
  currentDate: Date = new Date()

  teacherName = "Profesor";
  
  cityList: string[] = ["Zagreb", "Bjelovar", "Osijek"];
  rollNoList: number[] = [12, 13, 14, 15, 16];

  // object
  student = {
    studName: 'Student1',
    rollNo: 16,
    city: 'Zagreb'
  };

  // array of objects
  studentList = [
    { studName: 'Student10', rollNo: 20, city: 'Bjelovar' },
    { studName: 'Student120', rollNo: 120, city: 'Rijeka' },
    { studName: 'Student220', rollNo: 220, city: 'Split'}
  ]

  // any type - dynamic type of data
  // do NOT use 'any' type
  employee: any = "Tekst je pun slova"

  constructor() {
    console.log(this.studentName);
    console.log(this.studentList);
    console.log(this.studentList[2]);

    this.studentName = "Drugi student";
    console.log("Izmjena: " + this.studentName);

    console.log("Any type, employee: " + this.employee);
    this.employee = 12345;
    console.log("Any number promjena: " + this.employee);
    this.employee = true;
    console.log("Any boolean promjena: " + this.employee);
    this.employee = ['indexArr0', 'indexArr1', 'indexArr2'];
    console.log("Any array promjena: " + this.employee);
    console.log("Any array index 1: " + this.employee[1]);
  }
}
