### Anjeka SEO Implementation Guide

This guide lists practical, high‑impact steps to improve Google Search visibility for the Anjeka Angular site. It includes specific code snippets, file locations, and operational checklists tailored to this repository.

Last updated: 2026‑01‑05 14:50 local

---

### 1) Sitewide HTML head hygiene

Add or verify the following in `src/index.html` and at route level via Angular `Title`/`Meta` services (see section 3). The `index.html` head should remain minimal and defer page‑specific tags to routes.

Recommended base tags in `src/index.html`:

```html
<!-- src/index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Anjeka</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Performance preconnects (already present) -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  
  <!-- Page‑specific SEO tags (title, description, canonical, OG/Twitter) should be set per route via Angular Meta service) -->
</head>
<body class="index-page mat-typography">
  <app-root></app-root>
</body>
</html>
```

Guidelines:
- Keep `index.html` title generic (“Anjeka”) and override per route dynamically.
- Ensure one `<h1>` per page in templates.
- Use semantic HTML (`<header> <nav> <main> <section> <article> <footer>`).

---

### 2) Server‑side rendering (SSR) and prerendering (Critical)

Google can render JS, but SSR/prerendering dramatically improves crawlability, speed, and ranking. Enable Angular Universal with hybrid SSR + prerender.

Commands (execute in project root):

```bash
# Add Angular Universal (SSR)
ng add @nguniversal/express-engine

# Build and run SSR dev server
npm run dev:ssr

# Pre-render static routes for faster first paint and full HTML at crawl time
npm run prerender
```

Setup notes:
- Ensure all public routes (home, services, blog listing, blog detail, contact) are included in prerender config (`routes.txt` or builder options).
- Keep canonical URLs correct in SSR output (see section 4).
- After enabling SSR, verify `View Source` shows fully rendered content, not just `<app-root>`.

---

### 3) Route-level titles, meta descriptions, and canonical URLs (High impact)

Use Angular’s `Title` and `Meta` services in each page component to set SEO tags. Example for `blog-page` route:

```ts
// src/app/blog-page/blog-page.component.ts
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    const pageTitle = 'Insights & Articles | Anjeka Consulting';
    const description = 'Expert insights on consulting, strategy, and digital transformation from Anjeka Consulting.';
    const canonical = 'https://www.anjekaconsulting.co.ke/blog';

    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.anjekaconsulting.co.ke/og-image.jpg' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://www.anjekaconsulting.co.ke/og-image.jpg' });

    // Canonical link
    const link: HTMLLinkElement = document.querySelector("link[rel='canonical']") || document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonical);
    if (!link.parentNode) {
      document.head.appendChild(link);
    }
  }
}
```

Add a canonical `<link>` element once in `index.html` so the selector works even before JS runs. The Angular code will update `href` per route:

```html
<!-- src/index.html, inside <head> -->
<link rel="canonical" href="https://www.anjekaconsulting.co.ke/" />
```

Repeat a similar setup for key routes: Home, Services, Contact, Blog, Blog Detail. Use keyword‑rich but natural titles (55–60 chars) and meta descriptions (140–160 chars).

---

### 4) Structured data (Schema.org) with JSON‑LD (High impact)

Add JSON‑LD blocks for organization, website, breadcrumbs, and articles. Inject them only on relevant routes. Example service for safe injection:

```ts
// src/app/shared/seo-jsonld.service.ts
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SeoJsonLdService {
  private renderer: Renderer2;
  constructor(factory: RendererFactory2) { this.renderer = factory.createRenderer(null, null); }

  setJsonLd(id: string, data: object) {
    const scriptId = `jsonld-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      this.renderer.appendChild(document.head, script);
    }
    script.text = JSON.stringify(data);
  }
}
```

Organization + Website schema (once on Home route):

```ts
// Example in Home component ngOnInit
this.jsonLd.setJsonLd('org', {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Anjeka Consulting',
  url: 'https://www.anjekaconsulting.co.ke',
  logo: 'https://www.anjekaconsulting.co.ke/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/anjeka-consulting',
    'https://x.com/anjeka' 
  ]
});

