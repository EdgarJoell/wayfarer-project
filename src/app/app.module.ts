import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapOptions } from '@angular/core';
// import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { DisplayModule } from './display/display.module';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeButtonComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    DisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
