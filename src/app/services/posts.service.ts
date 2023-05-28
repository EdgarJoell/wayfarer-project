import { Injectable } from '@angular/core';
import { posts } from '../cities-page/city-page-container/data-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts = [ ...posts ];

  constructor() { }

  getPosts(): any[] {
    return this.posts
  }

  addPost(post: any): void {
    this.posts.push(post)
  }
}
