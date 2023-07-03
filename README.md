[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположите в директории `backend/`, а фронтенд - в `frontend/`. 
  
Пожалуйста, прикрепите в это описание ссылку на сайт, размещенный на Яндекс.Облаке.

Адрес репозитория: https://github.com/...

## Ссылки на проект

IP 158.160.112.132

Frontend https://nataliorigin.nomoredomains.rocks

Backend https://api.nataliorigin.nomoredomains.rocks

# Обзор проекта
## Задачи проекта

Проект призван закрепить вре ранее полученные в рамках учебного курса знания. Создать полностью рабочее веб-приложение, и разместить его на хостинге.
## Функциональность проекта

    Backend:
        В проекте созданы схемы и модели пользователей и карточек с контентом:
            card — схема карточки с контентом
            user — схема пользователя
        В проекте созданы эндпоинты:
            /cards — обрабатывает:
                GET запросы — отдаёт все карточки из БД
                POST запросы — создаёт новую карточку с контентом
            /cards/:cardId — обрабатывает DELETE запросы, удаляет карточку по cardId
            /cards/:cardId/likes — обрабатывает:
                PUT запросы — добавляет лайк карточке с контентом
                DELETE запросы — удаляет лайк карточке с контентом
            /signin — обрабатывает POST запросы, производит аутентификацию пользователя
            /signup — обрабатывает POST запросы, производит регистрацию пользователя
            /users — обрабатывает:
                GET запросы — отдаёт всех пользователей из БД
                POST запросы — создаёт нового пользователя
            /users/:userId — обрабатывает GET запросы, отдаёт пользователя по userId
            /users/me — обрабатывает:
                GET запросы — отдаёт информацию о текущем пользователе
                PATCH запросы — обновляет информацию о пользователе
                DELETE запросы — производит выход пользователя, с удалением JWT-токена из Cookie
            /users/me/avatar — обрабатывает PATCH запросы, обновляет аватар пользователя
        Созданы мидлвары:
            Централизованной обработки ошибок
            Авторизации пользователя
            Ограничитель количества запросов (защита от DDoS атак)
            Поддержки CORS запросов, включая обработку предварительных запросов
            Логирования запросов и ошибок
        Производится валидация поступающих данных:
            до передачи информации контроллерам с помощью joi и celebrate
            на уровне схем с помощью validator и встроенных методов mongoose
    Frontend:
        Возможность регистрации и аутентификации пользователя
        Возможность редактировать информацию о пользователе (установить имя пользователя, информацию «о себе», аватар)
        Возможность создавать карточки мест (добавить\удалить карточку места, поставить\снять лайк карточке)
        Возможность просматривать детальную фотографию карточки
        Реализована валидация форм с помощью кастомного хука

## Директории проекта

    /backend — директория с файлами бэкенд части проекта
        /controllers — директория с файлами контроллеров
        /errors — директория с файлами кастомных ошибок
        /middlewares — директория с мидлварами
        /models — директория с файлами описания схем и моделей
        /routes — директория с файлами роутера
        /utils — директория со вспомогательными файлами
    /frontend — директория с файлами фронтенд части проекта
        src/blocks — директория с CSS файлами
        src/components — директория с компонентами
        src/contexts — директория с элементами контекста
        src/fonts — директория со шрифтами
        src/images — директория с файлами изображений
        src/utils — директория со вспомогательными файлами
        src/vendor — директория с файлами библиотек

Запуск проекта

    Backend:
        npm lint — запускает проверку линтером
        npm run start — запускает сервер
        npm run dev — запускает сервер с hot-reload
    Frontend:
        npm run build — запуск проекта в режиме продакшн, с формированием файлов подготовленных к деплою в директории /build
        npm start — запуск проекта в режиме разработки

## Используемые технологии

    Node.js
    nodemon
    Express
    cookie-parser
    MongoDB
    mongoose
    bcryptjs
    jsonwebtoken
    celebrate
    validator
    express-rate-limit
    helmet
    winston
    express-winston
    ESLint
