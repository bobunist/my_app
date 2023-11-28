import { Component, Input, NgZone, OnInit } from '@angular/core';
import { CourseContentTextExample } from 'src/app/models/course-content';
import { SelectedItem } from 'src/app/models/selected-item';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-text-example',
  templateUrl: './text-example.component.html',
  styleUrls: ['./text-example.component.scss']
})
export class TextExampleComponent implements OnInit{
  @Input() data: CourseContentTextExample;

  constructor(
    private ngZone: NgZone,
    private courseService: AbstractCourseService
  ){}

  ngOnInit(): void {
    
  }

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

}
