# ScrapBridge

**A modern full-stack platform for digital scrap collection and recycling workflows.**

ScrapBridge is an independently developed personal full-stack project focused on creating a structured digital workflow for scrap collection and recycling.

The project is being developed from the ground up with its own application architecture, backend API, frontend, database integration, security configuration, and development history.

> **Project Status:** Active Development

---

## Overview

Traditional scrap collection often relies on manual communication and unstructured processes. ScrapBridge is being developed to explore how a web-based platform can provide a cleaner and more organized workflow between users and scrap collection services.

The project currently contains a working full-stack foundation consisting of a React frontend, Node.js/Express backend, MongoDB Atlas database connectivity, API security middleware, centralized error handling, and health monitoring.

Additional application features will be implemented incrementally and documented only after they have been developed and tested.

---

## Current Features

The following functionality is currently implemented and verified:

- React frontend initialized with Vite
- Node.js and Express REST API
- MongoDB Atlas cloud database integration
- Mongoose database connection
- Environment-based application configuration
- CORS configuration
- Helmet security headers
- API rate limiting
- HTTP request logging with Morgan
- JSON and URL-encoded request parsing
- Centralized error handling
- Custom 404 route handling
- API health-check endpoint
- Development server with Nodemon
- Production server command
- Graceful HTTP server shutdown handling
- Environment secrets excluded from version control

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

### Backend Libraries

- bcryptjs
- CORS
- dotenv
- Express Rate Limit
- Helmet
- JSON Web Token
- Morgan
- Zod

Some installed backend libraries are intended for upcoming application features and will be documented as implemented functionality only after those features are completed.

### Development Tools

- Git
- GitHub
- Visual Studio Code
- npm
- Nodemon
- MongoDB Atlas

---

## Project Structure

    scrapbridge/
    |
    +-- backend/
    |   |
    |   +-- src/
    |   |   +-- config/
    |   |   +-- controllers/
    |   |   +-- middleware/
    |   |   +-- models/
    |   |   +-- routes/
    |   |   +-- services/
    |   |   +-- utils/
    |   |   +-- validators/
    |   |   +-- app.js
    |   |   +-- server.js
    |   |
    |   +-- .env.example
    |   +-- package.json
    |   +-- package-lock.json
    |
    +-- frontend/
    |   +-- src/
    |   +-- public/
    |   +-- package.json
    |
    +-- docs/
    |
    +-- .gitignore
    +-- README.md

---

## Backend Architecture

The backend follows a modular structure designed to keep different responsibilities separated.

### config

Contains application and database configuration.

### controllers

Reserved for request-handling logic as application features are implemented.

### middleware

Contains reusable Express middleware such as:

- 404 handling
- centralized error handling

Authentication and additional middleware will be added as those features are developed.

### models

Contains Mongoose data models.

### routes

Contains API route definitions.

### services

Reserved for reusable business logic and integrations.

### validators

Reserved for request validation schemas.

### utils

Contains reusable utility functions as the project grows.

---

## API

The backend currently runs locally on:

    http://localhost:5000

### Root Endpoint

    GET /

Example response:

    {
      "success": true,
      "message": "Welcome to the ScrapBridge API",
      "version": "1.0.0"
    }

### Health Check

    GET /api/health

Example response:

    {
      "success": true,
      "service": "ScrapBridge API",
      "status": "healthy",
      "timestamp": "2026-09-10T07:39:50.116Z"
    }

The timestamp is generated dynamically when the health endpoint is requested.

### Unknown Routes

Requests to undefined routes return HTTP status `404`.

Example:

    GET /api/does-not-exist

Response structure:

    {
      "success": false,
      "message": "Route not found: GET /api/does-not-exist"
    }

During development, additional debugging information such as the stack trace may also be returned.

---

## Local Development

### Prerequisites

Install the following before running the project:

- Node.js
- npm
- Git
- MongoDB Atlas account or compatible MongoDB instance

---

## Backend Setup

Clone the repository and navigate to the backend:

    git clone https://github.com/abhigyananand2005/scrapbridge.git
    cd scrapbridge/backend

Install dependencies:

    npm install

Create your environment file:

    Copy-Item .env.example .env

Configure the required values inside `.env`.

Example structure:

    NODE_ENV=development
    PORT=5000

    MONGODB_URI=your_mongodb_connection_string

    CLIENT_URL=http://localhost:5173

Never commit the real `.env` file.

Start the development server:

    npm run dev

The API should become available at:

    http://localhost:5000

For a production-style start:

    npm start

---

## Frontend Setup

Open another terminal and navigate to the frontend:

    cd scrapbridge/frontend

Install dependencies:

    npm install

Start the Vite development server:

    npm run dev

The frontend development server is normally available at:

    http://localhost:5173

---

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `NODE_ENV` | Application environment |
| `PORT` | Backend HTTP server port |
| `MONGODB_URI` | MongoDB connection string |
| `CLIENT_URL` | Allowed frontend origin for CORS |

Additional environment variables will be documented when corresponding features are implemented.

---

## Security

The current backend foundation includes several security-related practices.

### Environment Protection

Real `.env` files are excluded from Git so credentials are not committed to the repository.

### Helmet

Helmet is used to configure security-related HTTP response headers.

### CORS

Cross-Origin Resource Sharing is configured using the frontend URL supplied through the application environment.

### Rate Limiting

Requests to `/api` are rate limited to reduce excessive API traffic.

### Server Information

Express's `X-Powered-By` header is disabled.

---

## Verified Functionality

The current backend foundation has been manually verified for:

| Test | Result |
| --- | --- |
| MongoDB Atlas connection | PASS |
| Backend server startup | PASS |
| Root API endpoint | PASS |
| Health API endpoint | PASS |
| Unknown route handling | PASS |
| HTTP 404 response | PASS |
| `.env` excluded by Git | PASS |

---

## Development Roadmap

ScrapBridge will be developed incrementally.

Planned development areas include:

1. User data model
2. User registration
3. Login and authentication
4. JWT-based protected routes
5. User profile functionality
6. Scrap pickup request workflow
7. Pickup status management
8. Scrap category management
9. User dashboard
10. Collector workflow
11. Location and map functionality
12. Payment workflow
13. Notification functionality
14. Responsive production frontend
15. Automated API testing
16. Deployment and production configuration

These items represent the development roadmap and should not be interpreted as already implemented functionality.

---

## Development Principles

This project is being developed with emphasis on:

- clean project structure
- readable and maintainable code
- modular backend architecture
- API security
- environment-based configuration
- meaningful Git history
- incremental testing
- clear technical documentation
- interview-defensible implementation

---

## Project Background

ScrapBridge is a personal implementation developed around the broader concept of a digital scrap-management platform.

The application is being independently implemented with its own codebase and development history rather than presenting previous collaborative code as individually authored work.

This repository therefore represents the functionality implemented and maintained within this codebase.

---

## Author

**Abhigyan Anand**

B.Tech - Computer Science & Engineering (Data Science)

Noida, India

Areas of Interest:

- Backend Development
- Data Analytics
- Full-Stack Development
- IoT
- Software Engineering

GitHub: `@abhigyananand2005`

---

## Repository Status

This project is currently under active development.

Documentation will be updated as new features are implemented, tested, and integrated into the application.
