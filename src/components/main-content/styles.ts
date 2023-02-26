import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const StyledSquareBooksContent = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  grid-gap: 20px;

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

const NoBooksText = styled.p`
  width: 100%;
  padding-top: 200px;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #a7a7a7;

  ${Media.MD} {
    padding-top: 228px;
  }

  ${Media.SM} {
    padding-top: 137px;
  }
`;

export { StyledSquareBooksContent, StyledLineBooksContent, NoBooksText };
