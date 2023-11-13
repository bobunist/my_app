import { Component, OnInit } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{

  title = 'my_app';
  sidebar_data: ICourseSection[] = []
  
  constructor(
    public courseService: CourseService,
  ){}

  ngOnInit(): void {
    this.courseService.getCourseTable().subscribe(data =>
      this.sidebar_data = data
      
      )
  }
  
}
