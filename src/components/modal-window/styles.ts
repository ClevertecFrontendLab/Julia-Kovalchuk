import styled from 'styled-components';

import { ContainerFlexColumnCenter } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlexColumnCenter)`
  grid-gap: 32px;
  padding: 48px 96px;
  max-width: 600px;
  background: #ffffff;
  border-radius: 16px;
  margin-top: 100px;

  ${Media.SM} {
    grid-gap: 24px;
    margin-top: 20px;

    padding: 42px 16px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #363636;
  text-align: center;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

export { Wrapper, Text };
