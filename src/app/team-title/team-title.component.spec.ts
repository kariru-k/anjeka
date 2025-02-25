import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTitleComponent } from './team-title.component';

describe('TeamTitleComponent', () => {
  let component: TeamTitleComponent;
  let fixture: ComponentFixture<TeamTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
