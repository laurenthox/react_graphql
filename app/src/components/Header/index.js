import React, { useContext } from "react";

import store from "../../context";
import Flashit from '../../styles/Header';

export const Header = () => {
  const context = useContext(store);
  const { countryName } = context;
  return <Flashit>You landed in { countryName }</Flashit>
};
