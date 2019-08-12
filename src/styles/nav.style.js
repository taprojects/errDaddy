import styled from 'styled-components';
import { mainBlue, offWhite, saira, aldrich } from './styleVars.style';

const NavStyle = styled.nav `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: black;

  min-width: 825px;
    
  h1 {
    text-decoration: none;
    color: ${mainBlue};
    margin: 0;
    margin-left: 20px;
    font-size: 42px;
    font-weight:  bold;
    font-family: ${saira};
  }

  h1: hover {
    cursor: pointer;
    color: red;
    font-size: 265%;
    transition: 0.1s;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input {
    height: 24px;
    width: 200px;
    margin-right: 10px;
    border: 2px solid black;
    background-color: ${offWhite};
    font-family: ${aldrich};
    text-align: center;
    font-size: 14px;
  }

  datalist {
    max-height: 200px;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: ${mainBlue};
    font-size: 24px;
    font-family: ${saira};
    margin-right: 20px;
    width: 6rem;
  }

  a: hover {
    color: red;
    font-size: 155%;
    transition: 0.1s
  }
`;

export {
  NavStyle
};
