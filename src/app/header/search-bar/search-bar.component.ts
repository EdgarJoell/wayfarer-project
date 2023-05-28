import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { PostsService } from 'src/app/services/posts.service';
import { HttpClient } from '@angular/common/http';
import { posts } from 'src/app/cities-page/city-page-container/data-posts';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // id: string = ''
  searchResults: any[] = [];
  searchSubject = new Subject();
  post: any;

  searchQuery: string = '';
  posts = this.postService.getPosts();

  searchText: string = '';
  filteredPosts: any[] = [];

  constructor(
    private searchService: SearchService,
    private postService: PostsService,
    private http: HttpClient
  ) {}

  filterPosts() {
    this.filteredPosts = this.searchText
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        )
      : [];
      console.log(this.filteredPosts);
  }

  selectPost(post: any) {
    // Do something with the selected post
    console.log(post);
  }

  // findPostId(id: any) {
  // this.searchResults = [];

  //   if(id){
  //     this.searchResults = this.posts.filter(post => post.id === parseInt(id))
  //   }
  // }

  // searchPosts() {
  //   const url = `https://localhost:4200/posts?title=${this.searchQuery}`;
  //   this.http.get<any[]>(url).subscribe((data) => {
  //     this.posts = data;
  //     console.log(this.posts);
  //   });
  // }

  ngOnInit(): void {
    this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((id) => {
        this.searchService.getPostPageById(id).subscribe((res) => {
          console.log(res);
          this.post = res;
        });
      });
  }
}
