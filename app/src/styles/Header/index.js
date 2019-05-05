import styled from 'styled-components';

import keyFrame from '../keyframes';

const Flashit = styled.div`
  animation: ${ keyFrame } linear 1s infinite;
  -webkit-animation: ${ keyFrame } linear 1s infinite;
`;

export default Flashit;
