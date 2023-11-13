import { Component, Input, AfterViewInit, ViewChild, ElementRef, Renderer2, HostListener, ChangeDetectorRef } from '@angular/core';
import { CourseContentVideo } from 'src/app/models/course-content';

@Component({
  selector: 'lection-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements AfterViewInit {
  API_KEY = 'AIzaSyDHq_ErP58jWiwsXNmn3kzPa0S50LiZNsQ'


  @Input() video: CourseContentVideo;
  @ViewChild('videoContainer', { static: true }) videoContainer: ElementRef;

  videoPlayerWidth: number;
  videoPlayerHeight: number;
  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateVideoPlayerWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateVideoPlayerWidth();
  }

  private updateVideoPlayerWidth() {
    const parentWidth = this.videoContainer.nativeElement.offsetWidth;
    this.videoPlayerWidth = parentWidth;
    this.videoPlayerHeight = (parentWidth  / 16) * 9;

    const tag = this.renderer.createElement('script');
    tag.src = `https://www.youtube.com/iframe_api?key=${this.API_KEY}`;
    this.renderer.appendChild(document.body, tag);

    this.cdr.detectChanges();
  }
}
