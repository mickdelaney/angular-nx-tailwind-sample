import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elevate-nx-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
