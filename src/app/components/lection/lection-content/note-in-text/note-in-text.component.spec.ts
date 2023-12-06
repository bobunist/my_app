import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteInTextComponent } from './note-in-text.component';

describe('NoteInTextComponent', () => {
  let component: NoteInTextComponent;
  let fixture: ComponentFixture<NoteInTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteInTextComponent]
    });
    fixture = TestBed.createComponent(NoteInTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
