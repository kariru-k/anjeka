import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig, NgbSlide} from '@ng-bootstrap/ng-bootstrap';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-about-testimonials',
  imports: [
    NgbCarousel,
    NgbSlide,
    NgForOf
  ],
  templateUrl: './about-testimonials.component.html',
  standalone: true,
  styleUrl: './about-testimonials.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutTestimonialsComponent{

  testimonials = [
    {
      icon: 'bi bi-star',
      title: 'Quality',
      subtitle: 'Meeting Customer Expectations',
      description:
        'We prioritize quality by delivering exceptional services and ensuring we meet or exceed customer expectations.',
    },
    {
      icon: 'bi bi-briefcase',
      title: 'Professional',
      subtitle: 'Exceptional Products and Services',
      description:
        'Our team exemplifies professionalism by delivering outstanding products and services tailored to your needs.',
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Integrity',
      subtitle: 'Ethics and Confidentiality',
      description:
        'Integrity is at the heart of what we do, ensuring ethical practices and maintaining confidentiality in all engagements.',
    },
    {
      icon: 'bi bi-tags',
      title: 'Value',
      subtitle: 'More Benefits than Costs',
      description:
        'We deliver unmatched value, ensuring you receive more benefits than the costs incurred.',
    },
    {
      icon: 'bi bi-emoji-smile',
      title: 'Customer Satisfaction',
      subtitle: 'Customer Delight through Meeting Expectations',
      description:
        'Our goal is customer delight, achieved by consistently meeting and surpassing expectations.',
    },
    {
      icon: 'bi bi-check2-circle',
      title: 'Reliable',
      subtitle: 'Always Doing the Right Thing',
      description:
        'Count on us to deliver dependable and consistent results by always doing the right thing.',
    },
    {
      icon: 'bi bi-lightbulb',
      title: 'Innovative',
      subtitle: 'Working Solutions',
      description:
        'We embrace innovation to provide practical and effective solutions for every challenge.',
    },
    {
      icon: 'bi bi-trophy',
      title: 'Excellence',
      subtitle: 'Emphasis on the Best',
      description:
        'Excellence is our standard, with a focus on delivering the best in everything we do.',
    },
  ];


  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationIndicators = false;
  }

  activeSlideIndex = 0;

  onSlideChange(event: any): void {
    // Extract the number after "ngb-slide-" (e.g., "ngb-slide-0" → 0)
    const index = event?.current?.split('-')[2]; // Split the string and extract the number part
    this.activeSlideIndex = parseInt(index, 10) || 0; // Ensure it's a number, default to 0 if invalid
    console.log('Active Slide Index:', this.activeSlideIndex);
  }



}
