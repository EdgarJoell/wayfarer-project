import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';

import { SplashPageModule } from './splash-page/splash-page.module';
import { AppRoutingModule } from './app-routing.module';
import { CitiesPageModule } from './cities-page/cities-page.module';
import { SearchService } from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { PostsService } from './services/posts.service';
import { WeatherService } from './services/weather.service';


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
    HttpClientModule,
  ],
  providers: [SearchService, PostsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
