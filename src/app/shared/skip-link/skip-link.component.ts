import { Component } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  template: `<a class="skip-link" href="#main">Skip to content</a>`,
  styles: [`.skip-link{position:fixed;left:8px;top:8px;background:#000;color:#fff;padding:8px;z-index:999;transform:translateY(-120%);transition:transform .25s;border-radius:4px} .skip-link:focus{transform:translateY(0);outline:none}`]
})
export class SkipLinkComponent {}

