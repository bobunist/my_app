import { AfterViewInit, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { additionalData } from 'src/app/data/additional-data';

@Component({
  selector: 'lection-tools-additional-data',
  templateUrl: './additional-data.component.html',
  styleUrls: ['./additional-data.component.scss']
})
export class AdditionalDataComponent implements AfterViewInit {
  text = additionalData



  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {

    this.adjustTextareaHeight()
    
  }

  adjustTextareaHeight() {
    const items = document.querySelectorAll('a');

  }

}

