import { Component, OnInit } from '@angular/core';
import { ExpressionService } from 'src/app/service/expression.service';
import { AuthService } from 'src/app/service/auth.service';
import { fromEvent } from 'rxjs';
import { AudioService } from 'src/app/service/audio.service';

@Component({
  selector: 'app-expression-menu',
  templateUrl: './expression-menu.component.html',
  styleUrls: ['./expression-menu.component.scss']
})
export class ExpressionMenuComponent implements OnInit {

  displayName: string;

  constructor(private expressionService: ExpressionService, auth: AuthService, private audio: AudioService) {
    auth.user.subscribe(user => this.displayName = user.displayName);
  }

  broadcastExpresion(expression) {
    console.log(expression)
    this.audio.halfMute();
    const sound = new Audio(`/assets/${expression.expression}.mp3`);
    sound.play();
    fromEvent(sound, 'ended').subscribe(res =>{
      this.audio.unMute();
    });
  }

  ngOnInit() {
    this.expressionService.getLastExpression().subscribe(res =>
      res[0] && this.broadcastExpresion(res[0].payload.val())
    );
  }


  express(expression: string, e): void {
    this.expressionService.submitExpression(expression, this.displayName);
  }

}
