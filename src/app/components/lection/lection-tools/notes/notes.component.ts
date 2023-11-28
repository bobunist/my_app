import { Component, OnInit } from '@angular/core';
import { INote } from 'src/app/models/note';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'lection-tools-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{
  date_filters = ['Сортировать по новым', 'Сортировать по старым']
  active_filter = 'Сортировать по новым'
  is_open = false
  notes: INote[]

  constructor(
    private course_service: AbstractCourseService
  ){}
  ngOnInit(): void {
    this.course_service.notes$.subscribe(data => this.notes = data)
  }

  getOtherFilter(): string {
    return this.date_filters.find(item => item != this.active_filter) || ''
  }


}
