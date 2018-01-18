import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      &nbsp;css works!
    </p>
  `,
  styles: [`
    p {
      color:#fff;
      font-size: 12px;
      background-color: #999;
    }
`]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
