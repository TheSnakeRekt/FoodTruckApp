# Food Truck Application Docker-Compose Setup

This Docker Compose configuration sets up a Food Truck Application with Redis caching, a backend server, PostgreSQL database, and PgAdmin for database management.

## Prerequisites

- Docker installed on your machine.

## Setup

1. Clone the repository containing this `docker-compose.yml` file.
2. Navigate to the directory containing the `docker-compose.yml` file in your terminal.

## Usage

### Starting the Application

Run the following command:

```bash
docker-compose up -d
```

This command will start all the services defined in the `docker-compose.yml` file in detached mode.

### Accessing Services

- Redis: Accessible via `localhost:6379`.
- Backend Server: Accessible via `localhost:3000`.
- PostgreSQL Database: Accessible via `localhost:15432`.
- PgAdmin: Accessible via `localhost:16543`.

### Stopping the Application

To stop the application and remove containers, run:

```bash
docker-compose down
```

## Services

### Redis

- Image: redis:alpine
- Ports: 6379
- Volume: cache:/data

### Backend

- Custom Dockerfile located in the `backend` directory.
- Ports: 3000
- Environment Variables:
  - PORT: 3000
  - API_KEY: 6939a943cde04da5996776f1789673e0
  - REDIS_EXPIRE_TIME: 80000
  - REDIS_HOST: redis
  - REDIS_PORT: 6379
  - DB_HOST: localhost
  - DB_PORT: 5432
  - DB_USER: postgres
  - DB_PASSWORD: "Postgres2024!"
  - DB_SSL: false
  - REPORT_BASE_PATH: /src/reports
- Depends on: Redis, PostgreSQL

### PostgreSQL

- Image: postgres
- Environment Variables:
  - POSTGRES_PASSWORD: Postgres2024!
- Ports: 15432
- Volumes:
  - postgres-volume:/var/lib/postgresql/data
  - ./backend/db/init.sql:/docker-entrypoint-initdb.d/create_tables.sql

### PgAdmin

- Image: dpage/pgadmin4
- Environment Variables:
  - PGADMIN_DEFAULT_EMAIL: "jorgeradasilva@gmail.com"
  - PGADMIN_DEFAULT_PASSWORD: "PgAdmin2024!"
- Ports: 16543

## Networks

- Name: food_truck_network
- Driver: bridge

## Volumes

- cache: Local volume for Redis data.
- postgres-volume: Local volume for PostgreSQL data.
- backend-reports: Local volume for backend reports.


This README provides an overview of the Docker Compose setup for your Food Truck Application, including instructions for setup, usage, and details about each service. Adjustments can be made according to your specific needs.