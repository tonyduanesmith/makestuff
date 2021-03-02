import gql from "graphql-tag";

export const GET_ARTICLE = gql`
  query article($id: ID!) {
    article(id: $id) {
      heading
      subheading
      main_markdown
      sidebar_markdown
      created
      modified
      image_path
    }
  }
`;
