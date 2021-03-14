import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query articles($search: String, $downloadables: Boolean, $categorys: [String]) {
    articles(search: $search, categorys: $categorys, downloadables: $downloadables) {
      heading
      subheading
      main_markdown
      sidebar_markdown
      created
      modified
      image_path
      id
      tags {
        categorys
      }
    }
  }
`;

export const GET_TAGS = gql`
  query {
    tags {
      categorys
    }
  }
`;
