import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { posts } from 'src/app/cities-page/city-page-container/data-posts';

// import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
// import { SearchService } from 'src/app/services/search.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  posts = this.postService.getPosts();
  post: any;
  searchText: string = '';
  filteredPosts: any[] = [];

  constructor(
    private postService: PostsService
    // private searchService: SearchService,
    // private http: HttpClient
  ) {}

  filterPosts() {
    this.filteredPosts = this.searchText
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        )
      : [];

    if (this.filteredPosts.length === 0) {
      this.filteredPosts.push({ title: 'No results' });
    }
    console.log(this.filteredPosts);
  }

  ngOnInit(): void {}
}

// ngOnInit(): void {
// this.searchSubject
//   .pipe(debounceTime(1000), distinctUntilChanged())
//   .subscribe((id) => {
//     this.searchService.getPostPageById(id).subscribe((res) => {
//       console.log(res);
//       this.post = res;
//     });
//   });
// }

// selectPost(post: any) {
//   console.log(post);
// }

// searchSubject = new Subject();
// searchQuery: string = '';
// isSearchActive: boolean=false;
// searchResults: any[] = [];
