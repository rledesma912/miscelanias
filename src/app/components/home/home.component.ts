import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p class="local">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <app-ng-style></app-ng-style>
  <app-css></app-css>
  <app-clases></app-clases>
  <app-directivas></app-directivas>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
