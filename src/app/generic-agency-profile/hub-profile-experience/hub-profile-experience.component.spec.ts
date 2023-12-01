import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubProfileExperienceComponent } from './hub-profile-experience.component';

describe('HubProfileExperienceComponent', () => {
  let component: HubProfileExperienceComponent;
  let fixture: ComponentFixture<HubProfileExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubProfileExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubProfileExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
