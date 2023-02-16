import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlexColumn)`
  align-items: flex-start;
  padding-left: 25px;
  margin-bottom: 62px;

  ${Media.MD} {
  padding-left: 0px;
  }

  ${Media.SM} {
    margin-bottom: 24px;
  }
`;

const ListContainer = styled.ol`
  list-style: none;
  counter-reset: li;
`;

const Chapter = styled.li`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-top: 32px;

  &::before {
    counter-increment: li;
    content: counters(li, '.') '. ';
  }

  ${Media.SM} {
    margin-top: 24px;
  }
`;

const Paragraf = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  margin-top: 16px;
  margin-left: 30px;

  &::before {
    counter-increment: li;
    content: counters(li, '.') '. ';
  }
`;

export { Wrapper, Chapter, ListContainer, Paragraf };
