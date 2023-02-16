import styled from 'styled-components';

import { ContainerFlex } from '../../ui/containers';

interface IProps {
  gap: number;
}

const StyledStars = styled(ContainerFlex).attrs<IProps>((props) => ({
  gap: `${props.gap}px`,
}))<IProps>`
  grid-gap: ${({ gap }) => gap};
`;

const Text = styled.p`
  color: #a7a7a7;
  letter-spacing: 0.1px;
`;

export { StyledStars, Text };
