import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersTitleComponent } from './careers-title.component';

describe('CareersTitleComponent', () => {
  let component: CareersTitleComponent;
  let fixture: ComponentFixture<CareersTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
