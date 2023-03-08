import { ReactNode } from 'react';

import { StyledTitle } from './styles';

interface IProps {
  children: ReactNode;
  size: number;
  color: 'black' | 'white';
  margin: number;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700;
}

export const Title = ({ children, size, color, margin = 0, weight = 700 }: IProps) => (
  <StyledTitle size={size} color={color} margin={margin} weight={weight}>
    {children}
  </StyledTitle>
);
