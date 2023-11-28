import { Component, ElementRef, OnInit } from '@angular/core';
import { SelectedItem } from 'src/app/models/selected-item';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'toolbar-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class ToolbarNotesComponent implements OnInit {

  selected_item: SelectedItem | undefined
  description = ''

  constructor(
    private course_service: AbstractCourseService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.course_service.selected_item$.subscribe(data => this.selected_item = data)
  }

  addNote() {
    let section_id: number
    let subsection_id: number
    this.course_service.active_section$.subscribe(data => {section_id =  data.id!})
    this.course_service.active_subsection$.subscribe(data => {subsection_id = data.id})
    let note = {
      id: 1,
      section_id: section_id!,
      subsection_id: subsection_id!,
      description: this.description,
      item_id: this.selected_item!.id,
      selected_text: this.selected_item!.text
  }
  this.course_service.addNote(note)
  this.course_service.setToolbarState(false, undefined)
  }

  adjustTextareaHeight() {
    const textarea = this.el.nativeElement.querySelector('textarea');
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 2 + 'px';
    }
  }
}

