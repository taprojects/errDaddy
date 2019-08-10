import styled from 'styled-components';
import { mainBlue, offWhite, aldrich } from './styleVars.style';

const ErrListStyle = styled.ul `
  margin-left: 60px;
  color: white;
  width: 80%;

li {
  color: ${offWhite};
  height: 25px;
  font-family: ${aldrich};
}

li :hover {
  color: red;
  font-size: 102%;
  transition: 0.1s
  }
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
