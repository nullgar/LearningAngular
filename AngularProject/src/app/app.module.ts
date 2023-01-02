import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MerryChristmasComponent } from './merry-christmas/merry-christmas.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MerryChristmasComponent,
    WarningAlert,
    SuccessAlertComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
