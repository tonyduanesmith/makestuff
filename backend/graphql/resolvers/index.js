const articlesResolvers = require("./articles");

module.exports = {
  Query: {
    ...articlesResolvers.Query,
  },
  Mutation: {
    ...articlesResolvers.Mutation,
  },
};
