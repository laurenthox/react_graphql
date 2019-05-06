import React, { useContext } from "react";

import Query from "../../components/Query";
import store from "../../context";
import { COUNTRY_QUERY } from "../../graphql/getCountryByCode";
import { useResources } from "../Helper";
import { FlagWrapper, Wrapper } from "../../styles/CountryDetails";
import { renderCountryInfoOrWeatherInfo } from "./renderCountryInfoOrWeatherInfo";
import { renderButtons } from "./renderButtons";

export const CountryDetails = () => {
  const context = useContext(store);
  const {
    countryCode,
    countryName,
    showWeather,
    updateShowWeather,
    updateLanguageCode,
    updateContinentCode
  } = context;
  const countryInfo = useResources(countryName);

  return Object.keys(countryInfo).length > 0 ? (
    <Query query={ COUNTRY_QUERY } variables={ { code: countryCode } }>
      { ({ country }) => {
        return <Wrapper>
          <FlagWrapper>{ country.emoji }</FlagWrapper>
          <h1>{ country.name }</h1>
          { renderCountryInfoOrWeatherInfo(country, countryInfo.weather,
            showWeather, updateLanguageCode,
            updateContinentCode, countryInfo) }
          { renderButtons(country.name, updateShowWeather, showWeather) }
        </Wrapper>
      } }
    </Query>
  ) : null;
};
