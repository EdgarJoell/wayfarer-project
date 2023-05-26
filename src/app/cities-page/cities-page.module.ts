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

@NgModule({
  declarations: [
    CitiesComponent,
    CityInfoComponent,
    CityPageContainerComponent,
    PostsComponent,
    CommentContainerComponent
  ],
  imports: [CommonModule, HeaderModule, AppRoutingModule, FormsModule],
  exports: [CitiesComponent, CityInfoComponent, CityPageContainerComponent, PostsComponent, CommentContainerComponent],
})
export class CitiesPageModule {}
