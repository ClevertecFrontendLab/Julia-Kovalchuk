import styled from 'styled-components';

import { Media } from '../../ui/media';

const StyledBreadcrumbs = styled.div`
  position: absolute;
  /* top: 143px; */
  left: 0;
  width: 100%;
  padding-block: 23px;
  background: #f9f9fa;

  ${Media.MD} {
    /* top: 128px; */
    padding-block: 20px;
  }

  ${Media.SM} {
    /* top: 84px; */
  }
`;

const BreadcrumbsContent = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;

  ${Media.MD} {
    padding-inline: 64px;
  }

  ${Media.SM} {
    padding-inline: 16px;
  }
`;

const Text = styled.p`
  color: #a7a7a7;

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }

  ${Media.SM} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

export { StyledBreadcrumbs, BreadcrumbsContent, Text };
