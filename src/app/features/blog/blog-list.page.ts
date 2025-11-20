import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogService, BlogPost } from '../../shared/blog.service';

@Component({
  standalone: true,
  selector: 'app-blog-list-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.page.html',
  styleUrls: ['./blog-list.page.scss'],
})
export class BlogListPage {
  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) {
    // ✅ Sin estados de “expandir”, solo la lista plana
    this.posts = this.blogService.getPosts();
  }
}
