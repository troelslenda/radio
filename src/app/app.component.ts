import { Component } from '@angular/core';
import { AudioService } from './service/audio.service';
import { InfoService } from './service/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  RadioProgramTitle: string;

  constructor(private audio: AudioService, private info: InfoService) {

    info.getInfo().subscribe(res => {
      console.log(res);
      this.RadioProgramTitle = res.title;
    })
  }

  toggleRadio() {
    if (this.audio.isMuted) {
      this.audio.unMute();
    } else {
      this.audio.Mute();
    }
  }
}
