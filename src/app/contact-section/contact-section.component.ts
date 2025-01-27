import { Component } from '@angular/core';
import {ContactFormComponent} from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  imports: [
    ContactFormComponent
  ],
  templateUrl: './contact-section.component.html',
  standalone: true,
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

}
