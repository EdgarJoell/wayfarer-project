import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
PostsService

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // Two-way binding with the search input
  searchBarText: string = '';
  // Holds filtered results
  filteredPosts: any[] = [];
  // PostsService to retrieve all posts in the database and assigned to the private variable posts
  private posts = this.postsService.getPosts()

  constructor(private postsService: PostsService) {}

  filterPosts() {
    // Assigns the filteredPosts array with the filtered results from the user's input made in the two-way binding through the searchBarText initializing
    this.filteredPosts = this.searchBarText
      ? // filter through the list of posts in our database and return search results by the title of the post from the searchBarText value
        this.posts.filter(
          (post) =>
            // compare the user's input values without worrying about what case is entered in the search box
            post.title.toLowerCase().includes(this.searchBarText.toLowerCase())
          // returns an empty array if there are no posts to filter through in the database
        )
      : [];
  }

  // Clears search bar text after a user clicks on a link which also removes the dropdown list
  clearSearchBar() {
    this.searchBarText = '';
  }
}
