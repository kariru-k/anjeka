import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarCollapsed = false;  // Controls menu visibility

  closeNavbar() {
    this.isNavbarCollapsed = false; // Close the navbar when a link is clicked
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
