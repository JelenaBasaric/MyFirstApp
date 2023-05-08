import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './alertC/alert.component';
import { AlertComponents } from './alertsC/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AlertComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
