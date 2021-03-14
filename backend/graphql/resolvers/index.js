const articlesResolvers = require("./articles");
const dateTimeResolvers = require("./datetime");
const tagsResolvers = require("./tags");

module.exports = {
  Query: {
    ...articlesResolvers.Query,
    ...tagsResolvers.Query,
  },
  Mutation: {
    ...articlesResolvers.Mutation,
  },
  DateTime: {
    ...dateTimeResolvers.DateTime,
  },
};
