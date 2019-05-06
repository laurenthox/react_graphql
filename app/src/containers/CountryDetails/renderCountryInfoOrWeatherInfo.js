import React from 'react';
import moment from 'moment';

import { Info, Span } from "../../styles/CountryDetails";

export const renderCountryInfoOrWeatherInfo = (
  country, { time, temperature, summary },
  showWeather,
  updateLanguageCode,
  updateContinentCode,
  countryInfo
) => {
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
      { country.languages.map(language => (
        <Span key={ language.code }
              onClick={ () => updateLanguageCode(language.code) }>
          { language.name }
        </Span>
      )) }
      <p>Click language name for more info</p>
    </div>
  </Info> : <Info>
    <div>
      <p>Temperature { temperature } &#8451; @ { moment.unix(time).format("HH:mm:ss") }</p>
      <p>Summary: { summary }</p>
    </div>
  </Info>
};