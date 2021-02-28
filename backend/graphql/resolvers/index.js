const articlesResolvers = require("./articles");
const dateTimeResolvers = require("./datetime");

module.exports = {
  Query: {
    ...articlesResolvers.Query,
  },
  Mutation: {
    ...articlesResolvers.Mutation,
  },
  DateTime: {
    ...dateTimeResolvers.DateTime,
  },
};
