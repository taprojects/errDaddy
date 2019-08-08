import styled from 'styled-components';
import { mainBlue, aldrich } from './styleVars.style';

const TagStyle = styled.div `
display: flex;
flex-direction: row;
color: ${mainBlue};

a {
  margin: 5px;
  text-decoration: none;
  
}
`;

export {
  TagStyle
};
