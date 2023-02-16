import { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

import { StyledCustomLink } from './styles';

interface IProps {
  to: ROUTE | string;
  children: ReactNode;
  onClick?: () => void;
  type: 'primary' | 'secondary' | 'tertiary';
}

export const CustomAsidelink = ({ to, children, onClick, type }: IProps) => {
  const IsActive = useMatch(to);

  return (
    <StyledCustomLink $active={IsActive} type={type} to={to} onClick={onClick}>
      {children}
    </StyledCustomLink>
  );
};
