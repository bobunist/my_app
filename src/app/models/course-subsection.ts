import {CourseContentCodeAssertation, CourseContentCodeExample, CourseContentCodeExecutor, CourseContentHeader, CourseContentImage, CourseContentQuiz, CourseContentText, CourseContentTextExample, CourseContentVideo} from './course-content'

export interface ICourseSubsection {
    id: number
    title: string
    is_complete: boolean
    item_type: keyof typeof CourseSubSectionTypes
    content: (
        CourseContentText | CourseContentQuiz |
         CourseContentTextExample | CourseContentImage |
          CourseContentVideo | CourseContentCodeExample |
           CourseContentCodeAssertation | CourseContentCodeExecutor |
            CourseContentHeader
           )[]
    time: string
    url_link: string
} 


export const CourseSubSectionTypes = {
    LECTION: 'lection',
    VIDEO: 'video',
    TASK: 'task'
} as const
