const axios = require("axios");

// 1) GET /users
async function getUsers() {
    try {
        console.log("\n📤 Client: Sending GET /users");

        const response = await axios.get("http://localhost:5000/users");

        console.log("📥 Client: Response from server (GET /users):");
        console.log(response.data);
    } catch (err) {
        console.error("❌ Client: Error in GET /users");
        console.error("👉", err.message);
    }
}

// 2) POST /add-user
async function addUser() {
    try {
        console.log("\n📤 Client: Sending POST /add-user");

        const body = { name: "Nukilla praveen" };

        const response = await axios.post(
            "http://localhost:5000/add-user",
            body
        );

        console.log("📥 Client: Response from server (POST /add-user):");
        console.log(response.data);
    } catch (err) {
        console.error("❌ Client: Error in POST /add-user");
        console.error("👉", err.message);
    }
}

async function main() {
    await getUsers();
    await addUser();
}

main();
