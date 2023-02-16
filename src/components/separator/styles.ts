import styled from 'styled-components';

import { Media } from '../../ui/media';

const StyledSeparator = styled.div`
  width: 350px;
  height: 1px;
  background: #ebebeb;
  margin-block: 16px;

  ${Media.MD} {
    width: 307px;
  }

  ${Media.SM} {
    width: 100%;
    margin-block: 8px;
    background: #f9f9fa;
  }
`;

export { StyledSeparator };
