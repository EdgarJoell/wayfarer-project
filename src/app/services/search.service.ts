import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  // HTTP get request to the designated posts page and navigating to the specific page by using a post's ID
  getPostPageById(id: any) {
    return this.http.get(
      `http://localhost:4200/posts/${id}`
    )
  }
}
