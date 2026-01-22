import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private readonly title: Title, private readonly meta: Meta) {}

  updateTitle(title: string) {
    if (title) {
      this.title.setTitle(title);
    }
  }

  updateMeta(config: { description?: string; canonicalUrl?: string; image?: string; [key: string]: string | undefined }) {
    if (config.description) {
      this.meta.updateTag({ name: 'description', content: config.description });
    }

    if (config.image) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
      this.meta.updateTag({ name: 'twitter:image', content: config.image });
    }

    if (config.canonicalUrl) {
      let link: HTMLLinkElement = document.querySelector("link[rel='canonical']") as HTMLLinkElement || document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', config.canonicalUrl);
      if (!link.parentElement) document.head.appendChild(link);
    }

    Object.keys(config).forEach((key) => {
      if (['description', 'canonicalUrl', 'image'].includes(key)) return;
      const value = config[key];
      if (value) this.meta.updateTag({ name: key, content: value });
    });
  }
}
