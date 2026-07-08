import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Variables } from "./components/variables/variables";
import { DataBinding } from "./components/data-binding/data-binding";

@Component({
  selector: 'app-root',
  imports: [Variables, DataBinding, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular22Tutorial');
}
