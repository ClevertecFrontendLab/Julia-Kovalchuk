import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

type $isOpen = { $isOpen: boolean };

const Wrapper = styled(ContainerFlexColumn)<$isOpen>`
  position: absolute;
  top: 90px;
  left: ${({ $isOpen }) => ($isOpen ? '62px' : '-100%')};
  z-index: 2;
  border-radius: 10px;
  grid-gap: 42px;
  padding-top: 32px;

  max-width: 502px;
  background: #f9f9fa;

  ${Media.MD} {
    width: 502px;
    max-width: 502px;
    background: #f9f9fa;
  }

  ${Media.SM} {
    width: 93%;
    margin-inline: auto;
    max-width: 93%;
    top: 76px;
    left: ${({ $isOpen }) => ($isOpen ? '16px' : '-100%')};
  }
`;

const Container = styled.div`
  margin-left: 32px;

  ${Media.SM} {
    margin-inline: 16px;
  }
`;

const CategoryBox = styled(ContainerFlexColumn)<$isOpen>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  grid-gap: 16px;
  padding-left: 20px;
  padding-top: 10px;
`;

const Amount = styled.span`
  padding-left: 6px;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
`;

const ProfileContainer = styled(ContainerFlexColumn)`
  grid-gap: 42px;
  border-top: 1px solid #bfc4c9;
  margin: 0px 0px 52px 32px;
  padding-top: 32px;
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

const ExitButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
  color: #363636;
  text-align: left;
  ${Media.SM} {
    width: 100%;
  }
`;

export { Wrapper, CategoryBox, Amount, ProfileContainer, Container, ButtonHide, ContainerLink, ExitButton };
