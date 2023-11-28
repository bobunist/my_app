import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ICourseSection } from '../../models/course-section'
import { ICourseSubsection } from '../../models/course-subsection'
import { overview } from '../../data/overview'
import { CourseToolsOverview } from '../../models/course-overview'
import { INote } from '../../models/note'
import { ToolbarItem } from '../../models/toolbar-item'
import { toolbar_items } from '../../data/toolbar-items'
import { course1 } from '../../data/course1'
import { AbstractCourseService } from './i-course-service'
import { SelectedItem } from 'src/app/models/selected-item'
import { CourseContentText } from 'src/app/models/course-content'

@Injectable({
  providedIn: 'root'
})
export class CourseService extends AbstractCourseService {

  private toolbar_items: ToolbarItem[] = toolbar_items

  private isToolbarOpen = new BehaviorSubject<boolean>(false)
  isToolbarOpen$ = this.isToolbarOpen.asObservable()

  private activeToolbarItem = new BehaviorSubject<ToolbarItem | undefined>(undefined)
  activeToolbarItem$ = this.activeToolbarItem.asObservable()

  private course = new BehaviorSubject<ICourseSection[]>(course1)
  course$ = this.course.asObservable()

  private active_section = new BehaviorSubject<ICourseSection>(course1[0])
  active_section$ = this.active_section.asObservable()

  private active_subsection = new BehaviorSubject<ICourseSubsection>(course1[0].subsections[0])
  active_subsection$ = this.active_subsection.asObservable()

  private notes = new BehaviorSubject<INote[]>([])
  notes$ = this.notes.asObservable()

  private overview: CourseToolsOverview = overview

  private selected_item = new BehaviorSubject<SelectedItem | undefined>(undefined)
  selected_item$ = this.selected_item.asObservable()

  setSelectedItemForNote(item: SelectedItem): void {
    this.selected_item.next(item)
    this.setToolbarState(true, this.toolbar_items[2])
    console.log(item);
  }

  getItems(): ToolbarItem[] {
    return this.toolbar_items
  }

  setToolbarState(is_open: boolean, active_item: ToolbarItem | undefined) {
    this.isToolbarOpen.next(is_open)
    this.activeToolbarItem.next(active_item)
  }


  markSubsection(id: number) {
    const currentData = this.course.getValue()
    const updatedData: ICourseSection[] = currentData.map(section => {

      section.subsections.map(subsection => {
        if (subsection.id === id) {
          subsection.is_complete = !subsection.is_complete
        }
        return subsection
      }
      )
      return section
    }
    )

    this.course.next(updatedData)

  }

  _isCourseContentText(item: any): item is CourseContentText {
    return item && item.hasOwnProperty('text');
  }


  addNote(note: INote): void {
    const currentNotes = this.notes.getValue();
    const updatedNotes = [...currentNotes, note];
    this.notes.next(updatedNotes);

    let course: ICourseSection[] = this.course.getValue().map(
      section => {
        section.subsections.map(
          subsection => {
            subsection.content.map(
              content_item => {
                if (content_item.id === note.item_id && this._isCourseContentText(content_item)) {
                  let start_index = content_item.text.indexOf(note.selected_text)
                  let selected_text_len = note.selected_text.length

                  let first_slice = content_item.text.slice(0, start_index)
                  let last_slice = content_item.text.slice(start_index + selected_text_len, content_item.text.length)

                  let new_text =

                    first_slice +
                    // '<span style="background-color: yellow;">[' + note.selected_text + `]` + `("${note.description}")` + `</span>`
                    `<span title="${note.description}" style="background-color: yellow; cursor: help;">` + note.selected_text + `</span>`
                    + last_slice

                  content_item.text = new_text

                }
                return content_item
              }
            )
            return subsection
          }
        )
        return section
      }
    )

    this.course.next(course)

  }


  // findSectionAndSubsection(sectionId: number, subsectionId: number): { section: ICourseSection | null, subsection: ICourseSubsection | null } {
  //   let result: { section: ICourseSection | null, subsection: ICourseSubsection | null } = { section: null, subsection: null }

  //   const foundSection: ICourseSection | undefined = this.course.getValue().find(section => section.id === sectionId)

  //   if (foundSection) {
  //     const foundSubsection: ICourseSubsection | undefined = foundSection.subsections.find(subsection => subsection.id === subsectionId)
  //     if (foundSubsection) {
  //       result = { section: foundSection, subsection: foundSubsection }
  //     }
  //   }

  //   return result
  // }

  setActiveSubsection(subsection_id: number) {
    let new_active_subsection
    let new_active_section
    this.course.getValue().map(section =>
      section.subsections.map(subsection => {
        if (subsection.id == subsection_id) {
          new_active_subsection = subsection
          new_active_section = section
        }
      }))
    this.active_subsection.next(new_active_subsection!)
    this.active_section.next(new_active_section!)
  }


  getOverview(): CourseToolsOverview {
    return this.overview
  }

  // сейчас работает ток в рамках одной секции, надо оформить переход между секциями в будущем
  nextSubsection(): void {
    let prev: ICourseSubsection
    let next: ICourseSubsection
    let new_active_subsection
    this.course.getValue().map(course => {

      course.subsections.map(subsection => {
        if (prev && !next) {
          next = subsection
        }
        if (subsection.id == this.active_subsection.getValue().id && !prev) prev = subsection
      })
    }
    )
    if (next!) {
      this.active_subsection.next(next!)
      window.scrollTo(0, 0);
    }
    if (!prev!.is_complete) this.markSubsection(prev!.id)
    
  }

}