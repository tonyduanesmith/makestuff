import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query articles($first: Int) {
    articles(first: $first) {
      heading
      created
      image_path
    }
  }
`;
