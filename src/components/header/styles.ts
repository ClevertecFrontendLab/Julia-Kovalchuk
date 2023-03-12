import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFlex, ContainerFlexBeetween } from '../../ui/containers';
import { Media } from '../../ui/media';

type $isProfileMenuOpen = { $isProfileMenuOpen: boolean };

const StyledHeader = styled.header<$isProfileMenuOpen>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 32px 0px 15px;
  margin-bottom: 47px;
  background: white;
  box-shadow: ${({ $isProfileMenuOpen }) => ($isProfileMenuOpen ? '0 4px 4px rgba(54, 54, 54, 0.05)' : 'none')};

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

const UserInfo = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  grid-gap: 16px;

  ${Media.MD} {
    display: none;
  }
`;

const Text = styled.p`
  font-weight: 600;
  color: #363636;
`;

const ProfileMenu = styled.div<$isProfileMenuOpen>`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 10;
  display: ${({ $isProfileMenuOpen }) => ($isProfileMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: end;
  grid-gap: 32px;
  min-width: 270px;
  padding-block: 32px;
  padding-right: 24px;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(54, 54, 54, 0.05), -4px 4px 4px rgba(54, 54, 54, 0.05);
  border-radius: 0px 0px 10px 10px;
`;

const ProfileLink = styled(Link)`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #363636;
`;

export { Title, Box, LogoContainer, UserInfo, Text, Container, StyledHeader, BurgerBox, ProfileMenu, ProfileLink };
