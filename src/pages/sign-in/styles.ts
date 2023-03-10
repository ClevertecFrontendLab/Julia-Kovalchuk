import styled from 'styled-components';

import { ContainerFlexColumnCenter } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlexColumnCenter)`
  width: 100%;

  ${Media.SM} {
    padding-inline: 16px;
  }
`;

export { Wrapper };
