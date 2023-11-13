export interface CourseToolsOverview {
    sections: CourseToolsOverviewSection[],
    author_data: CourseToolsOverviewAuthorData

}

export interface CourseToolsOverviewSection {
    section_name: string
    section_content: string
}

export interface CourseToolsOverviewAuthorData {
    id: number
    name: string
    post: string
    telegram?: string
    github?: string
    youtube?: string
    description: string
}