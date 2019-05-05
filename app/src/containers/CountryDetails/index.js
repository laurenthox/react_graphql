import React, { useContext } from "react";
import moment from 'moment';

import Query from "../../components/Query";
import store from "../../context";
import { ButtonComponent } from '../../components/Button'
import { COUNTRY_QUERY } from "../../graphql/getCountryByCode";
import { useResources } from "../Helper";
import { FlagWrapper, Info, Span, Wrapper } from "../../styles/CountryDetails";

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

  const renderButtons = name => {
    return !showWeather
      ? <ButtonComponent
        onClickFn={ updateShowWeather }
        args={ true }
        text={ `What's the weather is ${ name }?` }/>
      : <ButtonComponent
        onClickFn={ updateShowWeather }
        args={ false }
        text={ `Show ${ name }'s info?` }/>
  };

  const renderCountryInfoOrWeatherInfo = (country, { time, temperature, summary }) => {
    return !showWeather ? <Info>
      <div>
        <p>Country Code: { country.code }</p>
        <p>Currency: { country.currency }</p>
        <p>Phone Code: { country.phone }</p>
      </div>
      <p>
        Time zome: { countryInfo.results[0].annotations.timezone.name }
      </p>
      <div>
        <p>Located in { country.continent.name }:
          <Span onClick={ () => updateContinentCode(country.continent.code) }>
            Get Information about { country.continent.name }
          </Span></p>
        <p>Flag { country.emoji }</p>
        <p>Number of Languages: { country.languages.length }.</p>
        { country.languages.map(language => <Span key={ language.code }
                                                  onClick={ () => updateLanguageCode(language.code) }>{ language.name }</Span>) }
        <p>Click language name for more info</p>
      </div>
    </Info> : <Info>
      <div>
        <p>Temperature { temperature } &#8451; @ { moment.unix(time).format("HH:mm:ss") }</p>
        <p>Summary: { summary }</p>
      </div>
    </Info>
  };

  return Object.keys(countryInfo).length > 0 ? (
    <Query query={ COUNTRY_QUERY } variables={ { code: countryCode } }>
      { ({ country }) => {
        return <Wrapper>
          <FlagWrapper>{ country.emoji }</FlagWrapper>
          <h1>{ country.name }</h1>
          { renderCountryInfoOrWeatherInfo(country, countryInfo.weather) }
          { renderButtons(country.name) }
        </Wrapper>
      } }
    </Query>
  ) : null;
};
