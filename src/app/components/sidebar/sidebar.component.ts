import { Component, EventEmitter, Input, OnInit} from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { ICourseSubsection } from 'src/app/models/course-subsection';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() data: ICourseSection[]

  active_subsection: ICourseSubsection
  term = '';
  all_items: any[] = [];

  constructor(
    public courseService: CourseService,
  ) { }

  ngOnInit(): void {
    if (this.data && this.data.length > 0) {
      this.data.forEach((section: ICourseSection) => {
        if (section.subsections && section.subsections.length > 0) {
          this.all_items = this.all_items.concat(section.subsections);
        }
      });
    }
    this.courseService.getActiveSubsection().subscribe(subsection =>
      this.active_subsection = subsection
      )
  }

  markSubsection(event: Event, id: number) {
    event.stopPropagation()
    this.courseService.markSubsection(id)
  }

  setActiveSubsection(subsection: ICourseSubsection){
    this.term = ''
    this.courseService.setActiveSubsection(subsection)
  }
}
