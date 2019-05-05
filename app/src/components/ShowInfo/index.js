import React, { useContext } from 'react'

import Query from "../Query";
import CountryCode from "../../context";
import { CONTINENT } from '../../graphql/getContinent';
import { LANGUAGE } from '../../graphql/getLanguageInfo'

export const ShowInfo = () => {
  const context = useContext(CountryCode);
  const { continentCode, languageCode } = context;

  return continentCode ? <Query query={ CONTINENT } variables={ { code: continentCode } }>
      {({ continent }) => {
        return continent ? <>
          <h1>Continent Name: { continent.name } | Code: { continent.code }</h1>
          <p>There are { continent.countries.length } countries in { continent.name }</p>
        </> : null
      }}
    </Query>
    : <Query query={ LANGUAGE } variables={ { code: languageCode } }>
      {({ language }) => {
        return language ? <>
          <h1>Language Name: { language.name } | Code: { language.code }</h1>
          <p>In native { language.name } is called { language.native }</p>
        </> : null
      }}
    </Query>
};
