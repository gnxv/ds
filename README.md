# DS — солярий и R-Sleek

Скелет сайта небольшого кабинета: главный экран делится на две услуги, дальше отдельные лендинги.

## Стек

- Next.js 16, App Router, TypeScript
- Tailwind CSS 4
- Шрифты: Cormorant Garamond + Manrope
- Standalone-сборка под Docker / VPS

## Страницы

- `/` — выбор: солярий / R-Sleek
- `/solarium` — лендинг солярия
- `/r-sleek` — лендинг R-Sleek

Контент пока-заглушки. Блоки будем наполнять по очереди.

## Локально

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

## Деплой на VPS

```bash
git clone https://github.com/gnxv/ds.git
cd ds
docker compose up -d --build
```

Сайт поднимется на порту 3000. Дальше — nginx или caddy как reverse proxy и SSL.
