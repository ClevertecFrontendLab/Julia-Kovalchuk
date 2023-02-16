import styled from 'styled-components';

import { ContainerFlex, ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 32px 0px 15px;
  margin-bottom: 47px;
  background: white;

  ${Media.MD} {
    padding: 32px 0px 24px;
    margin-bottom: 30px;
  }

  ${Media.SM} {
    padding: 24px 0px;
    margin-bottom: 11px;
  }
`;

const BurgerBox = styled.button`
  display: none;
  background: none;

  ${Media.MD} {
    display: flex;
    align-items: center;
    min-width: 32px;
    min-height: 32px;
  }

  ${Media.SM} {
    min-width: 24px;
    min-height: 24px;
    max-width: 24px;
    max-height: 24px;
  }
`;
const Container = styled(ContainerFlexBeetween)`
  width: 100%;
`;
const Title = styled.h1`
  margin-left: 30px;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #363636;

  ${Media.MD} {
    margin-left: 26px;
  }

  ${Media.SM} {
    margin-left: 24px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #6e76f1;
`;

const LogoContainer = styled(ContainerFlex)`
  align-items: center;
  grid-gap: 8px;
  min-width: 255px;

  ${Media.MD} {
    display: none;
  }
`;

const UserInfo = styled(ContainerFlex)`
  grid-gap: 16px;

  ${Media.MD} {
    display: none;
  }
`;

const Text = styled.p`
  font-weight: 600;
  color: #363636;
`;

export { Title, Box, LogoContainer, UserInfo, Text, Container, StyledHeader, BurgerBox };
