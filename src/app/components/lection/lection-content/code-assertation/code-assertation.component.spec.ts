import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAssertationComponent } from './code-assertation.component';

describe('CodeAssertationComponent', () => {
  let component: CodeAssertationComponent;
  let fixture: ComponentFixture<CodeAssertationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeAssertationComponent]
    });
    fixture = TestBed.createComponent(CodeAssertationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
