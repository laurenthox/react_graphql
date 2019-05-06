import React from 'react';

import Query from "../Query";
import { CONTINENT } from '../../graphql/getContinent';

export const showContinent = continentCode => (
  <Query query={ CONTINENT } variables={ { code: continentCode } }>
    { ({ continent }) => {
      return continent ? <>
        <h1>Continent Name: { continent.name } | Code: { continent.code }</h1>
        <p>There are { continent.countries.length } countries in { continent.name }</p>
      </> : null
    } }
  </Query>
);