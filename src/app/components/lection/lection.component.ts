import { Component, OnInit } from '@angular/core';
import { CourseContentCodeExample, CourseContentCodeExecutor, CourseContentHeader, CourseContentImage, CourseContentQuiz, CourseContentText, CourseContentTextExample, CourseContentVideo } from 'src/app/models/course-content';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'lection',
  templateUrl: './lection.component.html',
  styleUrls: ['./lection.component.scss']
})
export class LectionComponent implements OnInit {

  active_subsection: ICourseSubsection
  active_subsection1: CourseContentText
  
  constructor(
    public courseService: CourseService,
  ) { }
  
  ngOnInit(): void {
    this.courseService.getActiveSubsection().subscribe(subsection =>
      this.active_subsection = subsection
      )
  }

  isCourseContentText(item: any): item is CourseContentText {
    return item && item.hasOwnProperty('text');
  }

  isCourseContentImage(item: any): item is CourseContentImage {
    return item && item.hasOwnProperty('image_url');
  }

  isCourseContentCodeExample(item: any): item is CourseContentCodeExample {
    return item && item.hasOwnProperty('code') && item.hasOwnProperty('language')
  }
  
  isCourseContentTextExample(item: any): item is CourseContentTextExample {
    return item && item.hasOwnProperty('example')
  }

  isCourseContentVideo(item: any): item is CourseContentVideo {
    return item && item.hasOwnProperty('youtube_video_id')
  }

  isCourseContentQuiz(item: any): item is CourseContentQuiz {
    return item && item.hasOwnProperty('question') && item.hasOwnProperty('answers') && item.hasOwnProperty('right_answer')
  }

  isCourseContentCodeExecutor(item: any): item is CourseContentCodeExecutor {
    return item && item.hasOwnProperty('start_code') && item.hasOwnProperty('language')
  }

  isCourseContentHeader(item: any): item is CourseContentHeader {
    return item && item.hasOwnProperty('header')
  }

}
