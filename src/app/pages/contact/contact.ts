import { Component, inject, signal } from '@angular/core';
import { PostService } from '../../services/post-service';
import { Post } from '../../models/post';
import { httpResource } from '@angular/common/http';

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
    // this.loadPosts();
  }

  postResource = httpResource<Post[]>(() => this.postService.apiUrl);

  loadPosts() {
    this.postResource.reload()
    // this.postService.getPosts().subscribe((data) => this.posts.set(data));
  }


  createPost() {
    const newPost = {
      userId: 9,
      title: 'Test title',
      body: 'Test body',
    };

    this.postService.addPost(newPost).subscribe((data) => {
      this.postResource.update((posts) => [...(posts ?? []), data]);
    });
  }
}
