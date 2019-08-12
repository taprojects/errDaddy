import styled from 'styled-components';
import { mainBlue, offWhite, aldrich } from './styleVars.style';

const ErrListStyle = styled.ul `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  color: white;

li {
  color: ${offWhite};
  height: 25px;
  font-family: ${aldrich};
  width: 80%;
}

li :hover {
  color: red;
  font-size: 102%;
  transition: 0.1s
  }
}

#title {
  margin-right: 10px;
}

a {
  color: ${mainBlue};
  text-decoration: none;
  display: grid;
  grid-template-columns: 10fr 2.5fr 1.5fr 1.5fr;
  justify-content: space-between;
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

span {
  text-align: start;
}
`;

export {
  ErrListStyle
};
