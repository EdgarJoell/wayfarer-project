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
    //postId: set to paramID
    username: '',
    userImage: '',
    title: '',
    desc: '',
  };

  constructor() {}

  // make an interface?
  submitForm(formData: NgForm):void {
    console.log(formData.value)
    // assign the ID to the current page
    
    this.formData = { ...formData }
    console.log("FORM DATA", this.formData)
  }
}
