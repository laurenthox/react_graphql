import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 50%;
  border: 0.1rem solid #ccc;
  box-shadow: 1rem 1rem 1rem black;
  padding: 2rem;
  left: 25%;
  top: 30%;
  box-sizing: border-box;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.4s ease-out;
  background: ${ props => props.theme.bg };
  background: ${ props => props.theme.bg };
  color:${ props => props.theme.fontColor };
  ${ props => props.modal && `transform: translateX(0);` };
  ${ props => props.modal && `opacity: 1` };
`;