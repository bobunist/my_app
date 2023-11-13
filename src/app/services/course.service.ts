import { Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICourseSection } from '../models/course-section';
import { course } from '../data/course';
import { ICourseSubsection } from '../models/course-subsection';
import { overview } from '../data/overview';
import { CourseToolsOverview } from '../models/course-overview';
import { INotes } from '../models/notes-item';
import { CourseContent } from '../models/course-content';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course = new BehaviorSubject<ICourseSection[]>(course)
  course$ = this.course.asObservable()

  private active_subsection_subject = new BehaviorSubject<ICourseSubsection>(course[0].items[2])
  active_subsection$ = this.active_subsection_subject.asObservable()

  private notes = new BehaviorSubject<INotes[]>([])
  notes$ = this.notes.asObservable()

  private overview: CourseToolsOverview = overview

  markSubsection(id: number) {
    const currentData = this.course.getValue()
    const updatedData: ICourseSection[] = currentData.map(section => {

      section.items.map(item => {
        if (item.id === id) {
          item.is_complete = !item.is_complete
        }
        return item
      }
      )
      return section
    }
    )

    this.course.next(updatedData)

  }

  markItemForNotes(id: number) {
    let notesData = this.notes.getValue();
    const courseData: ICourseSection[] = this.course.getValue();
    let new_item: CourseContent | undefined;
  
    courseData.forEach(section => {
      section.items.forEach(item => {
        const contentItem = item.content.find(content_item => content_item.id === id);
        if (contentItem) {
          new_item = contentItem;
        }
      });
    });
  
    if (new_item) {
      let note: INotes = {
        description: '',
        item: new_item,
      };
  
      notesData.push(note);
      this.notes.next(notesData);
    }
  }


  setActiveSubsection(subsection: ICourseSubsection) {
    this.active_subsection_subject.next(subsection)
  }

  getCourseTable(): Observable<ICourseSection[]> {
    return this.course$
  }

  getActiveSubsection(): Observable<ICourseSubsection> {
    return this.active_subsection$
  }

  getOverview(): CourseToolsOverview {
    return this.overview
  }



}
