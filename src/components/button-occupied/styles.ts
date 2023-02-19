import styled from 'styled-components';

import { Media } from '../../ui/media';

interface IProps {
  large: number;
  middle: number;
  small: number;
  padding: number;
  fontSize: number;
  isBig: boolean;
}

const StyledButtonOccupied = styled.button.attrs<IProps>((props) => ({
  large: `${props.large}px`,
  middle: `${props.middle}px`,
  small: `${props.small}px`,
  padding: `${props.padding}px`,
  fontSize: `${props.fontSize}px`,
}))<IProps>`
  width: ${({ large }) => large};
  padding-block: ${({ padding }) => padding};
  padding-inline: 15px;
  background: #ffffff;
  border: 1px solid #bfc4c9;
  border-radius: 20px;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #363636;

  ${Media.MD} {
    width: ${({ middle }) => middle};
  }

  ${Media.SM} {
    width: ${({ isBig, small }) => (isBig ? '100%' : small)};
    font-size: 12px;
  }
`;

export { StyledButtonOccupied };
