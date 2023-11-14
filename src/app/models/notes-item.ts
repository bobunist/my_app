import { CourseContentHeader } from "./course-content"

export interface INote {
    id?: number
    description: string
    section_id: number
    subsection_id: number
    item: ( 
        CourseContentHeader
           )
}