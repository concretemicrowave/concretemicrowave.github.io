const express = require("express");
const api = express.Router();

console.log("Loading API...");

// Mount /sermons
api.use("/sermons", require("./sermons"));

// Test route
api.get("/", (req, res) => {
  console.log("Hello World!");
  res.json({ message: "Hello World!" });
});

console.log("API loaded.");

module.exports = api;
