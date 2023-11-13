import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExecutorComponent } from './code-executor.component';

describe('CodeExecutorComponent', () => {
  let component: CodeExecutorComponent;
  let fixture: ComponentFixture<CodeExecutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeExecutorComponent]
    });
    fixture = TestBed.createComponent(CodeExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
