const { gql } = require("apollo-server");

module.exports = gql`
  scalar DateTime
  type Tags {
    categorys: [String]!
  }
  type Article {
    id: ID!
    heading: String!
    subheading: String!
    created: DateTime!
    modified: DateTime!
    image_path: String!
    main_markdown: String!
    sidebar_markdown: String
    tags: Tags!
    downloads: [String]!
  }
  type Query {
    articles(first: Int): [Article]
    article(id: ID!): Article
  }
  input TagsInput {
    categorys: [String]!
  }
  input ArticleInput {
    heading: String!
    subheading: String!
    image_path: String!
    main_markdown: String!
    sidebar_markdown: String
    tags: TagsInput!
    downloads: [String]!
  }
  type Mutation {
    createArticle(articleInput: ArticleInput): Article!
  }
`;
