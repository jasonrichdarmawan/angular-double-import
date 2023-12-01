import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLearnerDetailsComponent } from './add-learner-details.component';

describe('AddLearnerDetailsComponent', () => {
  let component: AddLearnerDetailsComponent;
  let fixture: ComponentFixture<AddLearnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLearnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLearnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
