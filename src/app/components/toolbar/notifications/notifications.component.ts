import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'toolbar-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  @Output() onChangeToolbarState = new EventEmitter()
  datetime = new Date()

  date = ''
  time = ''

  ngDoCheck() {
    
    this.datetime = new Date(
      Number(this.date.slice(0,4)),
    Number(this.date.slice(5,7)),
    Number(this.date.slice(9,10)),
    Number(this.time.slice(0,2)),
    Number(this.time.slice(3,5))
      )
      
    
  }

  addNotification(){
    this.date= ''
    this.time = ''
  }

}