this.jsonLd.setJsonLd('website', {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Anjeka Consulting',
  url: 'https://www.anjekaconsulting.co.ke',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.anjekaconsulting.co.ke/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
});
```

Breadcrumbs (on inner pages):

```ts
this.jsonLd.setJsonLd('breadcrumbs', {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.anjekaconsulting.co.ke/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.anjekaconsulting.co.ke/blog' }
  ]
});
```

Article schema (on each blog detail):

```ts
this.jsonLd.setJsonLd('article', {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.excerpt,
  image: post.heroImageUrl,
  author: { '@type': 'Person', name: post.authorName },
  publisher: { '@type': 'Organization', name: 'Anjeka Consulting', logo: { '@type': 'ImageObject', url: 'https://www.anjekaconsulting.co.ke/logo.png' } },
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  mainEntityOfPage: canonicalUrl
});
```

---

### 5) Internationalization and hreflang (if multi‑region)

If you target Kenya primarily, keep `en-KE`. If you add additional locales, include hreflang per route.

```html
<!-- Add per route via Meta/Renderer similar to canonical -->
<link rel="alternate" hreflang="en-ke" href="https://www.anjekaconsulting.co.ke/" />
<link rel="alternate" hreflang="x-default" href="https://www.anjekaconsulting.co.ke/" />
```

Ensure language attribute on `<html lang="en">` is accurate.

---

### 6) Robots.txt, sitemap, and 404s (Must‑have)

Place `robots.txt` and XML sitemaps in a publicly served folder.

- Location: `public/robots.txt` and `public/sitemap.xml` (Angular’s modern builder serves `/public` at site root). If using classic builder, use `src/robots.txt` and configure `assets` in `angular.json`.

Sample `robots.txt`:

```
User-agent: *
Allow: /
Disallow: /assets/admin/
Sitemap: https://www.anjekaconsulting.co.ke/sitemap.xml
```

Basic `sitemap.xml` template:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.anjekaconsulting.co.ke/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.anjekaconsulting.co.ke/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.anjekaconsulting.co.ke/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Add blog detail URLs dynamically as you publish -->
</urlset>
```

Automate sitemap generation at build/deploy:

```bash
# Example: generate from a list of routes
node scripts/generate-sitemap.mjs
```

---

### 7) Content guidelines for pages and blog (Very high impact)

- Home: Clear UVP in the hero, 1 primary CTA, supporting sections with keyword‑rich headings. Include testimonials and trust signals.
- Services: 1 page per service with distinct keywords; include FAQs in schema (`FAQPage`).
- Blog: Publish regularly. Use intent‑aligned keywords (informational/commercial). Each article: 1200+ words, unique H2/H3s, internal links, schema.
- Contact: Show full NAP (Name, Address, Phone), embedded map if relevant, and conversion‑optimized form.
- Add an About/Team page to improve E‑E‑A‑T (experience, expertise, author bios).

On‑page checklist per page:
- One `<h1>` that includes the primary keyword.
- Descriptive URL slug (kebab‑case, short, no stop words if possible).
- First 100 words mention the primary keyword naturally.
- Internal links to related pages with descriptive anchor text.
- Images compressed (WebP/AVIF), descriptive `alt` text.
- Outbound links to authoritative sources when helpful (nofollow for untrusted links).

---

### 8) Performance and Core Web Vitals (High impact)

- Images: Convert to WebP/AVIF and set `width`/`height` + `loading="lazy"`.
- CSS/JS: Remove unused CSS (audit `styles.css`), prefer Angular’s built‑in CSS scoping. Avoid blocking third‑party scripts.
- Fonts: Already preconnected; also add `display=swap` (present) and consider self‑hosting critical fonts.
- Lazy‑load routes and components.
- Use `ngOptimizedImage` (Angular v15+):

```html
<!-- Example in a template -->
<img ngSrc="/assets/hero.webp" width="1200" height="628" priority alt="Consulting services by Anjeka" />
```

- Measure regularly with Lighthouse and PageSpeed Insights (mobile first) and fix CLS/LCP/INP issues.

---

### 9) Navigation, internal linking, and breadcrumbs

- Navbar/footer: Link to priority pages; keep labels descriptive.
- Add breadcrumbs on inner pages for UX and schema.
- Use related articles section at the bottom of blog posts.

Breadcrumb HTML starter:

```html
<nav aria-label="Breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/blog"><span itemprop="name">Blog</span></a>
      <meta itemprop="position" content="2" />
    </li>
  </ol>
</nav>
```

---

### 10) Media SEO (images, icons, and PDFs)

- Use descriptive file names: `consulting-strategy-workshop.webp`.
- Provide `alt` text reflecting content purpose.
- Add `width`/`height` attributes to prevent CLS.
- For PDFs: add HTML landing pages; link PDFs with `type="application/pdf"` and include descriptive text.

---

### 11) Social sharing (OG & Twitter)

Add Open Graph and Twitter tags per route (section 3). Provide a proper `og:image` (1200×630) and ensure that the image is cached on your domain. Test with Facebook Sharing Debugger and Twitter Card Validator.

