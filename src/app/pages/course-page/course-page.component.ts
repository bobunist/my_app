import { Component, OnInit } from '@angular/core';
import { tutorial_data } from 'src/app/data/tutorial-data';
import { ICourseSection } from 'src/app/models/course-section';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit{

  title = 'my_app';
  sidebar_data: ICourseSection[] = []
  is_popup_open = true
  tutorial_data = tutorial_data
  current_tutorial_index = 0
  
  constructor(
    public courseService: AbstractCourseService,
  ){}

  ngOnInit(): void {
    this.courseService.course$.subscribe(data =>
      this.sidebar_data = data
      
      )
  }
  
  tutorialSkip(){
    this.is_popup_open = false
  }

  tutorialNext(){
    if (tutorial_data.length - 1 > this.current_tutorial_index) this.current_tutorial_index += 1
    else {
      this.is_popup_open = false
    }
  }
}
