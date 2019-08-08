import styled from 'styled-components';
import { offWhite, aldrich, mainBlue } from './styleVars.style';

const FormStyle = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  font-family: ${aldrich};

  h1 {
    color: ${offWhite};
    margin-top: 18px
    margin-bottom: 10px
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3f3f3f;
    width: 80%;
    border-radius: 2px;
    border: 4px solid black;
  }

  .input-items {
    width: 100%;
    display: grid;
    grid-template-columns: 120px 1fr;
    margin-top: 30px;

    span {
      text-align: right;
      margin-right: 10px;
      margin-top: 3px;
    }
  }

  #title {
    width: 95%;
    margin: 0;
    background-color: ${offWhite};
    border: none;
    height: 20px;
    font-family: ${aldrich};
  }

  #errCode {
    margin: 0;
    width: 95%;
    background-color: ${offWhite};
    font-family: ${aldrich};
  }

  #description {
    margin: 0;
    height: 50px;
    width: 95%;
    background-color: ${offWhite};
    font-family: ${aldrich};
  }

  #solution {
    margin: 0;
    height: 50px;
    width: 95%;
    background-color: ${offWhite};
    font-family: ${aldrich};
  }

  #tags {
    margin: 0;
    height: 50px;
    width: 95%;
    background-color: ${offWhite};
    font-family: ${aldrich};
  }

  button {
    width: 130px;
    height: 25px;
    margin: 20px;
    background-color: ${offWhite};
    font-family: ${aldrich};
    border: none;
  }

  button: hover {
    background-color: ${mainBlue};
  }

  input[type=text]:focus {
    background-color: yellow;
  }
`;

export {
  FormStyle
};