---

### 12) Local SEO (if applicable)

- Create and optimize Google Business Profile (consistent NAP, categories, hours).
- Embed a Google Map on Contact page.
- Add LocalBusiness schema (`@type: ProfessionalService`) with address and geo coordinates.

```ts
this.jsonLd.setJsonLd('local', {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Anjeka Consulting',
  telephone: '+254-XXX-XXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '...',
    addressLocality: 'Nairobi',
    addressCountry: 'KE'
  },
  url: 'https://www.anjekaconsulting.co.ke'
});
```

---

### 13) Forms, conversions, and spam protection

- Ensure forms return a friendly confirmation (present) and use proper validation (present in `contact-form`).
- Add `thank-you` page route to capture conversions and enable goal tracking.
- Use reCAPTCHA v3 or hCaptcha to reduce spam, and annotate form buttons with `type="submit"` and `name` attributes for analytics.

---

### 14) Analytics, Search Console, and monitoring

- Add Google Analytics 4 with consent controls and IP anonymization. Load it after user consent to preserve Core Web Vitals.
- Verify domain in Google Search Console. Submit `sitemap.xml`.
- Set up performance monitoring (PageSpeed Insights API or Lighthouse CI) on CI.

GA4 basic snippet (loaded after consent):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
</script>
```

---

### 15) Security and technical hygiene

- Enforce HTTPS with HSTS at the CDN/proxy level.
- Implement canonical domain redirect (non‑www -> www or vice versa) at edge.
- Return proper status codes: 200/301/404/410.
- Avoid 302s for permanent moves.
- Ensure no duplicate content; use canonical tags and avoid query‑string duplicates indexing.

---

### 16) Angular‑specific best practices for SEO

- Prefer SSR/prerender (section 2).
- Use `RouterModule` with `scrollPositionRestoration` and `anchorScrolling` to improve UX.
- Generate clean URLs (avoid `#` fragments for routing).
- Avoid client‑only title/meta updates for critical pages if SSR is off; prerender them at build.
- For dynamic blog content, generate static files or prerender detail routes where possible.

Router configuration example:

```ts
RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
});
```

---

### 17) Accessibility alignment (helps SEO)

- Sufficient color contrast and focus styles.
- Descriptive link text and ARIA labels where necessary.
- Skip links and keyboard navigation support.

---

### 18) Build and deploy checklist

Before publishing:
- [ ] SSR pages render correct HTML in `view-source`.
- [ ] Titles and descriptions present and unique per route.
- [ ] Canonical URL correct per route.
- [ ] `robots.txt` and `sitemap.xml` available at site root.
- [ ] Lighthouse (mobile) scores: Performance > 90, Accessibility > 95, SEO > 90.
- [ ] Validate JSON‑LD with Rich Results Test.
- [ ] Test OG/Twitter previews.
- [ ] 404 page returns 404 and has helpful links.

---

### 19) Concrete next actions for this repo

1. Add Angular Universal (SSR) and prerender main routes.  
2. Create `SeoJsonLdService` and route‑level meta setup for Home, Services, Blog, Blog Detail, Contact.  
3. Add `<link rel="canonical">` placeholder in `src/index.html` and update per route.  
4. Add `public/robots.txt` and `public/sitemap.xml`; wire automated sitemap generation in CI/CD.  
5. Convert hero and blog images to WebP/AVIF, use `ngOptimizedImage`.  
6. Add breadcrumbs to inner pages and JSON‑LD.  
7. Create `thank-you` route and configure GA4 + Search Console.  
8. Audit internal links in navbar/footer for descriptive anchors and topical clusters.  

---

### 20) Useful validation tools

- Google Search Console, URL Inspection
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Structured Data Linter, Schema.org validator
- Facebook Sharing Debugger, Twitter Card Validator

---

### Appendix: Contact form anti‑spam enhancement (optional)

Your current `ContactFormComponent` is solid; consider adding a hidden honeypot and timing detection:

```ts
// Add to form
this.contactForm = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  subject: ['', [Validators.required]],
  message: ['', [Validators.required]],
  website: [''],                // honeypot
  startedAt: [Date.now()]       // timing
});

// Guard in sendEmail()
const { website, startedAt } = this.contactForm.value;
if (website) return; // bot filled hidden field
if (Date.now() - startedAt < 4000) return; // too fast -> likely bot
```

Add a visually hidden input in the template:

```html
<input type="text" formControlName="website" tabindex="-1" aria-hidden="true" style="position:absolute;left:-10000px;">
```

This reduces spam and improves lead quality, indirectly improving SEO via better engagement.
