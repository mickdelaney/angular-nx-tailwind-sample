import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elevate-nx-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
