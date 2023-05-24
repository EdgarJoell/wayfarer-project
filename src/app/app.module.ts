import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapOptions } from '@angular/core';
// import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [
    AppComponent,
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
