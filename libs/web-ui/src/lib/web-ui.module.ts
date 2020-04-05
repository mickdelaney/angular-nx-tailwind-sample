import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HeadingComponent } from './heading/heading.component';
import { ButtonComponent } from './button/button.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components = [
  ShellComponent,
  HeadingComponent,
  ButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ...components,
    SidebarComponent
  ],
  exports: [
    ...components
  ]
})
export class WebUiModule {}
