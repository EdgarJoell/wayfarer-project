import { Injectable } from '@angular/core';
import { posts } from '../cities-page/city-page-container/data-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // copy the values of our posts objects in our database and assign it to the private value of posts within an array
  private posts = [ ...posts ];

  constructor() { }

  // returns all posts
  getPosts(): any[] {
    return this.posts
  }

  // adds a post object to the end of the private posts array
  addPost(post: any): void {
    this.posts.push(post)
  }
}
