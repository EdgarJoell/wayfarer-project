import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cities } from '../city-page-container/data-cities';
import { posts } from '../city-page-container/data-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  cities = cities;
  posts = posts;
  post: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.post = posts.find(post => {
          let paramId: string = params.get('id') || ''
          return post.postId === parseInt(paramId);
        })
      })
  }
}
