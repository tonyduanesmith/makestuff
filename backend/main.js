const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("Starting server...");
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use("/articles", require("./routes/articleRoutes"));

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// const url = "mongodb://localhost:2717";
// const dbName = "makestuff";

// MongoClient.connect(url, (error, client) => {
//     assert.strictEqual(null, error);
//     console.log("Connected successfully to the server");

//     const db = client.db(dbName);

//     client.close();
// })

console.log("Connecting to MongoDB");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true },(error) => {
    if(error) return console.error(error);
    console.log("MonogDB connection established");
})