import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-menu',
  templateUrl: './expression-menu.component.html',
  styleUrls: ['./expression-menu.component.scss']
})
export class ExpressionMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  express(expression: string): void {
    console.log(expression);
  }

}
