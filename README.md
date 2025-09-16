# URL Shortener

A simple and efficient service for shortening long URLs and redirecting them to their original addresses—similar to [TinyURL](https://tinyurl.com/) or [Bitly](https://bitly.com/).

---

## 🚀 Features

- Shorten any long URL into a compact link.
- Redirect users to the original URL.
- Built with **NestJS** and **PostgreSQL** for scalability and reliability.
- Ready for deployment via **Docker**.

---

## 🛠️ Project Setup

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Environment variables**  
   Create a `.env` file in the project root with the following variables:

   ```env
   PORT=8080                           # Port on which the service will run
   DATABASE_URL=postgresql://...        # PostgreSQL connection string
   SERVICE_BASE_URL=http://localhost:8080  # Base URL for the service
   ```

---

## ▶️ Running the Application

### Development

```bash
npm run start
```

### Watch Mode (Auto-reload)

```bash
npm run start:dev
```

### Production

```bash
npm run start:prod
```

---

## 🧪 Testing

Run the test suites to ensure everything works correctly:

```bash
# Unit tests
npm run test

# End-to-end (E2E) tests
npm run test:e2e

# Test coverage report
npm run test:cov
```

---

## 🚢 Deployment

### NestJS

For production deployment, follow the official NestJS [deployment documentation](https://docs.nestjs.com/deployment).

### Docker

A sample `docker-compose.yml` file is provided for easy containerized deployment:

```yaml
services:
  db:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: shot_url
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  app:
    build: .
    container_name: nest-prisma-app
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:postgres@db:5432/shot_url?schema=shortUrl
      SERVICE_BASE_URL: http://localhost:8080
      NODE_ENV: production
    ports:
      - '8080:8080'
    command: >
      sh -c "npx prisma migrate deploy &&
             node dist/main.js"

volumes:
  pgdata:
```

---

## 📞 Support

## If you encounter issues or have questions, please open an issue in the repository.

## 📜 License

## This project is licensed under the [MIT License](https://chatgpt.com/c/LICENSE).
