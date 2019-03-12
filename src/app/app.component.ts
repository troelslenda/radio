import { Component } from '@angular/core';
import { AudioService } from './service/audio.service';
import { InfoService } from './service/info.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  programInfo: Observable<any>;

  constructor(public audio: AudioService, private info: InfoService) {

    this.programInfo = info.getInfo();
    this.programInfo.subscribe(res => {
      console.log(res);
    });
  }

  toggleRadio() {
    if (this.audio.isMuted) {
      this.audio.unMute();
    } else {
      this.audio.Mute();
    }
  }
}
