import { IUser } from "../models/user";

export const users: IUser[] = [
    {
        id: 1,
        avatar: 'https://sun9-79.userapi.com/impg/2dkzaEsDjd7nn6nj4rXwna6KneB9p5GiUCwqaw/0Ff6gDZtp58.jpg?size=1440x1440&quality=95&sign=b12a3a56f6abb9c8210d96405a718d63&type=album',
        role: 'Преподаватель',
        post: 'Python/TypeScript Developer',
        about: 'Привет, я разработчик-тимлид в составе группы энтузиастов создающей проект инновационной LMS системы. Для фротенда мы используем Angular, для бекенда FastAPI. Нам еще много что хотелось бы рассказать, но это еще впереди.',
        github: 'https://github.com/bobunist',
        telegram: 'https://t.me/kongzi1'
    },
    {
        id: 2,
        avatar: 'https://www.fotoprizer.ru/img/12959_orig.jpg',
        role: 'Студент',
        post: '',
        about: ''
    },
    {
        id: 3,
        avatar: 'https://oir.mobi/uploads/posts/2019-12/1576093302_10-31.jpg',
        role: 'Студент',
        post: '',
        about: ''
    }
]
