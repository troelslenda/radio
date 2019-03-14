import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  now: Date;
  @Input() start: Date;
  @Input() end: Date;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
}
