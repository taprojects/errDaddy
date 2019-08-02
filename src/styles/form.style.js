import styled from 'styled-components';
import { offWhite } from './styleVars.style';
const inputMargin = '10px';

const FormStyle = styled.div `

  h1 {
    color: white;
    margin: ${inputMargin};
  }

  form{
    display: flex;
    flex-direction: column;
  }

  #title {
    width: 90%;
    margin: ${inputMargin};
    background-color: ${offWhite};
    border: none;
  }

  #errCode {
    margin: ${inputMargin};
    width: 90%;
    background-color: ${offWhite};
  }

  #description {
    margin: ${inputMargin};
    height: 50px;
    width: 90%;
    background-color: ${offWhite};
  }

  #solution {
    margin: ${inputMargin};
    height: 50px;
    width: 90%;
    background-color: ${offWhite};
  }

  #tags {
    margin: ${inputMargin};
    height: 50px;
    width: 90%;
    background-color: ${offWhite};
  }

  button {
    width: 100px;
    height: 40px;
    margin: ${inputMargin};
    background-color: ${offWhite};
  }

  button: hover {
    background-color: red;
  }
`;

export {
  FormStyle
};
