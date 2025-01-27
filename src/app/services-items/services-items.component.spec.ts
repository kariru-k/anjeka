import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesItemsComponent } from './services-items.component';

describe('ServicesItemsComponent', () => {
  let component: ServicesItemsComponent;
  let fixture: ComponentFixture<ServicesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
