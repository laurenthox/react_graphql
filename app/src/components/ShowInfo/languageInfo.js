import React from 'react';

import Query from "../Query";
import { LANGUAGE } from '../../graphql/getLanguageInfo';

export const showLanguage = languageCode => (
  <Query query={ LANGUAGE } variables={ { code: languageCode } }>
    { ({ language }) => {
      return language ? <>
        <h1>Language Name: { language.name } | Code: { language.code }</h1>
        <p>In native { language.name } is called { language.native }</p>
      </> : null
    } }
  </Query>
);