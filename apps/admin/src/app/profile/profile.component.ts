import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

/*

TODO: Animations

x-transition:enter="transform ease-out duration-300 transition"
x-transition:enter-start="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
x-transition:enter-end="translate-y-0 opacity-100 sm:translate-x-0"
x-transition:leave="transition ease-in duration-100"
x-transition:leave-start="opacity-100"
x-transition:leave-end="opacity-0"

*/


@Component({
  selector: 'elevate-nx-profile',
  templateUrl: './profile.component.html',
  animations:[
  trigger('createDestroyTrigger', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('100ms', style({
        'background-color':'red',
        opacity: 1
      })),
    ]),
    transition(':leave', [
      animate('100ms', style({
        opacity: 0
      }))
    ])
  ])
],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
