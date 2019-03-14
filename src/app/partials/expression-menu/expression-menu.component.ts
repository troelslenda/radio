import { Component, OnInit } from '@angular/core';
import { ExpressionService } from 'src/app/service/expression.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-expression-menu',
  templateUrl: './expression-menu.component.html',
  styleUrls: ['./expression-menu.component.scss']
})
export class ExpressionMenuComponent implements OnInit {

  displayName: string;

  constructor(private expressionService: ExpressionService, auth: AuthService) {
    auth.user.subscribe(user => this.displayName = user.displayName);
  }

  broadcastExpresion(expression) {
    console.log(expression)
  }

  ngOnInit() {
    this.expressionService.getLastExpression().subscribe(res =>
      res[0] && this.broadcastExpresion(res[0].payload.val())
    );
  }
  express(expression: string): void {
    console.log(expression);
    this.expressionService.submitExpression(expression, this.displayName);
  }

}
