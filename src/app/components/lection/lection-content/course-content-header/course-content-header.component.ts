import { Component, Input } from '@angular/core';
import { CourseContentHeader } from 'src/app/models/course-content';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-header',
  templateUrl: './course-content-header.component.html',
  styleUrls: ['./course-content-header.component.scss']
})
export class CourseContentHeaderComponent {
  @Input() data: CourseContentHeader

  constructor( 
    public courseService: AbstractCourseService
     ){}


  addNote(id: number) {
  }

}
