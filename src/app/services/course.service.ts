import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { ICourseSection } from '../models/course-section'
// import { course } from '../data/course'
import { ICourseSubsection } from '../models/course-subsection'
import { overview } from '../data/overview'
import { CourseToolsOverview } from '../models/course-overview'
import { INote } from '../models/notes-item'
import { CourseContentHeader } from '../models/course-content'
import { ToolbarItem } from '../models/toolbar-item'
import { toolbar_items } from '../data/toolbar-items'
import { course1 } from '../data/course1'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private toolbar_items: ToolbarItem[] = toolbar_items

  private isToolbarOpen = new BehaviorSubject<boolean>(false)
  isToolbarOpen$ = this.isToolbarOpen.asObservable()

  private activeToolbarItem = new BehaviorSubject<ToolbarItem | undefined>(undefined)
  activeToolbarItem$ = this.activeToolbarItem.asObservable()

  private EditableNote = new BehaviorSubject<number | undefined>(undefined)
  EditableNote$ = this.EditableNote.asObservable()

  private course = new BehaviorSubject<ICourseSection[]>(course1)
  course$ = this.course.asObservable()

  private active_subsection_subject = new BehaviorSubject<ICourseSubsection>(course1[0].subsections[0])
  active_subsection$ = this.active_subsection_subject.asObservable()

  private notes = new BehaviorSubject<INote[]>([])
  notes$ = this.notes.asObservable()

  private overview: CourseToolsOverview = overview

  getActiveToolbarItem() {
    return this.activeToolbarItem$
  }

  getItems(): ToolbarItem[] {
    return this.toolbar_items
  }

  getIsToolbarOpen() {
    return this.isToolbarOpen$
  }

  setToolbarState(is_open: boolean, active_item: ToolbarItem | undefined, editableNoteId?: number) {
    this.isToolbarOpen.next(is_open)
    this.activeToolbarItem.next(active_item)
    this.EditableNote.next(editableNoteId)

  }

  startEditingNote(note_id: number) {
    this.isToolbarOpen.next(true)
    this.activeToolbarItem.next(this.toolbar_items[1])
    this.EditableNote.next(note_id)
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

  markItemForNotes(id: number, description: string) {
    let notesData = this.notes.getValue()
    const courseData: ICourseSection[] = this.course.getValue()
    let new_item: CourseContentHeader | undefined

    let section_id: number | undefined
    let subsection_id: number | undefined

    courseData.forEach(section => {
      section.subsections.forEach(subsection => {
        const contentItem = subsection.content.find(content_item => content_item.id === id)
        if (this._isCourseContentHeader(contentItem)) {
          new_item = contentItem
          section_id = section.id!!
          subsection_id = subsection.id
        }
      })
    })

    if (new_item && section_id && subsection_id) {
      let note: INote = {
        section_id: section_id,
        subsection_id: subsection_id,
        description: description,
        item: new_item,
      }



      if (notesData.indexOf(note) > -1) {
        notesData.filter(item => item !== note)
      }

      else {
        notesData.push(note)
      }

      this.notes.next(notesData)

    }
    this.isToolbarOpen.next(false)
    this.activeToolbarItem.next(undefined)
  }

  findSectionAndSubsection(sectionId: number, subsectionId: number): { section: ICourseSection | null, subsection: ICourseSubsection | null } {
    let result: { section: ICourseSection | null, subsection: ICourseSubsection | null } = { section: null, subsection: null }
  
    const foundSection: ICourseSection | undefined = this.course.getValue().find(section => section.id === sectionId)
  
    if (foundSection) {
      const foundSubsection: ICourseSubsection | undefined = foundSection.subsections.find(subsection => subsection.id === subsectionId)
      if (foundSubsection) {
        result = { section: foundSection, subsection: foundSubsection }
      }
    }
  
    return result
  }

  private _isCourseContentHeader(obj: any): obj is CourseContentHeader {
    return obj && obj.hasOwnProperty('header')
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