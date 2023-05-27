import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { posts } from '../../city-page-container/data-posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit{
  posts = this.postService.getPosts();
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.post = this.posts.find(post => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId);
      })
    })
  }
}
