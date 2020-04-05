import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elevate-nx-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isOpen = false;

  constructor() {
  }

  ngOnInit() {
  }

  onToggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
