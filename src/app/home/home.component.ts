import { Component } from '@angular/core';
import {HeroComponent} from '../hero/hero.component';
import {FeaturedServicesComponent} from '../featured-services/featured-services.component';
import {AboutHomeComponent} from '../about-home/about-home.component';
import {FeaturesComponent} from '../features/features.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturedServicesComponent, AboutHomeComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
