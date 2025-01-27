import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-services-items',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './services-items.component.html',
  standalone: true,
  styleUrl: './services-items.component.css'
})
export class ServicesItemsComponent {
  services = [
    {
      id: 'Hospitality Management',
      title: 'Hospitality Management',
      description: 'Comprehensive management services tailored for the hospitality industry.',
      image: 'assets/img/services-1.jpg'
    },
    {
      id: 'Hospitality Training',
      title: 'Hospitality Training',
      description: 'Empowering individuals through hands-on and expert-led training programs.',
      image: 'assets/img/services-2.jpg'
    },
    {
      id: 'Hospitality Research',
      title: 'Hospitality Research',
      description: 'In-depth research services to help solve complex problems and drive innovation.',
      image: 'assets/img/services-3.jpg'
    },
    {
      id: 'Hospitality Consultancy',
      title: 'Hospitality Consultancy',
      description: 'Expert consultancy to guide strategic decisions and improve outcomes.',
      image: 'assets/img/services-4.jpg'
    }
  ];
}
