# 📘 Axios Tutorial – Complete Guide With Examples

This repository contains a full tutorial for learning Axios, a powerful HTTP client used for making API requests in Node.js or the browser.

## 📚 What's Included

The tutorial covers:

- ✔️ GET Requests (fetching users)
- ✔️ POST Requests (adding users)
- ✔️ Client-Server communication
- ✔️ Error Handling with try-catch
- ✔️ Fully commented example code
- ✔️ Step-by-step execution

## 🚀 What is Axios?

Axios is a JavaScript library used for performing HTTP requests such as:

- `GET` → Fetch data from server
- `POST` → Send data to server
- `PUT` → Update existing data
- `DELETE` → Remove data

### Common Use Cases

Axios is commonly used in:

- Node.js backend applications
- React frontend projects
- Express servers making external API calls
- Any project requiring API communication

## 📦 Installation

Install the required dependencies:

```bash
npm install express axios
```

## 📁 Project Structure

```
axios-tutorial/
 ├── server.js           # Express server with REST endpoints
 ├── client.js           # Axios client making requests
 └── README.md           # Documentation
```

## 🏗️ How It Works

This tutorial uses a **client-server architecture**:

1. **Server** (`server.js`) - Express server running on `http://localhost:5000`
2. **Client** (`client.js`) - Axios client that sends requests to the server

### Server Endpoints

The server provides two REST API endpoints:

| Method | Endpoint    | Description           |
|--------|-------------|-----------------------|
| GET    | `/users`    | Fetch all users       |
| POST   | `/add-user` | Add a new user        |

## 📘 Tutorial Code Overview

### Server Side (`server.js`)

The Express server:

- Stores users in memory
- Handles GET requests to fetch users
- Handles POST requests to add new users
- Runs on port 5000

```javascript
// GET endpoint
app.get("/users", (req, res) => {
    res.json({
        message: "Users fetched successfully",
        data: users
    });
});

// POST endpoint
app.post("/add-user", (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json({
        message: "User created",
        user: newUser
    });
});
```

### Client Side (`client.js`)

The Axios client demonstrates:

#### 1️⃣ GET Request

Fetches all users from the server:

```javascript
const response = await axios.get("http://localhost:5000/users");
console.log(response.data);
```

#### 2️⃣ POST Request

Sends a new user to the server:

```javascript
const body = { name: "Nukilla praveen" };
const response = await axios.post("http://localhost:5000/add-user", body);
console.log(response.data);
```

#### 3️⃣ Error Handling

Uses try-catch blocks to handle errors gracefully:

```javascript
try {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response.data);
} catch (err) {
    console.error("Error:", err.message);
}
```

## ▶️ How to Run

Follow these steps to get started:

### Step 1: Install Dependencies

```bash
npm install express axios
```

### Step 2: Start the Server

In one terminal window:

```bash
node server.js
```

You should see:
```
🚀 Server running at http://localhost:5000
```

### Step 3: Run the Client

In another terminal window:

```bash
node client.js
```

You should see output showing:
- GET request fetching users
- POST request adding a new user

## 🎯 What You Will Learn

By completing this tutorial, you will understand:

- ✔️ How to build a REST API with Express
- ✔️ How to make HTTP requests using Axios
- ✔️ How client-server communication works
- ✔️ How to send and receive JSON data
- ✔️ How to handle errors with try-catch blocks
- ✔️ How to structure API calls properly

## 📊 Expected Output

### Server Console:
```
🚀 Server running at http://localhost:5000
👉 Server: received GET /users
👉 Server: received POST /add-user
📦 Body from client: { name: 'Nukilla praveen' }
```

### Client Console:
```
📤 Client: Sending GET /users
📥 Client: Response from server (GET /users):
{ message: 'Users fetched successfully', data: [...] }

📤 Client: Sending POST /add-user
📥 Client: Response from server (POST /add-user):
{ message: 'User created', user: {...} }
```

## 📝 Prerequisites

- Basic knowledge of JavaScript
- Node.js installed on your system
- Understanding of async/await
- Familiarity with Express (helpful but not required)

## 🔧 Customization

Try modifying the code to:

- Add more endpoints (PUT, DELETE)
- Send custom headers
- Add authentication tokens
- Handle different error scenarios
- Connect to a real database

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this tutorial!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Learning! 🎉**