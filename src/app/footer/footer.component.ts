import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  services = [
    {
      id: 'Hospitality Management',
      title: 'Hospitality Management',
      description: 'Comprehensive management services tailored for the hospitality industry.',
      image: 'assets/img/teamwork-3213924_1280.jpg'
    },
    {
      id: 'Hospitality Training',
      title: 'Hospitality Training',
      description: 'Empowering individuals through hands-on and expert-led training programs.',
      image: 'assets/img/front-view-woman-working-service-industry.jpg'
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
      image: 'assets/img/guests-arriving-hotel-reception.jpg'
    }
    ]

  currentYear() {
    // Get the current year
    return new Date().getFullYear();
  }
}
