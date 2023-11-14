import { Component, Input, OnInit } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { INote } from 'src/app/models/notes-item';
import { CourseService } from 'src/app/services/course.service';

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
    private courseService: CourseService
  ){}

  
  ngOnInit(): void {
    const { section, subsection } = this.courseService.findSectionAndSubsection(this.data.section_id, this.data.subsection_id);
    this.section = section!!;
    this.subsection = subsection!!;
  }

  edit(){

  }

  delete(){
  }

  scrollToItem(){
    this.courseService.setActiveSubsection(this.subsection)
  }

}
