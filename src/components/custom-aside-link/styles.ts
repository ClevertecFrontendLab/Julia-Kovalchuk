import { Link, PathMatch } from 'react-router-dom';
import styled from 'styled-components';

import { Media } from '../../ui/media';

type RenderType = { $active: PathMatch<string> | null | 'primary' | 'secondary' | 'tertiary' };

const StyledCustomLink = styled(Link)<RenderType>`
  display: flex;
  width: 255px;
  font-size: ${({ type }) => (type === 'tertiary' ? '16px' : '18px')};
  line-height: ${({ type }) => (type === 'tertiary' ? '24px' : '28px')};
  font-weight: ${({ type }) => (type === 'tertiary' ? '400' : '700')};
  color: ${({ $active }) => ($active ? 'none' : '#363636')};
  fill: ${({ $active }) => ($active ? '#F83600' : '#363636')};
  background: ${({ $active }) =>
    $active ? 'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%)' : '#363636'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: ${({ type }) => (type === 'secondary' ? '12px' : '0px')};
  border-bottom: ${({ type, $active }) => (type === 'secondary' ? ($active ? '1px solid #F83600' : 'none') : 'none')};

  ${Media.SM} {
    width: 100%;
  }
`;

export { StyledCustomLink };
