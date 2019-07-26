import styled from 'styled-components';

const NavStyle = styled.nav `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 15px;
  height: 30px;
  
  button {
    color: blue;
    height: 18px;
    margin-right: 10px;
  }
  
  input {
    height: 18px;
    width: 180px;
    margin-right: 10px;
  }
  
  form {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
`;

export {
  NavStyle
};
