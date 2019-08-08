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

.helpfull {
  margin: 30px;
  width: 50%;
  display: flex;
  justify-content: space-around;

  button {
    border: none;
    padding: 8px;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
      margin-top: 3px;
      color: white;
    }
  }
}
.good: hover {
  background-color: green;
}
.bad: hover {
  background-color: red;
}

`;

export {
  DisplayStyle
};
