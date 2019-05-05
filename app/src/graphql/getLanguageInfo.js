import gql from "graphql-tag";

export const LANGUAGE = gql`
query LANGUAGES($code: String!) {
    language(code: $code){
      name
      native
      code
      rtl
    }
  }
`;
