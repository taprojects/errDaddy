import styled from 'styled-components';
import { offWhite, aldrich } from './styleVars.style';

const SplashStyle = styled.section`
  width: 100%
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center

  h1, h3, p {
    color: ${offWhite};
    font-family: ${aldrich};
  }

  h1 {
    font-size: 42px;
    width: 600px;
    margin-top: 60px;
  }

`;

export {
  SplashStyle
};
