import styled from 'styled-components';

import { ContainerFlex } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0px;
  border-top: 1px solid #bfc4c9;
  background: white;

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;

  ${Media.SM} {
    flex-direction: column;
    margin-bottom: 18px;
  }
`;

const Text = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #363636;

  ${Media.SM} {
    text-align: center;
    font-size: 15px;
    line-height: 20px;
  }
`;

const IconContainer = styled(ContainerFlex)`
  grid-gap: 28px;
`;

export { StyledFooter, Text, IconContainer, Box };
