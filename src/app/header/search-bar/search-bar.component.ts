import { Component } from '@angular/core';
import { posts } from '../../cities-page/city-page-container/data-posts';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  post: any;
  searchText: string = '';
  filteredPosts: any[] = [];

  filterPosts() {
    this.filteredPosts = this.searchText
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase())
        ) : [];
  }

  // Clears search bar text after a user clicks on a link which also removes the dropdown list
  clearSearchBar() {
    this.searchText = '';
  }

}
