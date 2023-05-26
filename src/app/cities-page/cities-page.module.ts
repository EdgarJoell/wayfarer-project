import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities-list/cities.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityPageContainerComponent } from './city-page-container/city-page-container.component';
import { HeaderModule } from '../header/header.module';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    CityPageContainerComponent,
    PostsComponent,
  ],
  imports: [CommonModule, HeaderModule, AppRoutingModule],
  exports: [CitiesComponent, CityInfoComponent, CityPageContainerComponent],
})
export class CitiesPageModule {}
