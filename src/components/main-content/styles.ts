import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledSquareBooksContent = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  grid-gap: 21.5px;

  ${Media.MD} {
    grid-gap: 35px;
  }

  ${Media.SM} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLineBooksContent = styled(ContainerFlexColumn)`
  grid-gap: 16px;
`;

export { StyledSquareBooksContent, StyledLineBooksContent };
