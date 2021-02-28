const { gql } = require("apollo-server");
const { Kind, GraphQLScalarType } = require("graphql");

module.exports = gql`
  scalar DateTime
  type Article {
    id: ID!
    heading: String!
    subheading: String!
    created: DateTime!
    modified: DateTime!
    image_path: String!
    main_markdown: String!
    sidebar_markdown: String
  }
  type Query {
    articles(first: Int): [Article]
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
