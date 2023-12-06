import { Injectable } from '@angular/core'
import { BehaviorSubject, never } from 'rxjs'
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
import { LectionToolsSection } from 'src/app/models/lection-tools'

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

  
  private lection_tools_active_section = new BehaviorSubject<LectionToolsSection>(LectionToolsSection.Overview)
  lection_tools_active_section$ = this.lection_tools_active_section.asObservable()

  setLectionToolsActiveSection(section: LectionToolsSection){
    this.lection_tools_active_section.next(section)
  }

  setSelectedItemForNote(item: SelectedItem): void {
    this.selected_item.next(item)
    this.setToolbarState(true, this.toolbar_items[2])
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
    let course: ICourseSection[] = this.course.getValue().map(
      section => {
        section.subsections.map(
          subsection => {
            subsection.content.map(
              content_item => {
                if (content_item.id === note.item_id && this._isCourseContentText(content_item)) {

                  const regex = /<span\s+id="([^"]+)"/;
                  const match_span = content_item.text.match(regex);
                  let spanId = match_span ? match_span[1] : null

                  let match_id = spanId?.match(/marked(\d+)/)

                  let extractedId = match_id ? match_id[0] : null

                  let just_id = extractedId ? parseInt(extractedId.slice(6)) : null

                  let updatedNotes = [...currentNotes];

                  updatedNotes = updatedNotes.filter(note => note.item_id != just_id)

                  updatedNotes = [...updatedNotes, note]

                  this.notes.next(updatedNotes);

                  content_item.text = content_item.text.replace(/<span.*?>|<\/span>/g, '');

                  let newString = this.replaceSubString(content_item, note)

                  content_item.text = newString;


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

  replaceSubString(content_item: CourseContentText, note: INote): string {
    let result = '';
    let substringCopy = note.selected_text + '';
    let last = -1;
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < content_item.text.length; i++) {
      if (substringCopy.length === 0) {
        last = i;
        break;
      }

      if (content_item.text[i] === '`' || content_item.text[i] === '*') {
        if (startIndex === -1) {
          startIndex = i;
        }
        endIndex = i
        result += content_item.text[i];
      } else if (content_item.text[i] === substringCopy[0]) {
        if (startIndex === -1) {
          startIndex = i;
        }
        endIndex = i
        result += content_item.text[i];
        substringCopy = substringCopy.slice(1);
      } else {
        endIndex = -1
        startIndex = -1;
        substringCopy = note.selected_text + '';
        result = '';
      }
    }

    if (last <= content_item.text.length - 1) {
      if (content_item.text[last] === '`') {
        result += content_item.text[last];
        endIndex = last + 1;
      }

      if (content_item.text[last] === '*') {
        result += content_item.text[last];
        endIndex = last;

        if (last <= content_item.text.length - 2) {
          if (content_item.text[last + 1] === '*') {
            endIndex = last + 1;
            result += content_item.text[last + 1];
          }
        }
      }
    }
    const newString = content_item.text.substring(0, startIndex) +
      `<span id="marked${content_item.id}" title="${note.description}" subsection_id="${note.subsection_id}" style="background-color: yellow; cursor: help;">${content_item.text.slice(startIndex, endIndex + 1)}</span>` + content_item.text.slice(endIndex + 1, content_item.text.length);
    return newString;
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