import React from "react";

import Countries from "../Countries";
import Map from "../Map";
import { Header } from '../Header';
import { CountryDetails } from '../../containers/CountryDetails'
import { Modal } from '../Modal'

import { Container, Controls, CountryDetailsContainer, DataCountainer, Main, MapContainer } from "../../styles/App";

function App() {
  return (
    <Container>
      <Modal/>
      <Controls>
        <Header/>
      </Controls>
      <MapContainer>
        <Map/>
      </MapContainer>
      <Main>
        <DataCountainer>
          <Countries/>
        </DataCountainer>
        <CountryDetailsContainer>
          <CountryDetails/>
        </CountryDetailsContainer>
      </Main>
    </Container>
  );
}

export default App;
