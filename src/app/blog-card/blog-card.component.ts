import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BlogPostCard {
  title: string;
  slug: string;
  image: string;
  category: string;
  authorName: string;
  authorAvatar?: string;
  date: string | Date;
  excerpt?: string;
  contentHtml?: string; // used for in-card reveal preview
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  @Input() post!: BlogPostCard;
  @Output() readMore = new EventEmitter<string>();

  expanded = false;

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }
}
