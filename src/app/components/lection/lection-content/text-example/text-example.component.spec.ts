import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextExampleComponent } from './text-example.component';

describe('TextExampleComponent', () => {
  let component: TextExampleComponent;
  let fixture: ComponentFixture<TextExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextExampleComponent]
    });
    fixture = TestBed.createComponent(TextExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
