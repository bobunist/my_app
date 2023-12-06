import { Component, Input } from '@angular/core';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-note-in-text',
  templateUrl: './note-in-text.component.html',
  styleUrls: ['./note-in-text.component.scss']
})
export class NoteInTextComponent {
  @Input() desc: string
  @Input() id_for_note: number
  @Input() subsection_id: number
  constructor(
    private courseService: AbstractCourseService
  ) { }

  smoothScrollToElement(id: string) {
    this.courseService.setActiveSubsection(this.subsection_id)
    const element = document.getElementById('note' + this.id_for_note);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }

  }
}
