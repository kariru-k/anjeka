import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCardComponent, BlogPostCard } from '../blog-card/blog-card.component';
import { BlogTitleComponent } from '../blog-title/blog-title.component';
import { BlogContentService, BlogPostContent } from '../blog-content.service';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogCardComponent, BlogTitleComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {
  posts: BlogPostCard[] = [];

  constructor(private content: BlogContentService) {
    // Load posts from centralized blog content
    this.posts = this.content.getAllPosts().map((p: BlogPostContent) => ({
      title: p.title,
      slug: p.slug,
      image: p.image,
      category: p.category,
      authorName: p.authorName,
      authorAvatar: p.authorAvatar,
      date: p.date,
      excerpt: p.excerpt,
      contentHtml: p.contentHtml,
    }));
  }
}
