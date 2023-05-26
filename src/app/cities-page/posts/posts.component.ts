import { Component } from '@angular/core';
import { cities } from '../city-info/cities';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  cities = cities;
}
