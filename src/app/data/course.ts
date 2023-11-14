import { ICourseSection } from "../models/course-section";

export const course: ICourseSection[] = [
    {
        id: 1,
        title: 'Раздел 1: Введение. Основы разработки на python',
        complete_time: '1 ч 5 мин',
        subsections: [
            {
                id: 1,
                title: 'Зачем нужен python',
                item_type: 'LECTION',
                is_complete: false,
                time: '1 мин',
                content: [
                    {
                        id: 0,
                        text: 
                        
`### Основные направления
В большинстве случаев python используют для бэкенда — программной стороны веб-сайтов, то есть их «мозгов». Бэкенд отвечает за хранение и обработку данных.
`
                    },
                    {
                        id: 1,
                        example: 
`### Например
- Чтобы войти в личный кабинет на сайте, алгоритм сверяет введённый логин и пароль с эталонами в базе и, если всё в порядке, пропускает в личный кабинет.
- Или, чтобы ускорить поиск товаров по интернет-магазину, надо составить точный запрос в базу данных, избавившись от лишних вариантов.
`
                    },
                    {
                        id: 2,
                        text: 
`А ещё Python-разработчик может заниматься нагруженными сервисами, обработкой больших данных, обучением нейросетей и научными вычислениями. Однако этому нужно учиться отдельно. В нашей программе — только про веб-бэкенд.
Неоспоримое преимущество «пайтона» — простота и лаконичность кода. Вместе они делают разработку быстрой и более простой в поддержке, а значит, и более дешёвой. Любой человек, немного знающий английский, может читать и понимать код Python.
Например, чтобы вывести текст «Привет, мир!» на Java, нужно написать пять строк не очень понятного кода:`
                    },
                    {
                        id: 3,
                        code: 
`public class Example {
    public static void main(String[] args) {
        System.out.println("Привет, мир!");
    }
}
`,
                        language: 'java'
                    },
                    {
                        id: 4,
                        text: 'А на Python — всего одну элементарную:'
                    },
                    {
                        id: 5,
                        code: `print "Привет, мир!"`,
                        language: 'python'
                    },
                    {
                        id: 6,
                        youtube_video_id: 'JVJXoF89f-c'
                    }
                ],
                url_link: 'link to backend idk why'
            },
            {
                id: 2,
                title: 'Среда разработки',
                item_type: 'LECTION',
                is_complete: false,
                content: [
                    {
                        id: 7,
                        text: 
`### Выбор среды разработки
Выбор среды разработки влияет на производительность, комфорт и эффективность работы разработчика, а также на скорость разработки программного обеспечения. Это влияет на выбор инструментов, доступность расширений и поддержку языков. Однако выбор среды разработки не влияет на качество создаваемого кода, архитектуру приложения или его конечную производительность. Качественное программное обеспечение зависит от знаний и навыков разработчика, а также от процессов разработки, тестирования и архитектурных решений. В итоге, правильный выбор среды важен, но не является гарантией успешного проекта, который также требует усилий и экспертизы.`
                    },
                    {
                        id: 8,
                        text: 
`### Что Такое PyCharm?
Если вы знакомы с PyCharm, вы, наверное, знаете, что это IDE для разработчиков Python.
Это IDE, разработанная JetBrains, компанией, стоящей за IntelliJ IDEA. Идея Pycharm заключалась в том, чтобы предоставить простую, но мощную IDE, которая значительно упростила бы кодирование для разработчиков.
`,
                    },
                    {
                        id: 9,
                        example: 
`### Умная Навигация По Коду
С PyCharm вы можете перемещаться по коду благодаря умным фрагментам. Это позволяет писать меньше кода и использовать существующие фрагменты для выполнения более сложных задач.
Вы можете использовать стрелки на клавиатуре для быстрой навигации по коду. Это полезно, когда вы работаете над проектом с большим количеством файлов и не хотите просматривать их один за другим.
### Инструменты Базы Данных
Вы можете использовать PyCharm для работы с базами данных, такими как MySQL, SQLite и PostgreSQL. Это отличный инструмент для людей, которым необходимо разрабатывать веб-приложения или мобильные приложения, использующие базы данных.
### Отладка Python
Одной из наиболее заметных особенностей PyCharm является инструмент отладки Python. Это позволяет запускать ваш код в отладчике, что является отличным способом узнать, что происходит в вашем коде.
Вы можете установить точки останова и проверить переменные.
### Языковая Поддержка
PyCharm доступен для более чем 30 языков программирования. Сюда входят Python, Ruby, C#, Java, C, C++, Go, Objective-C, JavaScript, PHP, Perl, Swift и многие другие.
PyCharm также обеспечивает завершение кода для конкретного языка, что позволяет увидеть, какие методы доступны на конкретном языке.
Вы можете использовать это, чтобы быстро найти стратегии, которые вы можете использовать для решения своих проблем с кодированием.
### Живое Редактирование
Вы можете использовать живое редактирование для редактирования кода во время его написания. Это похоже на то, что вы увидите в редакторе кода, но оно доступно в режиме реального времени.
Live Edit позволяет изменять код без сохранения файла. Это отличный способ изменить код во время работы над ним.
Вы можете использовать его для редактирования, запуска и отладки кода. Он также обеспечивает рефакторинг кода и предложения по коду, которые могут помочь вам создать лучший код.
Это отличный способ проверить свой код и посмотреть, как он работает. Вы также можете изменить свой код и сохранить его на локальный диск.
`
                    },
                    {
                        id: 10,
                        text: 
`### Что Такое VS-Код?
VSCode это легкий и мощный редактор кода
Майкрософт создал его. Идея VS Code заключалась в том, чтобы предоставить простой, но мощный редактор, который бы значительно облегчил кодирование для разработчиков.
VS Code можно использовать совершенно бесплатно. Он полностью с открытым исходным кодом и доступен по лицензии MIT. Вы можете установить его на свои устройства и использовать, не тратя ни копейки.
Последняя версия доступна для Windows, macOS, Linux и Android.
Его скачали более 3.6 миллионов раз, что свидетельствует о его популярности среди разработчиков.`
                    },
                    {
                        id: 11,
                        example: 
`### Расширяемый И Настраиваемый
VS Code — это настраиваемый редактор кода. Он имеет множество встроенных функций, которые можно легко использовать для создания собственного пользовательского интерфейса.
Например, вы можете изменить тему редактора, изменить цвета, добавить собственные сочетания клавиш и так далее.
VS Code имеет встроенный магазин расширений. Вы можете использовать это для установки расширений, которые предоставят вам дополнительные функции, и добавить плагины в редактор, чтобы добавить другие функции.
Некоторые из самых популярных плагинов включают поддержку Markdown, интеграцию с GitHub, отладку и контроль версий.
### Познакомьтесь С IntelliSense
IntelliSense — это функция завершения кода, которая поможет вам писать код быстрее.
Вы можете использовать его, чтобы найти имя метода, переменной или класса, а затем выбрать его. Он предоставит вам список доступных опций и их описания, а также сделает возможным поиск определенной строки.
### Легкий И Быстрый
VS Code легкий и требует минимального объема памяти. Это кроссплатформенный редактор кода, который работает на Windows, macOS, Linux и Android.
Он доступен как в 32-битной, так и в 64-битной версиях.id: 12,
### Встроенные Команды Git
Git - это контроль версий система, которая используется для хранения кода. Многие разработчики используют его для управления своими проектами.
VS Code поставляется со встроенными командами Git. Вы можете использовать его для проверки конкретной фиксации, отправки кода в удаленный репозиторий, веток, фиксации, слияния и т. д.
### Слишком Много Редакторов Кода
Как разработчик, вы будете иметь дело со многими языками программирования. Возможно, вы используете несколько редакторов для написания кода. Становится сложно управлять всеми редакторами и их конфигурациями.
С VS Code вам не придется об этом беспокоиться. Вы можете написать свой код на любом поддерживаемом языке программирования, и он автоматически определит язык и отобразит его в редакторе.`
                    }
                ],
                time: '4 мин',
                url_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 3,
                title: 'Первая практика',
                item_type: 'LECTION',
                is_complete: false,
                time: '12 мин',
                content: [
                    {
                        id: 1,
                        header: 'Тестовый заголовок'
                    },
                    {
                        id: 12,
                        text: 
`### Начало пути
Артём набрался решимости и пришёл на собеседование. Разговор с Антоном, тимлидом команды разработчиков, оказался нестрашным. Другие разработчики, Соня и Коля, что-то обсуждают за другим столом, иногда поглядывая на Артёма.
`
                    },
                    {
                        id: 13,
                        code: 
`name = 'Вася'
print('Здесь был', name)`,
                        language: 'python'
                    },
                    {
                        id: 14,
                        question: 'Вот кусок кода на языке Python; скажи, что он, по-твоему, сделает?',
                        answers: [
                            'Взломает сайт Пентагона',
                            'Запрашивает у пользователя имя и здоровается с ним',
                            'Печатает на экран сообщение "Здесь был Вася"',
                            'Печатает на экран сообщение "Здесь был name"'
                        ],
                        right_answer: 'Печатает на экран сообщение "Здесь был Вася"',
                        congratulation: 'Совершенно верно',
                        regretulation: 'Ничего страшного, повезет в другой раз'
                    },
                    {
                        id: 15,
                        text: 
`Запустите код, посмотрите на результат. Поэкспериментируйте: измените что-нибудь в коде и запустите его вновь. Если в результате экспериментов код перестанет работать — нажмите кнопку «Начать заново», исходный код будет восстановлен.
`
                    },
                    {
                        id: 16,
                        start_code: 
`name = 'Вася'
print('Здесь был', name)`,
                        language: 'python'
                    },
                    {
                        id: 17,
                        example:
`Первая команда: «положить в переменную name слово "Вася"». Программист мог записать в эту переменную любое имя или слово.
Вторая команда: «напечатать на экран сообщение "Здесь был" и то слово, которое хранится в переменной name».` 
                    },
                    {
                        id: 18,
                        text: '### И еще один вопрос'
                    },
                    {
                        id: 19,
                        question: 'Как будет выглядеть программа, которая печатает на экран текст «Я молодец и, конечно же, смогу научиться программировать, если захочу»?',
                        answers: [
                            "'Я молодец и, конечно же, смогу научиться программировать, если захочу'",
                            "print('Я молодец и, конечно же, смогу научиться программировать, если захочу')",
                            'print()',
                            'print("Это задание слишком простое")'
                        ],
                        right_answer: "print('Я молодец и, конечно же, смогу научиться программировать, если захочу')",
                        congratulation : 'Вот и я думаю, что у тебя всё получится: ответ правильный! Приходи завтра на работу и начинай писать код!',
                        regretulation: 'В другой раз получится'
                    }
                ],
                url_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                id: 4,
                title: 'Переменные и типы данных',
                item_type: 'LECTION',
                is_complete: false,
                time: '19 мин',
                content: [
                    {
                        id: 20,
                        text: 
`### Переменные
Переменные предназначены для хранения данных. Название переменной в Python должно начинаться с алфавитного символа или со знака подчеркивания и может содержать алфавитно-цифровые символы и знак подчеркивания.
Например, создадим переменную:
`
                    },
                    {
                        id: 21,
                        code: `name = "Вася"`,
                        language: 'python'
                    },
                    {
                        id: 22,
                        text: 
`Здесь определена переменная name, которая хранит строку "Tom".
В пайтоне применяется два типа наименования переменных: camel case и underscore notation.
Camel case подразумевает, что каждое новое подслово в наименовании переменной начинается с большой буквы. Например:
`
                    },
                    {
                        id: 23,
                        code: 'userName = "Tom"',
                        language: 'python'
                    },
                    {
                        id: 24,
                        text: 
`Underscore notation подразумевает, что подслова в наименовании переменной разделяются знаком подчеркивания. Например:
`
                    },
                    {
                        id: 25,
                        code: 'user_name = "Tom"',
                        language: 'python'
                    },
                    {
                        id: 26,
                        text: 'И также надо учитывать регистрозависимость, поэтому переменные name и Name будут представлять разные объекты.'
                    },
                    {
                        id: 27,
                        code: 
`# две разные переменные
name = "Tom"
Name = "Tom"`,
                        language: 'python'
                    },
                    {
                        id: 28,
                        text: 'Определив переменную, мы можем использовать в программе. Например, попытаться вывести ее содержимое на консоль с помощью встроенной функции print:'
                    },
                    {
                        id: 29,
                        code: 
`name = "Tom"  # определение переменной name
print(name)   # вывод значения переменной name на консоль`,
                        language: 'python'
                    },
                    {
                        id: 30,
                        text: 'Например, определение и применение переменной в среде PyCharm:'
                    },
                    {
                        id: 31,
                        image_url: 'https://metanit.com/python/tutorial/pics/2.2.png'
                    },
                    {
                        id: 32,
                        text: 'Отличительной особенностью переменной является то, что мы можем менять ее значение в течение работы программы:'
                    },
                    {
                        id: 33,
                        code: 
`name = "Tom"  # переменной name равна "Tom"
print(name)   # выводит: Tom
name = "Bob"  # меняем значение на "Bob"
print(name)   # выводит: Bob`,
                        language: 'python'
                    },
                    {
                        id: 34,
                        text:
`### Типы данных
Переменная хранит данные одного из типов данных. В Python существует множество различных типов данных. В данном случае рассмотрим только самые базовые типы: bool, int, float, complex и str.
### Логические значения
Тип bool представляет два логических значения: True (верно, истина) или False (неверно, ложь). Значение True служит для того, чтобы показать, что что-то истинно. Тогда как значение False, наоборот, показывает, что что-то ложно. Пример переменных данного типа:
`
                    },
                    {
                        id: 35,
                        code: 
`isMarried = False
print(isMarried)    # False
 
isAlive = True
print(isAlive)      # True`,
                        language: 'python'
                    },
                    {
                        id: 36,
                        text:
`### Целые числа
Тип int представляет целое число, например, 1, 4, 8, 50. Пример
`
                    },
                    {
                        id: 37,
                        code: 
`age = 21
print("Возраст:", age)    # Возраст: 21
 
count = 15
print("Количество:", count) # Количество: 15`,
                        language: 'python'
                    },
                    {
                        id: 38,
                        text:
`По умолчанию стандартные числа расцениваются как числа в десятичной системе. Но Python также поддерживает числа в двоичной, восьмеричной и шестнадцатеричной системах.
Для указания, что число представляет двоичную систему, перед числом ставится префикс **0b**, для восьмиричной префикс **0o**, а для шестнадцатеричной **0x**:
`
                    },
                    {
                        id: 39,
                        code: 
`a = 0b11
b = 0o13
c = 0x21
print(a)    # 3 в десятичной системе
print(b)    # 11 в восьмеричной системе
print(c)    # 33 в шестнадцатеричной системе
`,
                        language: 'python'
                    },
                    {
                        id: 40,
                        text:
`Стоит отметить, что в какой-бы системе мы не передали число в функцию print для вывода на консоль, оно по умолчанию будет выводиться в десятичной системе.
### Дробные числа
Тип float представляет число с плавающей точкой, например, 1.2 или 34.76. В качесте разделителя целой и дробной частей используется точка.`
                    },
                    {
                        id: 41,
                        code: 
`height = 1.68
pi = 3.14
weight = 68.
print(height)   # 1.68
print(pi)       # 3.14
print(weight)   # 68.0
`,
                        language: 'python'
                    },
                    {
                        id: 42,
                        text:
`Число с плавающей точкой можно определять в экспоненциальной записи:`
                    },
                    {
                        id: 43,
                        code: 
`x = 3.9e3
print(x)  # 3900.0
 
x = 3.9e-3
print(x)  # 0.0039
`,
                        language: 'python'
                    },
                    {
                        id: 44,
                        text:
`Число float может иметь только 18 значимых символов. Так, в данном случае используются только два символа - 3.9. И если число слишком велико или слишком мало, то мы можем записывать число в подобной нотации, используя экспоненту. Число после экспоненты указывает степень числа 10, на которое надо умножить основное число - 3.9.

### Комплексные числа
Тип complex представляет комплексные числа в формате вещественная_часть+мнимая_частьj - после мнимой части указывается суффикс j`
                    },
                    {
                        id: 45,
                        code: 
`complexNumber = 1+2j
print(complexNumber)   # (1+2j)
`,
                        language: 'python'
                    },
                    {
                        id: 46,
                        text: 
'### Строки'+ `
` + 'Тип **str** представляет строки. Строка представляет последовательность символов, заключенную в одинарные или двойные кавычки, например `"hello"` и `' + "'hello'`. В Python 3.x строки представляют набор символов в кодировке Unicode"

                    },
                    {
                        id: 47,
                        code: 
`message = "Hello World!"
print(message)  # Hello World!
 
name = 'Tom'
print(name)  # Tom
`,
                        language: 'python'
                    },
                    {
                        id: 48,
                        text: 
`При этом, если строка имеет много символов, ее можно разбить на части и эти части разместить на разных строках кода. В этом случае вся строка заключается в круглые скобки, а ее отдельные части - в кавычки:`
                    },
                    {
                        id: 49,
                        code: 
`text = ("Laudate omnes gentes laudate "
"Magnificat in secula ")
print(text)
`,
                        language: 'python'
                    },
                    {
                        id: 50,
                        text: "Если же мы хотим определить многострочный текст, то такой текст заключается в тройные двойные или одинарные кавычки:"
                    },
                    {
                        id: 51,
                        code: 
`'''
Это комментарий
'''
text = '''Laudate omnes gentes laudate
Magnificat in secula
Et anima mea laudate
Magnificat in secula 
'''
print(text)
`,
                        language: 'python'
                    },
                    {
                        id: 52,
                        text: 
`### Управляющие последовательности в строке
Строка может содержать ряд специальных символов - управляющих последовательностей. Некоторые из них:

- \\: позволяет добавить внутрь строки слеш

- \': позволяет добавить внутрь строки одинарную кавычку

- \": позволяет добавить внутрь строки двойную кавычку

- \n: осуществляет переход на новую строку

- \t: добавляет табуляцию (4 отступа)

Применим несколько последовательностей:`
                    },
                    {
                        id: 53,
                        code: 
`text = "Message:\n\"Hello World\""
print(text)
`,
                        output:
`Message:
"Hello World"`,
                        language: 'python'
                    },
                    {
                        id: 54,
                        text: 'Хотя подобные последовательности могут нам помочь в некоторых делах, например, поместить в строку кавычку, сделать табуляцию, перенос на другую строку. Но они также могут и мешать. Здесь переменная path содержит некоторый путь к файлу. Однако внутри строки встречаются символы "\n", которые будут интерпретированы как управляющая последовательность. Так, мы получим следующий консольный вывод:'
                    },
                    {
                        id: 55,
                        code: 
`path = "C:\python\name.txt"
print(path)
`,
                        output:
`C:\python
ame.txt`,
                        language: 'python'
                    },
                    {
                        id: 56,
                        text:
`Чтобы избежать подобной ситуации, перед строкой ставится символ r`
                    },
                    {
                        id: 57,
                        code: 
`path = "C:\python\name.txt"
print(path)
`,
                        language: 'python'
                    },
                    {
                        id: 58,
                        text:
`### Вставка значений в строку
Python позволяет встравивать в строку значения других переменных. Для этого внутри строки переменные размещаются в фигурных скобках {}, а перед всей строкой ставится символ f:
`
                    },
                    {
                        id: 59,
                        code: 
`userName = "Tom"
userAge = 37
user = f"name: {userName}  age: {userAge}"
print(user)   # name: Tom  age: 37
`,
                        language: 'python'
                    },
                    {
                        id: 60,
                        text:
`В данном случае на место {userName} будет вставляться значение переменной userName. Аналогично на вместо {userAge} будет вставляться значение переменной userAge.

### Динамическая типизация
Python является языком с динамической типизацией. А это значит, что переменная не привязана жестко к определенному типу.

Тип переменной определяется исходя из значения, которое ей присвоено. Так, при присвоении строки в двойных или одинарных кавычках переменная имеет тип str. При присвоении целого числа Python автоматически определяет тип переменной как int. Чтобы определить переменную как объект float, ей присваивается дробное число, в котором разделителем целой и дробной части является точка.

При этом в процессе работы программы мы можем изменить тип переменной, присвоив ей значение другого типа:`
                    },
                    {
                        id: 61,
                        code: 
`userId = "abc"  # тип str
print(userId)
 
userId = 234  # тип int
print(userId)
`,
                        language: 'python'
                    },
                    {
                        id: 62,
                        text: 'С помощью встроенной функции type() динамически можно узнать текущий тип переменной:'
                    },
                    {
                        id: 63,
                        code: 
`userId = "abc"      # тип str
print(type(userId)) # <class 'str'>
 
userId = 234        # тип int
print(type(userId)) # <class 'int'>
`,
                        language: 'python'
                    },
                ],
                url_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
        ]
    },
    // {
    //     id: 2,
    //     title: 'Раздел 2: Основы CSS',
    //     complete_time: '1 ч 5 мин',
    //     items: [
    //         {
    //             id: 6,
    //             title: 'Вступление',
    //             item_type: 'LECTION',
    //             is_complete: false,
    //             time: '1 мин',
    //             content: [],
    //             url_link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    //         } 
    //     ]
    // } 
]