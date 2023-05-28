import { Component, OnInit } from '@angular/core';
// import { posts } from 'src/app/cities-page/city-page-container/data-posts';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  id: string = ''
  post: any;
  posts = this.postService.getPosts();
  searchResults: any[] = [];
  searchSubject = new Subject();

  constructor(private searchService: SearchService, private postService: PostsService) {}



  findPostId(id: any) {
  this.searchResults = [];

    if(id){
      this.searchResults = this.posts.filter(post => post.id === parseInt(id))
    }
  }

  ngOnInit(): void {
    this.searchSubject
    .pipe(debounceTime(1000), distinctUntilChanged())
    .subscribe((id) => {
      this.searchService.getPostPageById(id)
      .subscribe((res) => {
        console.log(res);
        this.post = res;
      })
    })
  }
}
