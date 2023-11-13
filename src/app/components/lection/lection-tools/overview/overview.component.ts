import { Component, OnInit } from '@angular/core';
import { CourseToolsOverview } from 'src/app/models/course-overview';
import { IUser } from 'src/app/models/user';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'lection-tools-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  overview: CourseToolsOverview
  author: IUser

  constructor(
    private courseService: CourseService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.overview = this.courseService.getOverview()
    this.author = this.userService.getUser(this.overview.author_data.id)
  }

  openNewWindow(url?: string) {
    
    window.open(url, '_blank');
  }
}
