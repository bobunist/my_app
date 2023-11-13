import { Component, Input, OnInit } from '@angular/core';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'sidebar-subsection',
  templateUrl: './sidebar-subsection.component.html',
  styleUrls: ['./sidebar-subsection.component.scss']
})
export class SidebarSubsectionIComponent  implements OnInit {
  @Input() subsection: ICourseSubsection
  
  active_subsection: ICourseSubsection

  constructor(
    public courseService: CourseService
  ){}

  markSubsection(event: Event, id: number) {
    event.stopPropagation()
    this.courseService.markSubsection(id)
  }

  ngOnInit(): void {
    this.courseService.getActiveSubsection().subscribe(subsection =>
      this.active_subsection = subsection
      )
  }

}
