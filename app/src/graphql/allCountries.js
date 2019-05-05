import gql from "graphql-tag";

export const COUNTRIES_QUERY = gql`
  query COUNTRIES {
    countries {
      name
      native
      emoji
      phone
      currency
      code
      languages {
        code
        name
      }
      continent {
        code
        name
      }
    }
  }
`;
