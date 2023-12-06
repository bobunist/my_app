import { Component, Input, NgZone } from '@angular/core';
import { CourseContentText } from 'src/app/models/course-content';
import { LectionToolsSection } from 'src/app/models/lection-tools';
import { SelectedItem } from 'src/app/models/selected-item';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  @Input() data: CourseContentText;

  item1: SelectedItem = {
    id: 1,
    text: 'selectedText'
  };

  constructor(
    private ngZone: NgZone,
    private courseService: AbstractCourseService
  ) { }

  some() { }

  handleSelection(event: any): void {
    this.ngZone.run(() => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim() !== '') {
        const selectedText = selection.toString();
        const blockId = this.data.id;

        let item: SelectedItem = {
          id: blockId!,
          text: selectedText
        };
        this.courseService.setSelectedItemForNote(item);
      }
    });
  }

  handleSpanClick(spanId: string): void {

    this.courseService.setLectionToolsActiveSection(LectionToolsSection.Notes)
    setTimeout(() => {
      const element = document.getElementById(`note${spanId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1)
  }


  handleMarkdownClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.tagName === 'SPAN') {
      const spanId = target.id.slice(6);
      this.handleSpanClick(spanId);
    }
  }

}
