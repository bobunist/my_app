import { Component, Input, OnInit } from '@angular/core';
import { CourseContentCodeExecutor } from 'src/app/models/course-content';

@Component({
  selector: 'lection-code-executor',
  templateUrl: './code-executor.component.html',
  styleUrls: ['./code-executor.component.scss']
})
export class CodeExecutorComponent implements OnInit {
  
  @Input() data: CourseContentCodeExecutor
  output = 'Пока что тут нет выполнения кода :)'
  execute = false
  code: string
  textarea_height: number
  
  ngOnInit(): void {
    this.restartCode()
  }

  restartCode(){
    this.code = this.data.start_code
    // this.adjustTextareaHeight()
  }
  
  // adjustTextareaHeight() {
  //   const textarea = document.querySelector('textarea');
  //   if (textarea) {
  //     textarea.style.height = 'auto';
  //     textarea.style.height = 100 + 'px';
  //   }
  // }

}
