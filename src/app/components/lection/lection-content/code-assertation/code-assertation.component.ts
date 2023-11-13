import { Component, Input } from '@angular/core';
import { CourseContentCodeAssertation } from 'src/app/models/course-content';

@Component({
  selector: 'lection-code-assertation',
  templateUrl: './code-assertation.component.html',
  styleUrls: ['./code-assertation.component.scss']
})
export class CodeAssertationComponent {
  @Input() code_assert: CourseContentCodeAssertation
}
