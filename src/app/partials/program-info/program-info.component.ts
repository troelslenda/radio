import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-program-info',
  templateUrl: './program-info.component.html',
  styleUrls: ['./program-info.component.scss']
})
export class ProgramInfoComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
