import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { posts } from '../../city-page-container/data-posts';

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
  };

  constructor(private activeRoute: ActivatedRoute) {}

  // make an interface?
  submitForm(formData: NgForm): void {
    // assign the ID to the current page
    this.formData.id = posts[posts.length - 1].id += 1;

    this.formData = { ...formData };
    console.log(this.formData);
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.formData.postId = posts.find((post) => {
        let paramId: string = params.get('id') || '';
        return post.id === parseInt(paramId);
      })?.id;
    });
  }
}
