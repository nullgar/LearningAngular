import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { MerryChristmasComponent } from './merry-christmas/merry-christmas.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MerryChristmasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
