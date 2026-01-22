import {Component, OnInit} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import * as AOS from 'aos';
import {FooterComponent} from './footer/footer.component';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SeoService } from './services/seo.service';
import { SkipLinkComponent } from './shared/skip-link/skip-link.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SkipLinkComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'anjeka';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly seo: SeoService
  ) {}

  ngOnInit() {
    AOS.init();

    // SEO: update title/meta on navigation end using route data
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data: any) => {
        if (data?.title) this.seo.updateTitle(data.title);
        this.seo.updateMeta({
          description: data?.description ?? 'Anjeka - default site description',
          canonicalUrl: globalThis.location?.href ?? '/',
          image: data?.image ?? undefined,
        });
      });
  }

}
