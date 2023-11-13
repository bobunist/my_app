import { Component, Input } from '@angular/core';
import { CourseContentCodeExample } from 'src/app/models/course-content';

@Component({
  selector: 'lection-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss'],
})
export class CodeExampleComponent {
  @Input() code_example: CourseContentCodeExample

}
