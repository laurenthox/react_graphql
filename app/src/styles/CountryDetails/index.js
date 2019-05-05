import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 6rem;
    padding: 0;
    margin: 0;
  }
`;

export const FlagWrapper = styled.div`
  font-size: 12rem;
  margin: 0;
`;

export const Info = styled.div`
  width: 80%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-around;
`;

export const Span = styled.span`
  text-decoration: underline;
  margin-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;