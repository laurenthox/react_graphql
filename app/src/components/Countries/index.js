import React from "react";

import Query from "../Query";
import Country from "../../containers/Country";
import { COUNTRIES_QUERY } from "../../graphql/allCountries";

const Countries = () => (
  <Query query={ COUNTRIES_QUERY }>
    {({ countries }) => {
      return <Country countries={ countries }/>;
    }}
  </Query>
);

export default Countries;