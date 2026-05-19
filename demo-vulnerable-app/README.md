# Demo Vulnerable App

A demo web application intentionally using older dependency versions, for use with security scanning tools.

## Stack

- **Backend (Node.js)**: Express, Mongoose, JWT, bcrypt
- **Backend (Python)**: Flask, Django, SQLAlchemy, cryptography

## Setup

```bash
# Node.js
npm install
npm start

# Python
pip install -r requirements.txt
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | API info |
| GET | /health | Health check |
| GET | /api/users | List users |
| POST | /api/users/register | Register user |
| POST | /api/users/login | Login |
| GET | /api/products | List products |
| GET | /api/products/:id | Get product |
