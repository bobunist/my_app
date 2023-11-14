import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContentHeaderComponent } from './course-content-header.component';

describe('CourseContentHeaderComponent', () => {
  let component: CourseContentHeaderComponent;
  let fixture: ComponentFixture<CourseContentHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseContentHeaderComponent]
    });
    fixture = TestBed.createComponent(CourseContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
