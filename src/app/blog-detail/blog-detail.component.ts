import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogDetailsTitleComponent } from '../blog-details-title/blog-details-title.component';
import { BlogContentService, BlogPostContent } from '../blog-content.service';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, BlogDetailsTitleComponent, BlogCardComponent, ContactFormComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit, OnDestroy {
  post?: BlogPostContent;
  recent: BlogPostContent[] = [];
  categories: { name: string; count: number }[] = [];
  related: BlogPostContent[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(private readonly route: ActivatedRoute, private readonly content: BlogContentService) {
    // constructor only injects services; initialization happens in ngOnInit
  }

  ngOnInit(): void {
    // react to route param changes so navigating between posts re-renders this view
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const slug = params.get('slug') || '';
      this.post = this.content.getPostBySlug(slug);
      this.recent = this.content.getRecentPosts(3);
      this.categories = this.content.getCategoriesWithCounts();
      this.related = this.content.getRelatedPosts(slug, 3);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
