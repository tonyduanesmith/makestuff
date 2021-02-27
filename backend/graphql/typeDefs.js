const { gql } = require("apollo-server");

module.exports = gql`
  type Article {
    id: ID!
    heading: String!
    subheading: String!
    created: String!
    modified: String!
    image_path: String!
    main_markdown: String!
    sidebar_markdown: String
  }
  type Query {
    articles: [Article]
    article(id: ID!): Article
  }
  input ArticleInput {
    heading: String!
    subheading: String!
    image_path: String!
    main_markdown: String!
    sidebar_markdown: String
  }
  type Mutation {
    createArticle(articleInput: ArticleInput): Article!
  }
`;
