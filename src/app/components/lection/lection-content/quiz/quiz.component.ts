import { Component, Input } from '@angular/core';
import { CourseContentQuiz } from 'src/app/models/course-content';

@Component({
  selector: 'lection-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  @Input() quiz: CourseContentQuiz

  choosen_answer: string | undefined

chooseAnswer(answer: string){
  if (this.choosen_answer === undefined) {
    this.choosen_answer = answer
  }
}

}
