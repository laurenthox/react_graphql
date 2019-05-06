import { useContext } from 'react'

import CountryCode from "../../context";
import { showContinent } from "./continentInfo";
import { showLanguage } from "./languageInfo";

export const ShowInfo = () => {
  const context = useContext(CountryCode);
  const { continentCode, languageCode } = context;

  return continentCode ? showContinent(continentCode) : showLanguage(languageCode)
};
