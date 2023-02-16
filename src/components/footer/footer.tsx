import { Link } from 'react-router-dom';

import { FacebookIcon, InstagramIcon, LinkedinIcon, VKIcon } from '../../assets';

import { Box, IconContainer, StyledFooter, Text } from './styles';

export const Footer = () => (
  <StyledFooter>
    <Box>
      <Text>© 2020-2023 Cleverland.</Text>
      <Text>Все права защищены.</Text>
    </Box>
    <IconContainer>
      <Link to='#' target='_blank'>
        <FacebookIcon />
      </Link>
      <Link to='#' target='_blank'>
        <InstagramIcon />
      </Link>
      <Link to='#' target='_blank'>
        <VKIcon />
      </Link>
      <Link to='#' target='_blank'>
        <LinkedinIcon />
      </Link>
    </IconContainer>
  </StyledFooter>
);
