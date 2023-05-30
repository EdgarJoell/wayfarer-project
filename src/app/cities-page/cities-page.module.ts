import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities-list/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityPageContainerComponent } from './city-page-container/city-page-container.component';
import { HeaderModule } from '../header/header.module';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommentContainerComponent } from './posts/comment-container/comment-container.component';
import { FormsModule } from '@angular/forms';
import { PostPageComponent } from './posts/post-page/post-page.component';
import { PostsService } from '../services/posts.service';
import { CitiesService } from '../services/cities.service';
import { WeatherWidgetComponent } from './weather/weather-widget/weather-widget.component';
import { WeatherService } from '../services/weather.service';
import { ATagsDirective } from '../directives/a-tags.directive';

@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    CityPageContainerComponent,
    PostsComponent,
    CommentContainerComponent,
    PostPageComponent,
    WeatherWidgetComponent,
    ATagsDirective,
  ],
  providers: [PostsService, CitiesService, WeatherService],
  imports: [CommonModule, HeaderModule, AppRoutingModule, FormsModule],
  exports: [CitiesComponent, CityInfoComponent, CityPageContainerComponent, PostsComponent, CommentContainerComponent, PostPageComponent, WeatherWidgetComponent],
})
export class CitiesPageModule {}
