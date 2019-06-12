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

  user;
  displayName: string;

  constructor(private expressionService: ExpressionService, auth: AuthService, private audio: AudioService) {
    auth.user.subscribe(user => this.user = user);
  }

  getSoundFileName(expression) {
    switch (expression) {
      case '😂':
        return 'lol';
      case '🤯':
        return 'explode';
      case '💩':
        return 'fart';
      case '🏎':
        return 'racecar';
    }
  }

  broadcastExpresion(expression) {
    const interfere = !this.audio.isMuted;
    if (interfere) {
      this.audio.halfMute();
    }

    const sound = new Audio(`/assets/${this.getSoundFileName(expression.expression)}.mp3`);
    sound.play();
    fromEvent(sound, 'ended').subscribe(res => {
      if (interfere) {
        this.audio.unMute();
      }
    });
  }

  ngOnInit() {
    this.expressionService.getExpressions().subscribe(res => {
        const last: any = res.pop();
        // If last expression is sent less than a second ago.
        if (new Date().getTime() - 1000 < last.createdAt) {
          this.broadcastExpresion(last);
        }
      }
    );
  }


  express(e): void {
    this.expressionService.submitExpression(e.target.innerHTML, this.user);
  }

}
