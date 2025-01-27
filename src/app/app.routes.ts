import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {CareersPageComponent} from './careers-page/careers-page.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {ServicesDetailsComponent} from './services-details/services-details.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'services',
    component: ServicesPageComponent
  },
  {
    path: 'careers',
    component: CareersPageComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'blog',
    component: BlogPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'services/:id',
    component: ServicesDetailsComponent
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

