import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../services/posts.service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent implements OnInit {
  // PostsService to retrieve all posts in the database and assigned to the private variable posts
  posts = this.postsService.getPosts();
  // Will be the result of the filtered post from the ngOnInit() method
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    // Subscribe to changes in the URL route parameters
    this.route.paramMap.subscribe((params) => {
      // Retrieve the ID value from the URL route and assign it to paramId
      let paramId: string = params.get('id') || '';
      // Filter the post object in the posts array that matches the ID parameter
      this.post = this.posts.find((post) => {
        return post.id === parseInt(paramId);
      });
    });
  }
}
