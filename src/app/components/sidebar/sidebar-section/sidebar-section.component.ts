import { AfterViewChecked, ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { ICourseSection } from 'src/app/models/course-section';
import { SidebarSubsectionIComponent } from '../sidebar-subsection/sidebar-subsection.component';
import { SelectedItem } from 'src/app/models/selected-item';

@Component({
  selector: 'sidebar-section',
  templateUrl: './sidebar-section.component.html',
  styleUrls: ['./sidebar-section.component.scss']
})
export class SidebarSectionComponent implements  AfterViewChecked{

  @Input() section: ICourseSection

  @ViewChild(SidebarSubsectionIComponent) subsection_child!: SidebarSubsectionIComponent

  subtitle = ''
  is_open = true

  constructor(
    private cdr: ChangeDetectorRef,
  ) { }


  item1: SelectedItem = {
    id: 1,
    text: 'selectedText'
  }


  ngAfterViewChecked(): void {
    this.subtitle = this.generateSubtitle(this.section)
    this.cdr.detectChanges()

  }

  generateSubtitle(data: ICourseSection): string {
    const completedItems = data.subsections.filter(subsection => subsection.is_complete === true)

    var newString = completedItems.length.toString() +
      ' / ' +
      data.subsections.length.toString() +
      ' | ' +
      data.complete_time

    return newString
  }

}
