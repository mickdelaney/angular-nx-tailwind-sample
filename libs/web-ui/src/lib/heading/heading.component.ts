import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'elevate-nx-heading',
  templateUrl: './heading.component.html',
  animations:[
    trigger('signal', [
      state('go', style({
        'background-color':'green',
        'height':'100px'
      })),
      state('stop', style({
        'background-color':'red',
        'height':'50px'
      })),
      transition('* => *', animate(500))
    ])
  ],
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  isOpen = false;

  signal = 'go';

  constructor() {
  }

  ngOnInit() {
  }

  onGoClick(){
    this.signal = 'go';
  }

  onStopClick(){
    this.signal = 'stop';
  }

  onToggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
