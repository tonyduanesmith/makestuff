const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "makestuff" })
  .then(() => {
    console.log("Connected to the database");
    return server.listen({ port: PORT });
  })
  .then(res => {
    console.log(`Server started on port: ${res.url}`);
  });
