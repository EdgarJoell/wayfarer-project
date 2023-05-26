import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapOptions } from '@angular/core';
// import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SplashPageModule } from './splash-page/splash-page.module';
import { AppRoutingModule } from './app-routing.module';
import { CitiesPageModule } from './cities-page/cities-page.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SplashPageModule,
    CitiesPageModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
