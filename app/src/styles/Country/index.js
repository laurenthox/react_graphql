import styled from "styled-components";

export const Header = styled.h1`
  font-size: 3rem;
  color: ${ props => props.theme.fontColor };
  text-transform: uppercase;
  text-align: center;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TableHeader = styled.div`
  background-color: ${ props => props.theme.tbg }
`;

export const TableContent = styled.div`
  height: 30rem;
  overflow-x: auto;
  border: ${ props => props.theme.borders }
`;

export const TableHead = styled.thead``;

export const TH = styled.th`
  padding: 2rem 1.5rem;
  text-align: left;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${ props => props.theme.fontColor };
  text-transform: uppercase;
`;

export const TR = styled.tr`
  &:hover {
    background-color: ${ props => props.theme.tbg };
    cursor: pointer;
  }
`;

export const TD = styled.td`
  padding: 1.5rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 1.6rem;
  color: ${ props => props.theme.fontColor };
  border-bottom: ${ props => props.theme.borders }
`;

export const SECTION = styled.section`
  margin: 5rem;
`;
