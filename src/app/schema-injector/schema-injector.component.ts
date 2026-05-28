import { Component, Input, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-schema-injector',
  standalone: true,
  template: ''
})
export class SchemaInjectorComponent implements OnInit {
  @Input() schemaData!: object;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    if (this.schemaData) {
      const scriptElement = this.document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.text = JSON.stringify(this.schemaData);
      this.document.head.appendChild(scriptElement);
    }
  }
}
