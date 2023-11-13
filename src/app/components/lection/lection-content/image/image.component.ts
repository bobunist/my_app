import { Component, Input } from '@angular/core';
import { CourseContentImage } from 'src/app/models/course-content';

@Component({
  selector: 'lection-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() image: CourseContentImage
}
