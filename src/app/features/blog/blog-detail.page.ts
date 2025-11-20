import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BlogService, BlogPost } from '../../shared/blog.service';

@Component({
  selector: 'app-blog-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage {
  post: BlogPost | undefined;
  paragraphs: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.post = this.blogService.getPostBySlug(slug);
    }

    if (!this.post) {
      this.router.navigate(['/blog']);
      return;
    }

    /** 🔥 Procesamos el contenido en el TS */
    this.paragraphs = this.post.content
      .split('\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);
  }
}
