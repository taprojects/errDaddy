import styled from 'styled-components';
import { mainBlue, aldrich } from './styleVars.style';

const ErrorContainerStyle = styled.div `

min-width: 900px;

h2 {
  color: white;
  margin-left: 50px;
  font-family: ${aldrich};
}

ul {
  margin-left: 60px;
  color: white;
  width: 80%;
}

li {
  height: 25px;
  font-family: ${aldrich};
}

a {
  color: ${mainBlue};
  text-decoration: none;
  display: grid;
  grid-template-columns: 3fr 1fr 1.5fr;
  justify-content: space-between;
}

li :hover {
  color: red;
  font-size: 102%;
  transition: 0.1s
}

span {
  margin-left: 8px;
  text-align: end;
}

div {
  display: flex;
  align-items: top;
  justify-content: space-around;
}

p {
  display: flex;
  align-items: top;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis; 
  height: 20px;
  white-space: nowrap; 
}

`;

export {
  ErrorContainerStyle
};
