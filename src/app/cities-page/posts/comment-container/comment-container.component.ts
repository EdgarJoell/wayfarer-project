import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { posts } from '../../city-page-container/data-posts';


@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.css']
})
export class CommentContainerComponent {
  posts = posts;
  formData: any = {
    id: '',
    //postId: set to paramID
    username: '',
    userImage: '',
    title: '',
    desc: '',
  };

  constructor() {}

  // make an interface?
  submitForm(formData: NgForm):void {
    // assign the ID to the current page
    this.formData.id = posts[posts.length -1].id += 1
    this.formData = { ...formData };
    console.log(this.formData);
  }
}
