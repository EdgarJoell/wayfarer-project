import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { posts } from '../../city-page-container/data-posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css'],
})
export class CommentContainerComponent implements OnInit {
  posts = posts;
  formData: any = {
    id: '',
    postId: '',
    username: '',
    userImage: '',
    title: '',
    desc: '',
    createdAt: new Date().toLocaleDateString()
  };

  constructor(private activeRoute: ActivatedRoute, private postService: PostsService) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.formData.postId = posts.find((post) => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId);
      })?.id;
    });
  }

  submitForm(formData: NgForm): void {
    this.formData.id = posts[posts.length - 1].id += 1;
    this.formData = { ...formData };
    this.postService.addPost(this.formData)
  }
}
