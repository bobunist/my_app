import { Component, OnInit } from '@angular/core';
import { ICourseSection } from './models/course-section';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
