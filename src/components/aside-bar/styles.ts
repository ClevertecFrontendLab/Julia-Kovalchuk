import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

type $isOpen = { $isOpen: boolean };
type $isActive = { $isActive: boolean };

const Wrapper = styled(ContainerFlexColumn)`
  grid-gap: 42px;
  align-self: flex-start;
  width: 279px;
  min-width: 279px;
  height: 75%;
  padding-bottom: 100px;

  ${Media.MD} {
    display: none;
  }
`;
const CategoryBox = styled(ContainerFlexColumn)<$isOpen>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  grid-gap: 16px;
  padding-left: 20px;
  padding-top: 16px;
`;

const Amount = styled.span<$isActive>`
  padding-left: 6px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: ${({ $isActive }) => ($isActive ? '#363636' : '#a7a7a7')};
  font-weight: 400;
`;

const ButtonHide = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  fill: red;
`;

const ContainerLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { Wrapper, CategoryBox, Amount, ButtonHide, ContainerLink };
