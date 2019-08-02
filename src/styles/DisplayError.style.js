import styled from 'styled-components';
import { mainBlue } from './styleVars.style';

const DisplayStyle = styled.div `
display: flex;
flex-direction: column;
margin: 15px;

h2 {
  margin: 5px;
  color: white;
}

p {
  color: ${mainBlue};
  margin-left: 15px;
}

.tagList {
  margin-left: 15px;
}

a {
  color: ${mainBlue};
  text-decoration: none;
}

a: hover {
  color: red;
}
`;

export {
  DisplayStyle
};
