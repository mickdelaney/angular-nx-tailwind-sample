import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebUiModule } from '@elevate-nx/web-ui';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
