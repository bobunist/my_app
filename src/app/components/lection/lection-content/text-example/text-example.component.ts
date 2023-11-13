import { Component, Input, OnInit } from '@angular/core';
import { CourseContentTextExample } from 'src/app/models/course-content';

@Component({
  selector: 'lection-text-example',
  templateUrl: './text-example.component.html',
  styleUrls: ['./text-example.component.scss']
})
export class TextExampleComponent implements OnInit{
  @Input() data: CourseContentTextExample;

  ngOnInit(): void {
  }
}
