import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  imports: [SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  burzum = "app";
}
