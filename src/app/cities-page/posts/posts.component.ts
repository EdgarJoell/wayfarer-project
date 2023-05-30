import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  // PostsService to retrieve all posts in the database and assigned to the private variable posts
  posts = this.postService.getPosts();
  // Will be the result of the filtered posts from the ngOnInit() method
  postsArr: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  /**
   * Upon initialization when a post is selected, the post's comments are loaded. The id is grabbed the the paramMap.subscribe call, and compared with the posts database to check for a matching post ID.
   */
  ngOnInit(): void {
    // Subscribe to changes in the URL route parameters
    this.route.paramMap.subscribe((params) => {
      // Retrieve the ID value from the URL route parameters and assign it to cityId
      let cityId: string = params.get('id') || '';
      // Filter the posts array based on the postId matching the cityId value
      this.postsArr = this.posts.filter(
        (post) => post.postId === parseInt(cityId)
      );
    });
  }
}
