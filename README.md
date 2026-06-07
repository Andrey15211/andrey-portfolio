# Andrey Badalin Portfolio

## Links

- GitHub: https://github.com/Andrey15211/andrey-portfolio
- Live Demo: https://andrey-portfolio-liard.vercel.app

Двуязычное портфолио Андрея Бадалина, junior frontend/fullstack-разработчика. Проект демонстрирует коммерческие сайты, дашборды, CRM-инструменты, сервисы бронирования, приложения для Telegram-ботов и контролируемый AI-assisted workflow.

## Стек

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- Lucide React
- Vercel

## Возможности

- Темный premium tech-интерфейс в стиле технического досье
- Адаптивная верстка для desktop, tablet и mobile
- Семантическая навигация и доступные focus-состояния
- Восемь карточек case study с централизованными ссылками
- Типизированные данные проектов и навыков
- RU/EN локализация с локализованными metadata и aria-labels
- Русский язык по умолчанию
- Статическая генерация маршрутов `/ru` и `/en`
- Поддержка `prefers-reduced-motion`

## RU/EN Localization

Локализация реализована через `next-intl`.

- Словари: `messages/ru.json`, `messages/en.json`
- Конфигурация: `src/i18n/`
- Маршруты: `/ru`, `/en`
- Корневой `/` перенаправляется на русский `/ru`
- Переключатель RU / EN расположен в header и мобильном меню
- Названия технологий остаются без перевода

Все пользовательские тексты, статусы проектов и accessibility-подписи вынесены в словари.

## Локальный запуск

Требуется Node.js 20.9 или новее.

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000). Приложение перенаправит на `/ru`.

## Проверки

```bash
npm run lint
npm run typecheck
npm run build
```

Для проверки production-сборки локально:

```bash
npm run start
```

## Переменные окружения

Проект не требует переменных окружения. Файл `.env.example` оставлен как явное подтверждение отсутствия обязательной конфигурации. Реальные API-ключи, токены и секреты не используются.

## Деплой на Vercel

1. Загрузите репозиторий на GitHub.
2. Импортируйте репозиторий в Vercel.
3. Оставьте автоматически определенный preset `Next.js`.
4. Не добавляйте env-переменные: они не требуются.
5. Запустите deploy.
6. Проверьте `/ru` и `/en`, а также внешние ссылки карточек проектов.

## Portfolio Case Studies

1. BuildMarket Store
2. Price Tracker Dashboard
3. Bot Orders CRM
4. Sales Analytics Dashboard
5. Booking Service App
6. Media Library API App
7. Animated SaaS Landing
8. Team Task Manager

Проект показывает компонентную архитектуру, локализацию App Router, адаптивный интерфейс, типизированный контент и подготовку frontend-проекта к production-деплою.
