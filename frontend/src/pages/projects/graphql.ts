import gql from "graphql-tag";

export const GET_ARTICLES = gql`
  query articles {
    articles {
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
