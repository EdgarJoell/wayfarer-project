import { Component } from '@angular/core';
import { cities } from '../city-info/data-cities';
import { posts } from '../city-info/data-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  cities = cities;
  posts = posts;
}
