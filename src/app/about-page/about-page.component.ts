import { Component } from '@angular/core';
import {AboutHomeComponent} from '../about-home/about-home.component';
import {AboutTitleComponent} from '../about-title/about-title.component';
import {AboutTestimonialsComponent} from '../about-testimonials/about-testimonials.component';

@Component({
  selector: 'app-about-page',
  imports: [
    AboutHomeComponent,
    AboutTitleComponent,
    AboutTestimonialsComponent
  ],
  templateUrl: './about-page.component.html',
  standalone: true,
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
