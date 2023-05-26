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
    username: '',
    userImage: '',
    title: '',
    desc: '',
  };

  postData = { ...this.formData }

  constructor() {}

  // make an interface?
  submitForm(formData: NgForm):void {
    // assign the ID to the current page

    console.log(formData?.value)
    console.log(this.postData)
    this.postData = formData?.value;
  }
}
