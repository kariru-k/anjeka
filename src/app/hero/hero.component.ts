import {Component} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {NgClass, NgForOf, NgStyle} from '@angular/common';


@Component({
  selector: 'app-hero',
  imports: [NgbCarouselModule, NgForOf, NgStyle],
  templateUrl: './hero.component.html',
  standalone: true,
  styleUrl: './hero.component.css',
  providers: [NgbCarouselConfig]
})
export class HeroComponent{

  slides = [
    {
      title: 'Welcome to Anjeka',
      text: 'Delivering excellence in hospitality services tailored to your unique needs.',
      backgroundImage: 'url("assets/img/hotel-1831072_1280.jpg")',
    },
    {
      title: 'Your Partner in Hospitality',
      text: 'Creating memorable experiences with seamless service and unmatched professionalism.',
      backgroundImage: 'url("assets/img/hotel-7885138_1280.jpg")',
    },
    {
      title: 'Redefining Guest Satisfaction',
      text: 'Ensuring comfort, quality, and care in every interaction we provide.',
      backgroundImage: 'url("assets/img/landscape-2016308_1280.jpg")',
    },
    {
      title: 'Hospitality with Innovation',
      text: 'Blending modern solutions with a personal touch to elevate your guest experience.',
      backgroundImage: 'url("assets/img/hotel-1111199_1280.jpg")',
    },
    {
      title: 'Exceeding Expectations',
      text: 'Building trust and long-term relationships through exceptional hospitality solutions.',
      backgroundImage: 'url("assets/img/hotel-928937_1280.jpg")',
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

  getHeroBackground(): string {
    return this.slides[this.activeSlideIndex].backgroundImage;
  }


}
