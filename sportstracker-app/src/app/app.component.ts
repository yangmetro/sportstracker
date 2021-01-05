import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportstracker-app';
  public minDate: Date = new Date ("01/01/2019");
  public maxDate: Date = new Date ("12/31/2021");
  public value: Date = new Date ("11/16/2019");
  constructor () {}
}
