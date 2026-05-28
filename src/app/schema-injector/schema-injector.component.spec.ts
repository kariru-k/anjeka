import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaInjectorComponent } from './schema-injector.component';

describe('SchemaInjectorComponent', () => {
  let component: SchemaInjectorComponent;
  let fixture: ComponentFixture<SchemaInjectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemaInjectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
