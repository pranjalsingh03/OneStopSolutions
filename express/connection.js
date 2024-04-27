const express = require("express");
const app = express();
const path = require("path");

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set the path to the views directory
const viewsPath = path.join(__dirname, '../../../bootstrap_frontend_project/express');

// Serve static files from the 'express' folder
app.use('/static', express.static(path.join(__dirname, '../../../bootstrap_frontend_project/express')));

app.get("/", (req, res) => {
    res.sendFile(path.join(viewsPath, "index_sign_in.html")); // Render the sign-in page
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(viewsPath, "index_sign_in.html")); // Render the sign-up page
});

// Start the server
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
