import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const LogoIcon = styled(Logo)`
  width: 173px;
  height: 65px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 150px;
    height: 45px;
  }
`;
