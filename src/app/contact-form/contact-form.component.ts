import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs from '@emailjs/browser';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './contact-form.component.html',
  standalone: true,
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  loading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) return;

    this.loading = true;
    const formData = this.contactForm.value;

    // Prepare Email.js service
    const emailParams = {
      to_email: 'info@anjekaconsulting.co.ke',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        'Anjeka', // Replace with your Email.js service ID
        'template_duyg3wu', // Replace with your Email.js template ID
        emailParams,
        'pj4l-evnNhu9XKjke' // Replace with your Email.js public key
      )
      .then(
        () => {
          this.loading = false;
          this.successMessage = 'Your message has been sent. Thank you!';
          this.errorMessage = null;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          this.loading = false;
          this.successMessage = null;
          this.errorMessage =
            'Failed to send your message. Please try again later.';
        }
      );
  }

}
