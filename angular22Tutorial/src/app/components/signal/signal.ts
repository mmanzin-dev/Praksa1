import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // Nowadays Angular apps are zoneless meaning no zone.js file
  // With removal of zone.js in some cases the UI wont update instantly if variable is changed
  // Therefore you have to use Signal as replacement for zone.js to get instant UI updates
  employeeName: string = "Andrei";
  // Signal is a parallel way to store data, its a data type
  empMobileNo = signal("0981221255");
  // Hover over empMobileNo and you can see its a WritableSignal
  isActive: WritableSignal<boolean> = signal(false);
  cityListSignal: WritableSignal<string[]> = signal(['Zagreb', 'Bjelovar', 'Rijeka']);

  // UI zone.js vs Singal example
  constructor() {
    // First example, UI doesnt update on value change
    /*
    setTimeout(() => {
      debugger;
      this.employeeName = "Andrei Novi"
    }, 2000);
    */

    // Second example, UI updates instantly on value change
    /*
    setTimeout(() => {
      debugger;
      this.empMobileNo.set("0955551255")
    }, 2000);
    */
  }

  changeEmpName() {
    this.employeeName = "Plenkovich";
  }

  // To change signal value, use .set function0
  changeMobile() {
    this.empMobileNo.set("0912225555");
  }
}
