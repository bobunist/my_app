import { Component, ElementRef, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'toolbar-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class ToolbarNotesComponent implements OnInit {
  editable_note: number | undefined
  description = ''

  constructor(
    private course_service: CourseService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.course_service.EditableNote$.subscribe(data => this.editable_note = data)
  }

  addNote(id: number, description: string) {
    this.course_service.markItemForNotes(id, description)
  }

  adjustTextareaHeight() {
    const textarea = this.el.nativeElement.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 2 + 'px';
    }
  }
}

