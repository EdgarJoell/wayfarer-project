import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { posts } from '../city-page-container/data-posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts = this.postService.getPosts();
  city: any;
  postArr: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      let cityId: string = params.get('id') || '';
      this.postArr = this.posts.filter((post) => post.postId === parseInt(cityId));
    });
  }
}
