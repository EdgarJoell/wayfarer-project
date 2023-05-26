import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  getPostPageById(id: any) {
    return this.http.get(
      `http://localhost:4200/posts/${id}`
    )
  }
}
