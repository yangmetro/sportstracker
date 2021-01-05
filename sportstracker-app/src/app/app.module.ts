import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import * as SportsFeed from '../app/sports-feed/sports-feed.js'

import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { CalendarComponent } from './calendar/calendar.component';
const config: SocketIoConfig = { 
  url: 'http://localhost:4200', options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    SocketIoModule.forRoot(config),
    CalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
