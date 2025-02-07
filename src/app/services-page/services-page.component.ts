import { Component } from '@angular/core';
import {FeaturedServicesComponent} from '../featured-services/featured-services.component';
import {ServicesTitleComponent} from '../services-title/services-title.component';
import {ServicesItemsComponent} from '../services-items/services-items.component';

@Component({
  selector: 'app-services-page',
  imports: [
    ServicesTitleComponent,
    ServicesItemsComponent
  ],
  templateUrl: './services-page.component.html',
  standalone: true,
  styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {

}
