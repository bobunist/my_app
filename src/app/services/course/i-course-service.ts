import { Observable } from 'rxjs'
import { ICourseSection } from '../../models/course-section'
import { ICourseSubsection } from '../../models/course-subsection'
import { INote } from '../../models/note'
import { CourseToolsOverview } from '../../models/course-overview'
import { ToolbarItem } from '../../models/toolbar-item'
import { SelectedItem } from 'src/app/models/selected-item'
import { LectionToolsSection } from 'src/app/models/lection-tools'

export abstract class AbstractCourseService {
  abstract isToolbarOpen$: Observable<boolean>
  abstract activeToolbarItem$: Observable<ToolbarItem | undefined>
  abstract course$: Observable<ICourseSection[]>
  abstract active_section$: Observable<ICourseSection>
  abstract active_subsection$: Observable<ICourseSubsection>
  abstract notes$: Observable<INote[]>
  abstract selected_item$: Observable<SelectedItem | undefined>
  abstract lection_tools_active_section$: Observable<LectionToolsSection>

  abstract setLectionToolsActiveSection(section: LectionToolsSection): void
  abstract setSelectedItemForNote(item: SelectedItem): void
  abstract getItems(): ToolbarItem[]
  abstract setToolbarState(is_open: boolean, active_item: ToolbarItem | undefined, editableNoteId?: number): void
  abstract markSubsection(id: number): void
  abstract addNote(note: INote): void
  abstract setActiveSubsection(subsection_id: number): void
  abstract getOverview(): CourseToolsOverview
  abstract nextSubsection(): void
}
