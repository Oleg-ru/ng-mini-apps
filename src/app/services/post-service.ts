import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';

@Service()
export class PostService {
  private http = inject(HttpClient);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  //GET
  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}?_limit=5`);
  }

  //POST
  addPost(post: Omit<Post, 'id'>) {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
