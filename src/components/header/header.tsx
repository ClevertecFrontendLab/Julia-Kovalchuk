import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerIcon, CloseBurgerIcon, LogoIcon, LogoNameIcon } from '../../assets';
import avatar from '../../assets/images/avatar.png';
import { useOnClickHide } from '../../hooks/use-on-click-hide';
import { ROUTE } from '../../routes/routes';
import { BurgerMenu } from '../burger-menu/burger-menu';

import {
  Box,
  BurgerBox,
  Container,
  LogoContainer,
  ProfileLink,
  ProfileMenu,
  StyledHeader,
  Text,
  Title,
  UserInfo,
} from './styles';

export const Header = () => {
  const [isOpenBurgerMenu, toggleIsOpenBurgerMenu] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(true);
  const [isProfileMenuOpen, setisProfileMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickHide(ref, () => toggleIsOpenBurgerMenu(false));

  const handleBurgerView = () => {
    toggleIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  const handleCategoryView = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const handleView = () => {
    setIsOpenCategory(false);
  };

  const handleProfileMenuView = () => {
    setisProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <StyledHeader $isProfileMenuOpen={isProfileMenuOpen}>
      <Link to={`${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`}>
        <LogoContainer>
          <Box>
            <LogoIcon />
          </Box>
          <LogoNameIcon />
        </LogoContainer>
      </Link>
      <BurgerBox onClick={handleBurgerView} type='button' data-test-id='button-burger'>
        {isOpenBurgerMenu ? <CloseBurgerIcon /> : <BurgerIcon />}
      </BurgerBox>
      <div ref={ref}>
        <BurgerMenu
          isOpen={isOpenBurgerMenu}
          handleCategoryView={handleCategoryView}
          handleView={handleView}
          handleBurgerView={handleBurgerView}
          isOpenCategory={isOpenCategory}
          data-test-id='burger-navigation'
        />
      </div>
      <Container>
        <Title>Бибилиотека</Title>
        <UserInfo type='button' onClick={handleProfileMenuView}>
          <Text>Привет, Юлия!</Text>
          <img src={avatar} alt='avatar' />
          <ProfileMenu $isProfileMenuOpen={isProfileMenuOpen}>
            <ProfileLink to=''>Профиль</ProfileLink>
            <ProfileLink to=''>Выход</ProfileLink>
          </ProfileMenu>
        </UserInfo>
      </Container>
    </StyledHeader>
  );
};
