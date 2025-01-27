import { Component } from '@angular/core';
import {CareersTitleComponent} from '../careers-title/careers-title.component';
import {CareersSectionComponent} from '../careers-section/careers-section.component';

@Component({
  selector: 'app-careers-page',
  imports: [
    CareersTitleComponent,
    CareersSectionComponent
  ],
  templateUrl: './careers-page.component.html',
  styleUrl: './careers-page.component.css'
})
export class CareersPageComponent {

}
