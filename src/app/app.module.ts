import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SplashPageModule } from './splash-page/splash-page.module';
import { AppRoutingModule } from './app-routing.module';
import { CitiesPageModule } from './cities-page/cities-page.module';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SplashPageModule,
    CitiesPageModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
