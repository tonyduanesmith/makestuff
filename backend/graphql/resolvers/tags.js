const Tags = require("../../models/Tags");

module.exports = {
  Query: {
    async tags() {
      try {
        const tags = await Tags.findOne();
        return tags;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
