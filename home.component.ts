import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  template: `Name:<input [(ngModel)]='name'><br>
  Entered name :{{name}}`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = '';
  constructor() { }

  ngOnInit() {
  }

}
