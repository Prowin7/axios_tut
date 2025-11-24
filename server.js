const express = require("express");
const app = express();

app.use(express.json());

// Store users in memory
let users = [
    { id: 1, name: "Praveen" },
    { id: 2, name: "Rahul" }
];

// GET /users
app.get("/users", (req, res) => {
    console.log("👉 Server: received GET /users");

    res.json({
        message: "Users fetched successfully",
        data: users
    });
});

// POST /add-user
app.post("/add-user", (req, res) => {
    console.log("👉 Server: received POST /add-user");
    console.log("📦 Body from client:", req.body);

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

// Start server
app.listen(5000, () => {
    console.log("🚀 Server running at http://localhost:5000");
});
