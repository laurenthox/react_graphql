import styled from "styled-components";

export const Button = styled.button`
  width: auto;
  height: 4rem;
  padding: 1rem 4rem;
  border-radius: 2rem;
  background-color: transparent;
  color: white;
  font-size: 2rem;
  outline: none;
  &:hover {
    background-color: ${ props => props.theme.fontColor };
    color: black;
    cursor: pointer;
  }
  &:active {
    margin-top: 0.1rem;
  }
`;
