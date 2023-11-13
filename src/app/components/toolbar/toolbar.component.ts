import { Component } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent{
  
  items: item[] = [
    {
      icon: 'bi bi-stopwatch',
      text_hint: 'Помодоро'
    },
    {
      icon: 'bi bi-pencil-square',
      text_hint: 'Заметки'
    },
    {
      icon: 'bi bi-alarm',
      text_hint: 'Напомнить'
    }
  ]

  is_open = true
  active_item: item | undefined = this.items[1]



  changeToolbarState(){
    this.is_open = !this.is_open
    this.active_item = undefined
  }

}

type item ={
  icon: string
  text_hint: string
}