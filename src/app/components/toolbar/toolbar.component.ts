import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from 'src/app/models/toolbar-item';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  items: item[]
  is_open: boolean
  active_item: item | undefined

  constructor(
    private courseService: AbstractCourseService
  ){}

  ngOnInit(): void {
    this.items = this.courseService.getItems()
    this.courseService.isToolbarOpen$.subscribe(is_open => this.is_open = is_open)
    
    this.courseService.activeToolbarItem$.subscribe(active_item => this.active_item = active_item)
  }

  swapIsOpen(){
    this.courseService.setToolbarState(
      !this.is_open,
      undefined,
      undefined
    )
  }


  setactiveItem(item: ToolbarItem){
    this.courseService.setToolbarState(
      this.is_open,
      item
    )
  }


}

type item ={
  icon: string
  text_hint: string
}