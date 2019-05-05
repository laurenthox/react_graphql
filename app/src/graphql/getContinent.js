import gql from "graphql-tag";

export const CONTINENT = gql`
  query CONTINENT($code: String!){
    continent(code: $code){
        code
        name
        countries{
        name
        languages{
        code
        name
      }
    }
  }
  }
`;

