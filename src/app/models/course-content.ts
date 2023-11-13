export type CourseContent = {
    id: number
}

export type CourseContentText = CourseContent & {
    text: string
}

export type CourseContentTextExample = CourseContent & {
    example: string
}

export type CourseContentImage = CourseContent & {
    image_url: string
}

export type CourseContentVideo = CourseContent & {
    youtube_video_id: string
}

export type CourseContentCodeExample = CourseContent & {
    code: string
    language: string
    output?: string
}

export type CourseContentQuiz = CourseContent & {
    question: string
    answers: string[]
    right_answer: string
    congratulation?: string
    regretulation?: string
}


export type CourseContentCodeAssertation = CourseContent & {
    code: string
    // You should put right value between encode rule like this: "console.log(|!@#header!@#);"
    encode_rule: string
    language: string
}

export type CourseContentCodeExecutor = CourseContent & {
    start_code: string
    right_output?: string
    assertation_link?: string
    language: string
}
