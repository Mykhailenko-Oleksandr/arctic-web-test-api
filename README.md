# Snippets Backend

Бекенд‑частина застосунку для роботи зі snippets.
Реалізує API для створення, перегляду, пошуку, фільтрації за тегами, редагування та видалення записів.
Використовує Node.js, Express та MongoDB.

---

## 🚀 Запуск локально

```bash
# 1. Клонувати репозиторій і перейти в нього
git clone https://github.com/Mykhailenko-Oleksandr/arctic-web-test-api
cd arctic-web-test-api

# 2. Встановити залежності
npm install

# 3. Запустити сервер у режимі розробки
npm run dev

# або у звичайному режимі
npm start
```

## ⚙️ Змінні оточення

Створи файл .env у корені проєкту.
Приклад (.env.example):

# Домен фронтенду (для CORS)

FRONTEND_DOMAIN= ... Наприклад: (http://localhost:3000)

# Підключення до MongoDB

MONGO_URL=... Наприклад: (mongodb://localhost:27017/snippets)

# Порт для бекенду

PORT= ... Наприклад: (3000)

## 🔍 Перевірка API

Фронтенд працює з бекенд‑ендпоінтами. Для тестування можна використати curl або Postman.

### Отримати всі snippets

```bash
Postman/curl http://localhost:3000/api/snippets
```

### Створити snippet

```bash
Postman/curl -X POST http://localhost:3000/api/snippets \
 -H "Content-Type: application/json" \
 -d '{
"title": "Мій перший snippet",
"content": "Це тестовий запис",
"tag": ["Work"],
"type": "Note"
}'
```

## 📦 📦 Білд та запуск у продакшн‑режимі

Бекенд не потребує білду (чистий Node.js).
Для запуску у продакшн‑режимі достатньо:

```bash
npm install --production
npm start
```

## 🔗 API ендпоінти

### Отримати всі snippets

- **GET** `/api/snippets`
- Параметри (query):
  - `page` – номер сторінки
  - `limit` – кількість елементів
  - `q` – пошук за назвою/контентом
  - `tag` – фільтрація за тегом

### Отримати snippet за ID

- **GET** `/api/snippets/:snippetId`

### Створити snippet

- **POST** `/api/snippets`
- Body (JSON):

```json
{
  "title": "Мій перший snippet",
  "content": "Це тестовий запис",
  "tag": ["Work"],
  "type": "Note"
}
```

## 🌐 Тестовий деплой

Демо‑версія доступна за посиланням:

Render: ([https://arctic-web-test-api.onrender.com](https://arctic-web-test-api.onrender.com/))
