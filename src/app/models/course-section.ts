import { ICourseSubsection } from "./course-subsection"

export interface ICourseSection {
    id?: number
    title: string
    complete_time: string
    items: ICourseSubsection[]
} 