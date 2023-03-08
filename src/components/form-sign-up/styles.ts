import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

interface IProps {
  isError?: boolean;
  isPartError?: boolean;
}

const Wrapper = styled.div`
  min-width: 550px;
  padding: 48px 56px;
  border-radius: 30px;
  background: #ffffff;

  ${Media.SM} {
    padding: 24px 16px 27px;
  }
`;

const FormBox = styled(ContainerFlexColumn)`
  grid-gap: 50px;
`;

const Container = styled(ContainerFlexColumn)`
  grid-gap: 36px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Rules = styled.p<IProps>`
  position: absolute;
  left: 12px;
  top: 58px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: ${({ isError }) => (isError ? '#F42C4F' : '#A7A7A7')};
`;

const El = styled.span<IProps>`
  color: ${({ isPartError }) => (isPartError ? '#F42C4F' : '#A7A7A7')};
`;

const Note = styled(ContainerFlex)`
  align-items: center;
  grid-gap: 16px;
  margin-top: 16px;

  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 7px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #727272;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const LinkNote = styled(Link)`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #363636;
  margin: 0px;
  padding: 0px;
`;

const EyeBox = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const CheckBox = styled.div`
  position: absolute;
  right: 44px;
  top: 16px;
`;

export { Rules, El, InputContainer, FormBox, Container, Note, LinkNote, Text, EyeBox, CheckBox, Wrapper };
