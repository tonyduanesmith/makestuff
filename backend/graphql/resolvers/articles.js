const { UserInputError } = require("apollo-server");

const Article = require("../../models/Article");
const { validateArticlesInput } = require("../validators/articlesValidator");

module.exports = {
  Query: {
    async articles() {
      try {
        const articles = await Article.find();
        return articles;
      } catch (error) {
        throw new Error(error);
      }
    },
    async article(parent, { id }) {
      const article = await Article.findById(id);
      try {
        if (article) {
          return article;
        } else {
          throw new Error("Article not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createArticle(
      parent,
      { articleInput: { heading, subheading, main_markdown, sidebar_markdown, image_path } },
    ) {
      const newArticle = new Article({
        heading,
        subheading,
        main_markdown,
        sidebar_markdown,
        image_path,
        created: new Date(),
        modified: new Date(),
      });

      const { valid, errors } = validateArticlesInput(heading, subheading, main_markdown, image_path);

      if (!valid) {
        throw new UserInputError("Errors", errors);
      }

      const response = await newArticle.save();

      return response;
    },
  },
};
