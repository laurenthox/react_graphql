import React from "react";

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

export class Store extends React.Component {
  state = defaultState;

  updateCodeAndName = (countryCode, countryName) => {
    this.setState({ countryCode, countryName });
  };

  onLatLngChange = latLng => {
    this.setState({ latLng });
  };

  updateShowWeather = showWeather => {
    this.setState({ showWeather });
  };

  updateContinentCode = (continentCode) => {
    this.setState({ continentCode, modal: !this.state.modal });
  };

  updateLanguageCode = (languageCode) => {
    this.setState({ languageCode, modal: !this.state.modal });
  };

  showHideModal = () => {
    this.setState({ modal: !this.state.modal, continentCode: '', languageCode: '' });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          updateCodeAndName: this.updateCodeAndName,
          onLatLngChange: this.onLatLngChange,
          updateShowWeather: this.updateShowWeather,
          updateContinentCode: this.updateContinentCode,
          updateLanguageCode: this.updateLanguageCode,
          showHideModal: this.showHideModal
        }}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default Context;
