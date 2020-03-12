import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HeadingComponent } from './heading/heading.component';
import { ButtonComponent } from './button/button.component';

const components = [
  ShellComponent,
  HeadingComponent,
  ButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class WebUiModule {}
