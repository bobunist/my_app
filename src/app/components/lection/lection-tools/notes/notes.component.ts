import { Component } from '@angular/core';

@Component({
  selector: 'lection-tools-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  date_filters = ['Сортировать по новым', 'Сортировать по старым']
  active_filter = 'Сортировать по новым'
  is_open = false


  getOtherFilter(): string {
    return this.date_filters.find(item => item != this.active_filter) || ''
  }
}
