import { Component, OnInit, OnDestroy } from '@angular/core';
import { LectionToolsSection } from 'src/app/models/lection-tools';
import { AbstractCourseService } from 'src/app/services/course/i-course-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lection-tools',
  templateUrl: './lection-tools.component.html',
  styleUrls: ['./lection-tools.component.scss']
})
export class LectionToolsComponent implements OnInit, OnDestroy {
  LectionToolsSection = LectionToolsSection;
  active_section: LectionToolsSection;
  private subscription: Subscription;

  constructor(
    private courseService: AbstractCourseService
  ) {}

  ngOnInit(): void {
    this.subscription = this.courseService.lection_tools_active_section$.subscribe(data => {
      this.active_section = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getEnumValues(enumObj: any): string[] {
    return Object.values(enumObj);
  }

  setActiveSection(sectionName: string) {

    if (sectionName == 'Обзор') this.courseService.setLectionToolsActiveSection(LectionToolsSection.Overview);
    if (sectionName == 'Заметки') this.courseService.setLectionToolsActiveSection(LectionToolsSection.Notes);
    if (sectionName == 'Обсуждения') this.courseService.setLectionToolsActiveSection(LectionToolsSection.Discussions);
    if (sectionName == 'Дополнительные материалы') this.courseService.setLectionToolsActiveSection(LectionToolsSection.AdditionalMaterials);
  }
}
