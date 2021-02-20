const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:2717";
const dbName = "makestuff";

MongoClient.connect(url, (error, client) => {
    assert.strictEqual(null, error);
    console.log("Connected successfully to the server");

    const db = client.db(dbName);

    client.close();
})