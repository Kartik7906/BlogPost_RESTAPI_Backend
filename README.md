# BlogPost_RESTAPI_Backend
# Social Media REST API

## 1. Problem Statement
The goal of this project is to build a backend for a social media platform. This platform allows users to create, read, update, and delete blog posts while providing secure user authentication via login and signup. The project leverages encryption for passwords and supports multiple users. It is built as a REST API using Node.js and Express, with MongoDB as the database.

## 2. Features
- **User Authentication**:
  - Secure signup with email and password encryption.
  - Login functionality with encrypted password verification.
- **Blog Management**:
  - Create, update, and delete multiple blog posts.
  - Retrieve all blogs or specific blog posts.
- **User Management**:
  - Multiple users can sign up, log in, and manage their blogs.
- **Secure Passwords**:
  - Passwords are encrypted to ensure security during user authentication.

## 3. Tech Stack Used
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js to create the REST API.
- **Mongoose**: ODM for MongoDB to model and manage database operations.
- **MongoDB**: NoSQL database to store users and blogs.
- **Postman**: API testing tool to simulate and test API endpoints.
- **bcrypt.js**: Library for hashing passwords for secure storage.
"""
