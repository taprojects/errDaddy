import styled from 'styled-components';
import { aldrich, offWhite } from './styleVars.style';

const ErrorContainerStyle = styled.div `

min-width: 900px;

h2 {
  color: ${offWhite};
  margin-left: 50px;
  font-family: ${aldrich};
}

header {
  display: grid;
  grid-template-columns: 11fr 4fr 1.3fr;
  }
}

`;

export { ErrorContainerStyle };
