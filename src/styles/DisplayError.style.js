import styled from 'styled-components';
import { mainBlue } from './styleVars.style';

const DisplayStyle = styled.div `
display: flex;
flex-direction: column;

h2 {
  margin: 5px;
}

p {
  color: ${mainBlue};
  margin-left: 15px;
}
`;

export {
  DisplayStyle
};
