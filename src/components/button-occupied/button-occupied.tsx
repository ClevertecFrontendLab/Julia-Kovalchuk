import { ReactNode } from 'react';

import { StyledButtonOccupied } from './styles';

interface IProps {
  children: ReactNode;
  large?: number;
  middle?: number;
  small?: number;
  padding?: number;
  fontSize?: number;
  isBig?: boolean;
}

export const ButtonOccupied = ({
  children,
  large = 166,
  middle = 166,
  small = 256,
  padding = 11,
  fontSize = 12,
  isBig = false,
}: IProps) => (
  <StyledButtonOccupied
    large={large}
    middle={middle}
    small={small}
    padding={padding}
    fontSize={fontSize}
    isBig={isBig}
    disabled={true}
  >
    {children}
  </StyledButtonOccupied>
);
