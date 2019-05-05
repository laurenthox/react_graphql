import gql from "graphql-tag";

export const COUNTRY_QUERY = gql`
  query COUNTRY($code: String!){
    country(code: $code){
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
