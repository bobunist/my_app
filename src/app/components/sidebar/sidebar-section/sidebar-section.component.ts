import { AfterViewChecked, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { SidebarSubsectionIComponent } from '../sidebar-subsection/sidebar-subsection.component';

@Component({
  selector: 'sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements  AfterViewChecked{

  @Input() section: ICourseSection

  @ViewChild(SidebarSubsectionIComponent) subsection_child!: SidebarSubsectionIComponent

  subtitle = ''
  is_open = false

  constructor(
    private cdr: ChangeDetectorRef
  ) { }


  ngAfterViewChecked(): void {
    this.subtitle = this.generateSubtitle(this.section)
    this.cdr.detectChanges()

  }

  generateSubtitle(data: ICourseSection): string {
    const completedItems = data.items.filter(item => item.is_complete === true)

    var newString = completedItems.length.toString() +
      ' / ' +
      data.items.length.toString() +
      ' | ' +
      data.complete_time

    return newString
  }

}
