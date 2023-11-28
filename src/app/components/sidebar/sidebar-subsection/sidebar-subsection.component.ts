import { Component, Input, OnInit } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'sidebar-subsection',
  templateUrl: './sidebar-subsection.component.html',
  styleUrls: ['./sidebar-subsection.component.scss']
})
export class SidebarSubsectionIComponent implements OnInit {
  @Input() subsection: ICourseSubsection

  active_subsection: ICourseSubsection

  constructor(
    public courseService: AbstractCourseService
  ) { }

  ngOnInit(): void {
    this.courseService.active_subsection$.subscribe(subsection =>
      this.active_subsection = subsection
    )

  }

  markSubsection(event: Event, id: number) {
    event.stopPropagation()
    this.courseService.markSubsection(id)
  }

}
