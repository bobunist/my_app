import { Component } from '@angular/core';

@Component({
  selector: 'lection-tools',
  templateUrl: './lection-tools.component.html',
  styleUrls: ['./lection-tools.component.scss']
})
export class LectionToolsComponent {
  sections = ['Обзор', 'Заметки', 'Обсуждения', 'Дополнительные материалы']
  active_section = 'Обзор'
}
