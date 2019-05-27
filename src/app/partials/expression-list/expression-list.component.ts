import { Component, OnInit } from '@angular/core';
import { ExpressionService } from 'src/app/service/expression.service';
import {
  trigger,
  transition,
  style,
  animate,
  group
} from '@angular/animations';

@Component({
  selector: 'app-expression-list',
  templateUrl: './expression-list.component.html',
  styleUrls: ['./expression-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0, height: '0px' }), // initial
        animate(
          '0.3s', // "0.6s cubic-bezier(.27,.84,.46,.97)",
          style({ transform: 'scale(1.0)', opacity: 1, height: '72px' })
        ), // final

      ]),

    ])
  ]
})
export class ExpressionListComponent implements OnInit {
  expressions;
  constructor(private expressionService: ExpressionService) { }

  trackFbObjects = (idx, obj) => obj.$key;

  ngOnInit() {
    this.expressions = this.expressionService.getExpressions();
  }

  express(who, what, when) {
    switch (what) {
      case '😂':
        return `${who} laughed out loud ${when}`;
      case '🤯':
        return `${who}'s head exploded ${when}!`;
      case '💩':
        return `${who} farted ${when}`;
      case '🏎':
        return `${who} made a racecar sound ${when}`;
    }
  }
}
