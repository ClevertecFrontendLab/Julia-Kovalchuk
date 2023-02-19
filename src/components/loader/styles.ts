import styled from 'styled-components';

import { ContainerFlexRowCenter } from '../../ui/containers';

const Wrapper = styled(ContainerFlexRowCenter)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(54, 54, 54, 0.3);

  backdrop-filter: blur(10px);
`;

export { Wrapper };
