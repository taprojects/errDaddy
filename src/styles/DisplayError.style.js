import styled from 'styled-components';
import { mainBlue, aldrich, offWhite } from './styleVars.style';

const DisplayStyle = styled.div `
display: flex;
flex-direction: column;
margin: 15px;

h2 {
  margin: 5px;
  color: ${offWhite};
  font-family: ${aldrich};
}

p {
  color: ${mainBlue};
  margin-left: 15px;
  font-family: ${aldrich};
}

.tagList {
  margin-left: 15px;
}

a {
  color: ${mainBlue};
  text-decoration: none;
  font-family: ${aldrich};
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
    font-family: ${aldrich};
    background-color: ${offWhite};
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    span {
      margin-top: 7px;
      color: ${offWhite};
      font-family: ${aldrich};
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
