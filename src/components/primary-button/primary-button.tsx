import { ReactNode } from 'react';

import { StyledPrimaryButton } from './styles';

interface IProps {
  children: ReactNode;
  large?: number;
  middle?: number;
  small?: number;
  padding?: number;
  fontSize?: number;
  isBig?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'reset' | 'button' | 'submit';
}

export const PrimaryButton = ({
  children,
  large = 166,
  middle = 166,
  small = 256,
  padding = 11,
  fontSize = 12,
  isBig = false,
  disabled = false,
  onClick,
  type = 'button',
}: IProps) => (
  <StyledPrimaryButton
    large={large}
    middle={middle}
    small={small}
    padding={padding}
    fontSize={fontSize}
    isBig={isBig}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </StyledPrimaryButton>
);
