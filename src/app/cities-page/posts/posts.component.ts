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
  posts = posts
  city: any;
  postArr: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      let cityId: string = params.get('id') || '';
      this.postArr = posts.filter((post) => post.postId === parseInt(cityId));
    });
  }
}
