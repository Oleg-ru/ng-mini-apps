import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../services/post-service';
import { Post } from '../../models/post';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private postService = inject(PostService);

  posts = signal<Post[]>([]);

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data) => this.posts.set(data));
  }
}
