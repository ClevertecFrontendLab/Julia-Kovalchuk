import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

import { Media } from '../../ui/media';

type RenderType = { $active: PathMatch<string> | null | 'primary' | 'secondary' | 'tertiary' | 'fourth' };

const StyledCustomLink = styled(Link)<RenderType>`
  display: flex;
  width: 255px;
  font-size: ${({ type }) => (type === 'tertiary' ? '16px' : '18px')};
  line-height: ${({ type }) => (type === 'tertiary' ? '24px' : '28px')};
  font-weight: ${({ type, $active }) => (type === 'tertiary' ? ($active ? '700' : '400') : '700')};
  color: ${({ $active, type }) => ($active || type === 'fourth' ? '#F83600' : '#363636')};
  fill: ${({ $active, type }) => ($active || type === 'fourth' ? '#F83600' : '#363636')};
  background-clip: text;
  padding-bottom: ${({ type }) => (type === 'secondary' ? '12px' : '0px')};
  border-bottom: ${({ type, $active }) =>
    type === 'secondary' || type === 'fourth' ? ($active || type === 'fourth' ? '1px solid #F83600' : 'none') : 'none'};

  ${Media.SM} {
    width: 100%;
  }
`;

export { StyledCustomLink };
