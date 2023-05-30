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
import { ContactPageModule } from './contact-page/contact-page.module';
import { PostsService } from './services/posts.service';
import { WeatherService } from './services/weather.service';
import { ATagsDirective } from './directives/a-tags.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SplashPageModule,
    CitiesPageModule,
    AppRoutingModule,
    HttpClientModule,
    ContactPageModule
  ],
  providers: [SearchService, PostsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
