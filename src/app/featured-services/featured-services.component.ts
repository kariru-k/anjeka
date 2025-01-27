import { Component } from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-featured-services',
  imports: [
    NgForOf,
    NgClass,
    RouterLink
  ],
  templateUrl: './featured-services.component.html',
  standalone: true,
  styleUrl: './featured-services.component.css'
})
export class FeaturedServicesComponent {
  services = [
    {
      delay: 100,
      colorClass: 'item-cyan',
      icon: 'bi-house-door',
      title: 'Hospitality Management',
      description: 'Streamline hospitality operations with efficiency and excellence, ensuring exceptional guest experiences every step of the way',
      link: ''
    },
    {
      delay: 200,
      colorClass: 'item-orange',
      icon: 'bi-person-workspace',
      title: 'Hospitality Training',
      description: 'Empowering hospitality professionals with skills to deliver exceptional service and operate with confidence and precision',
      link: ''
    },
    {
      delay: 300,
      colorClass: 'item-teal',
      icon: 'bi-bar-chart',
      title: 'Hospitality Research',
      description: 'Driving innovation and insights in hospitality through thorough research, shaping the future of guest experiences and industry trends',
      link: 'service-details.html'
    },
    {
      delay: 400,
      colorClass: 'item-red',
      icon: 'bi-gear',
      title: 'Hospitality Consultancy',
      description: 'Providing expert guidance to optimize operations, enhance guest satisfaction, and drive growth in the hospitality industry',
      link: 'service-details.html'
    }
  ];
}
