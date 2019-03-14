import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private player;
  private streamUrl = 'http://live-icy.gss.dr.dk/A/A05H.mp3';

  constructor() {
    this.player = new Audio(this.streamUrl);
    this.player.play();
    this.player.volume = 1;
  }
  public unMute(): void {
    this.player.volume = 1;
  }
  public halfMute(): void {
    this.player.volume = 0.2;
  }
  public Mute(): void {
    this.player.volume = 0;
  }

  public get isMuted(): boolean {
    return !this.player.volume;
  }
}
