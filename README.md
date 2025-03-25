# Node.js + MongoDB CRUD API

## 📌 Project Overview
This is a simple **CRUD (Create, Read, Update, Delete) API** built with **Node.js, Express, and MongoDB** using **Mongoose** as the ORM. It allows users to perform basic database operations on a User collection.

## 🚀 Features
- ✅ Create a new user
- 📄 Get all users
- ✏️ Update user details
- ❌ Delete a user
- 🔗 MongoDB database integration

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/bhavana182003/NODE-MONGODB-CRUD.git
cd NODE-MONGODB-CRUD
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Start MongoDB
Make sure you have **MongoDB** installed and running locally or use **MongoDB Atlas**.

### 4️⃣ Run the Server
```sh
node server.js
```
The server will start on **http://localhost:3000**.

## 📡 API Endpoints
### ➕ Create a User
**POST** `/users`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### 📄 Get All Users
**GET** `/users`

### ✏️ Update a User
**PUT** `/users/:id`
```json
{
  "name": "Updated Name",
  "age": 30
}
```

### ❌ Delete a User
**DELETE** `/users/:id`

## 🌍 Deployment
To deploy this API online, you can use **Render, Railway, Vercel, or Heroku** along with **MongoDB Atlas**.

## 🏆 Contribution & Support
Feel free to **fork**, **star**, and **contribute**! If you find issues, create a GitHub **issue**.

---
💡 **Pro Tip:** Add `.env` to store your MongoDB URI securely instead of hardcoding it!

---


---

### 🔥 Happy Coding! 🚀

