import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { INote } from 'src/app/models/note';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-tools-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() data: INote
  section: ICourseSection
  subsection: ICourseSubsection
  
  constructor(
    private courseService: AbstractCourseService,
    private el: ElementRef
  ){}

  
  ngOnInit(): void {

  }

  edit(){

  }

  delete(){
  }

  scrollToItem(){
    this.courseService.setActiveSubsection(this.data.subsection_id)
    setTimeout(() => {
      const element = document.getElementById('text' + this.data.item_id.toString())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    }, 1)
  }

}
