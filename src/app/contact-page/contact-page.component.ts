import { Component } from '@angular/core';
import {ContactTitleComponent} from '../contact-title/contact-title.component';
import {ContactSectionComponent} from '../contact-section/contact-section.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    ContactTitleComponent,
    ContactSectionComponent
  ],
  templateUrl: './contact-page.component.html',
  standalone: true,
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
