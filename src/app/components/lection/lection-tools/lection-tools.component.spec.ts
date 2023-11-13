import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectionToolsComponent } from './lection-tools.component';

describe('LectionToolsComponent', () => {
  let component: LectionToolsComponent;
  let fixture: ComponentFixture<LectionToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LectionToolsComponent]
    });
    fixture = TestBed.createComponent(LectionToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
