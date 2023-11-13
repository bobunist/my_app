import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSubsectionIComponent } from './sidebar-subsection.component';

describe('SidebarSectionItemComponent', () => {
  let component: SidebarSubsectionIComponent;
  let fixture: ComponentFixture<SidebarSubsectionIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarSubsectionIComponent]
    });
    fixture = TestBed.createComponent(SidebarSubsectionIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
