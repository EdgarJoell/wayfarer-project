import { Component } from '@angular/core';
import { cities } from '../city-page-container/data-cities';
import { posts } from '../city-page-container/data-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  cities = cities;
  posts = posts;
}
