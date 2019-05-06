import React, { useState } from "react";

const defaultState = {
  countryCode: "CH",
  countryName: "Switzerland",
  continentCode: '',
  languageCode: '',
  showWeather: false,
  modal: false,
  latLng: {
    lat: 46.8182,
    lng: 8.2275
  },
};

const Context = React.createContext(defaultState);

export const Store = ({ children }) => {
  const [countryCode, setCountryCode] = useState(defaultState.countryCode);
  const [countryName, setCountryName] = useState(defaultState.countryName);
  const [latLng, setLatLng] = useState(defaultState.latLng);
  const [showWeather, setShowWeather] = useState(defaultState.showWeather);
  const [continentCode, setContinentCode] = useState(defaultState.continentCode);
  const [languageCode, setLanguageCode] = useState(defaultState.languageCode);
  const [modal, setModal] = useState(defaultState.modal);

  const updateCodeAndName = (countryCode, countryName) => {
    setCountryCode(countryCode);
    setCountryName(countryName);
  };

  const onLatLngChange = latLng => setLatLng(latLng);

  const updateShowWeather = showWeather => setShowWeather(showWeather);

  const updateContinentCode = (continentCode) => {
    setContinentCode(continentCode);
    setModal(!modal);
  };

  const updateLanguageCode = languageCode => {
    setLanguageCode(languageCode);
    setModal(!modal);
  };

  const showHideModal = () => {
    setContinentCode('');
    setLanguageCode('');
    setModal(!modal);
  };

  return (
    <Context.Provider
      value={ {
        ...defaultState,
        countryCode,
        countryName,
        latLng,
        showWeather,
        continentCode,
        modal,
        languageCode,
        setCountryName,
        updateCodeAndName,
        onLatLngChange,
        updateShowWeather,
        updateContinentCode,
        updateLanguageCode,
        showHideModal
      } }>
      { children }
    </Context.Provider>
  );
};

export default Context;
