import { ICourseSection } from "../models/course-section";

export const course1: ICourseSection[] = [
    {
        id: 1,
        title: 'Вводный курс по python',
        complete_time: "2 ч",
        subsections: [
            {
                id: 2,
                title: 'Начало пути',
                is_complete: false,
                item_type: 'LECTION',
                content: [
                    {
                        id: 3,
                        header: 'Начало пути'
                    },
                    {
                        id: 4,
                        text: 'Артём набрался решимости и пришёл на собеседование. Разговор с Антоном, тимлидом команды разработчиков, оказался нестрашным. Другие разработчики, Соня и Коля, что-то обсуждают за другим столом, иногда поглядывая на Артёма.'
                    },
                    {
                        id: 5,
                        image_url: 'https://pictures.s3.yandex.net/resources/3_1671392489.png'
                    },
                    {
                        id: 6,
                        code:
`name = 'Вася'
print('Здесь был', name)`,
                        language: 'python'
                    },
                    {
                        id: 7,
                        question: 'Что сделает эта программа?',
                        answers: ['Взломает пентагон', 'Запрашивает у пользователя имя и здоровается с ним', 'Печатает на экран сообщение "Здесь был Вася"', 'Печатает на экран сообщение "Здесь был name"'],
                        right_answer: 'Печатает на экран сообщение "Здесь был Вася"',
                        congratulation: 'Совершенно верно.',
                        regretulation: 'Это было рядом.',
                    },
                    {
                        id: 8,
                        header: 'Теперь о программах.'
                    },
                    {
                        id: 9,
                        text: `Запустите код, посмотрите на результат. Поэкспериментируйте: измените что-нибудь в коде и запустите его вновь. Если в результате экспериментов код перестанет работать — нажмите кнопку «Начать заново», исходный код будет восстановлен.`
                    },
                    {
                        id: 10,
                        start_code:
`name = 'Вася'
print('Здесь был', name)`,
                        language: 'python'
                    },
                    {
                        id: 11,
                        text:
"Вася, кажется, был вообще везде!" +
'- Первая команда: «положить в переменную `name` слово "Вася"». Программист мог записать в эту переменную любое имя или слово.' +
'- Вторая команда: «напечатать на экран сообщение "Здесь был" и то слово, которое хранится в переменной `name`».' +
"Программирование — это процесс написания таких вот команд. Разработчик пишет их, потом нажимает кнопку, и компьютер их выполняет. Вот и вся магия."
                    },
                    {
                        id: 12,
                        question: 'Как будет выглядеть программа, которая печатает на экран текст «Я молодец и, конечно же, смогу научиться программировать, если захочу»?',
                        answers: [
                            "'Я молодец и, конечно же, смогу научиться программировать, если захочу'",
                            "print('Я молодец и, конечно же, смогу научиться программировать, если захочу')",
                            "print()",
                            'print("Это задание слишком простое")'
                         ],
                        right_answer: "print('Я молодец и, конечно же, смогу научиться программировать, если захочу')",
                        congratulation: 'Тебе пора проходить собеседование!',
                        regretulation: 'Ничего страшного, ты еще обязательно успеешь это освоить.'
                    },
                    {
                        id: 13,
                        header: 'Бэкенд и фронтенд'
                    },
                    {
                        id: 14,
                        text: 
`На страницах веб-сайтов, как правило, есть текст, заголовки, иконки, картинки, кнопки, ссылки. Та часть сайта, которая видна посетителю, — это **фронтенд**, «передняя часть» сайта (от английского *front* — «передний»). Этой частью занимаются **фронтенд-разработчики**.`
                    },
                    {
                        id: 15,
                        text:
`Посетитель взаимодействует с фронтендом сайта и с его помощью отправляет **запросы** на **сервер**. Например, когда пользователь щёлкает по ссылке, на сервер отправляется запрос: «покажи мне нужную веб-страницу».`
                    },
                    {
                        id: 16,
                        example: 
` **Сервер** — это компьютер, подключённый к Сети и настроенный так, чтобы принимать запросы пользователей и возвращать им ответы. Сервер может быть расположен где угодно: в специально оборудованном дата-центре, где сотни таких серверов, или под столом у энтузиаста-одиночки.`
                    },
                    {
                        id: 17,
                        text:
`Именно на сервере работают программы, которые называют «бэкенд сайта». Эти программы выполняют множество невидимых пользователю операций: принимают и обрабатывают запросы, сохраняют информацию в базу данных, проводят вычисления, генерируют веб-страницы.
`
                    },
                    {
                        id: 18,
                        text:
`Если коротко, то фронтенд — это лицо приложения, а бэкенд — его мозг.`
                    },
                    {
                        id: 19,
                        text:
`#### Пишем бэкенд на Python
Возможно, вы храните свои файлы в Dropbox, смотрите фильмы на Netflix, слушаете музыку в Spotify или смотрите картинки в Pinterest. Бэкенд этих веб-сервисов частично или полностью написан на Python.`
                    },
                    {
                        id: 20,
                        image_url: 'https://pictures.s3.yandex.net/resources/Frame-41_1691388367.gif'
                    }
                ],
                time: '20 мин',
                url_link: '',
            },
            {
                id: 21,
                title: 'Ваш первый код на python',
                is_complete: false,
                item_type: 'LECTION',
                content: [
                    {
                        id: 22,
                        header: 'Ваш первый код на python'
                    },
                    {
                        id: 23,
                        text: 'Вывод информации — это несложно! Нажмите кнопку «Запустить код».'
                    },
                    {
                        id: 24,
                        start_code:
`print('Привет, Мир!')`,
                        language: 'python'
                    },
                    {
                        id: 25,
                        text: "Программа вывела на экран сообщение «Привет, Мир!»: Python прочитал код, увидел в нём функцию `print()` и выполнил её." 
                    },
                    {
                        id: 26,
                        text: "**Функция** — это подпрограмма, выполняющая определённые действия. Функция `print()` — это встроенная в Python подпрограмма для вывода данных на экран (или для «печати на экране», на жаргоне программистов)."
                    },
                    {
                        id: 27,
                        text: "`'Привет, Мир!'` — это текст, который функция `print()` напечатает. Функция `print()` выводит на экран любые данные, указанные в скобках после названия функции."
                    },
                    {
                        id: 28,
                        text: "Программисты называют такие данные «**аргументы**»; их (аргументы, а не программистов!) указывают в скобках после имени функции."
                    },
                    {
                        id: 29,
                        text: "В аргументе функции `print()` в коде программы, которую вы только что запускали, замените слово `Мир` на своё имя — и запустите код ещё раз."
                    },
                    {
                        id: 30,
                        image_url: 'https://pictures.s3.yandex.net/resources/S0_14_1671392721.png'
                    },
                    {
                        id: 31,
                        text: "Говорят, что аргумент *передаётся* в функцию, а функция их *принимает*. Python выполняет код, читая строку за строкой; увидев в коде имя функции с круглыми скобками, Python **вызывает** эту функцию — заставляет сработать код этой функции. При необходимости функцию можно вызывать много раз."
                    },
                    {
                        id: 32,
                        text: "Нажмите кнопку «Запустить код»."
                    },
                    {
                        id: 33,
                        text: "Python прочтёт код сверху вниз и выполнит все инструкции, которые увидит."
                    },
                    {
                        id: 34,
                        start_code:
`print('Привет, Мир!')

print('Мне тут нравится!')`,
                        language: "python"
                    },
                    {
                        id: 35,
                        header: 'Код для людей: комментарии'
                    },
                    {
                        id: 36,
                        text: "Строки, начинающиеся с символа `#` — это **комментарии**, примечания, которые автор программы пишет для других разработчиков. "
                    },
                    {
                        id: 37,
                        text: 'Python игнорирует любые символы на строчке после `#`. Обратите внимание, что комментарии автоматически выделяются цветом, это упрощает чтение.'
                    },
                    {
                        id: 38,
                        text: 'Если символом комментария скрыть часть кода — Python перестанет видеть этот код и не станет его выполнять.'
                    },
                    {
                        id: 39,
                        example: "Текст комментариев предназначен не программе, а человеку, читающему код. Читайте комментарии, в них будут инструкции для вас."
                    },
                    {
                        id: 40,
                        start_code:
`# Приветствие миру — традиционная первая строка в освоении нового языка, 
# но что-то пошло не так.
# Ниже написан вызов функции print() с аргументом 'Роботы скоро захватят мир!'
# Замените "захватят" на "спасут",
# программа станет дружелюбнее!
print('Роботы скоро захватят мир!')

print('Я твоя программа, мне тут нравится! 👾')`,
                        language: 'python'
                    },
                    {
                        id: 41,
                        example:
`В истории образования ещё не было ни одного случая, когда студенту помешала бы хорошая шпаргалка (если, конечно, её не нашли на экзамене).

Вот эта [шпаргалка](https://code.s3.yandex.net/backend-developer/conspects/py01.pdf "шпаргалка") поможет вам в работе; скачайте её и держите под рукой (а лучше всего — распечатайте, так будет удобнее). Можно и без шпаргалки, но с ней — лучше.`
                    },
                    {
                        id: 42,
                        header: 'Задание 1'
                    },
                    {
                        id: 43,
                        text :
`- С этого задания вы начинаете создавать собственного персонального помощника, вроде Алисы, Google Assistant, Siri или Alexa. Назовём её Анфиса.
- Для начала научите Анфису здороваться: код уже подготовлен, но Python не станет его выполнять, ведь он скрыт за символом комментария, «закомментирован».
- Сделайте так, чтобы Python увидел и выполнил код. Для этого уберите символ комментария и пробел в начале строки (это называют «раскомментировать» строку).`
                    },
                    {
                        id: 44,
                        start_code:
`# print('Привет, я Анфиса!')`,
                        language: "python"
                    },
                    {
                        id: 45,
                        header: 'Задание 2'
                    },
                    {
                        id: 46,
                        text :
`Анфиса поздоровалась, но для светского разговора этого маловато. Пусть Анфиса немножко расскажет о себе. `
                    },
                    {
                        id: 47,
                        text: "После строки `print('Привет, я Анфиса!')` добавьте новую строку кода, которая напечатает текст `'Я маленькая, но уже программа!'`."
                    },
                    {
                        id: 48,
                        text: "Лайфхак: функцию `print()` (да и любую функцию вообще) можно вызывать в коде сколько угодно раз."
                    },
                    {
                        id: 49,
                        start_code:
`# print('Привет, я Анфиса!')`,
                        language: "python"
                    }
                    
                ],
                time: '20 мин',
                url_link: '',
            }
        ]
    }
]
