import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Controls = styled.div`
  width: 75%;
  height: 5vh;
  margin: auto;
  color: ${ props => props.theme.fontColor };
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    width: 25%;
    display: flex;
    justify-content: space-around;
    margin-left: 3rem;
  }
`;

export const Main = styled.div`
  width: 75%;
  height: 40vh;
  margin: auto;
  display: flex;
  color: ${ props => props.theme.fontColor };
`;

export const DataCountainer = styled.div`
  width: 50%;
`;

export const CountryDetailsContainer = styled.div`
  width: 45%;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 50vh;
`;
