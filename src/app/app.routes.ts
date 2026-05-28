import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {CareersPageComponent} from './careers-page/careers-page.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ServicesDetailsComponent} from './services-details/services-details.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Anjeka — Home',
      description: 'Welcome to Anjeka. We provide outstanding services to help your business grow. Learn more about our solutions and team.',
      image: '/assets/img/social-default.png'
    }
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'About — Anjeka',
      description: 'Learn about Anjeka: our mission, values, and the story behind our team.',
      image: '/assets/img/social-about.png'
    }
  },
  {
    path: 'services',
    component: ServicesPageComponent,
    data: {
      title: 'Services — Anjeka',
      description: 'Explore the services Anjeka offers to help businesses with design, development, and growth.',
      image: '/assets/img/social-services.png'
    }
  },
  {
    path: 'careers',
    component: CareersPageComponent,
    data: {
      title: 'Careers — Anjeka',
      description: 'Join the Anjeka team. See current openings and learn about our culture and benefits.',
      image: '/assets/img/social-careers.png'
    }
  },
  {
    path: 'team',
    component: TeamPageComponent,
    data: {
      title: 'Team — Anjeka',
      description: 'Meet the talented team behind Anjeka and learn about their expertise.',
      image: '/assets/img/social-team.png'
    }
  },
  {
    path: 'blog',
    component: BlogPageComponent,
    data: {
      title: 'Blog — Anjeka',
      description: 'Read the latest articles, news, and insights from the Anjeka team.',
      image: '/assets/img/social-blog.png'
    }
  },
  {
    path: 'blog/:slug',
    component: BlogDetailComponent,
    data: {
      title: 'Blog Details — Anjeka',
      description: 'Read this article from the Anjeka team.',
      image: '/assets/img/social-blog.png'
    }
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'Contact — Anjeka',
      description: 'Get in touch with Anjeka. We’d love to hear from you and discuss your project.',
      image: '/assets/img/social-contact.png'
    }
  },
  {
    path: 'services/:id',
    component: ServicesDetailsComponent,
    data: {
      title: 'Service Details — Anjeka',
      description: 'Detailed information about this Anjeka service. Learn features, pricing, and how it can help your business.',
      image: '/assets/img/social-services.png'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Automatically scrolls to the top on navigation
    }),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {}
