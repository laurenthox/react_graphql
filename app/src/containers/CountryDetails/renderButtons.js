import React from 'react';
import { ButtonComponent } from "../../components/Button";

export const renderButtons = (name, updateShowWeather, showWeather) => {
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