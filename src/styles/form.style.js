import styled from 'styled-components';

const FormStyle = styled.div `
  form{
    display: flex;
    flex-direction: column;
  }

  #title {
    width: 90%;
    margin: 10px;
  }

  #errCode {
    margin: 10px;
    width: 90%;
  }

  #description {
    margin: 10px;
    height: 50px;
    width: 90%;
  }

  #solution {
    margin: 10px;
    height: 50px;
    width: 90%;
  }

  #tags {
    margin: 10px;
    height: 50px;
    width: 90%;
  }

  button {
    width: 100px;
    height: 40px;
  }
`;

export {
  FormStyle
};
