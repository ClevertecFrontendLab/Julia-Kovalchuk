import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

interface IProps {
  isError?: boolean;
  isPartError?: boolean;
}

const Wrapper = styled.div`
  max-width: 528px;
  min-width: 528px;
  padding: 32px 56px 48px;
  border-radius: 30px;
  background: #ffffff;

  ${Media.SM} {
    max-width: 100%;
    min-width: 100%;
    padding: 24px 16px 27px;
  }
`;

const StyledForm = styled.form`
  max-width: 100%;
`;

const FormBox = styled(ContainerFlexColumn)`
  grid-gap: 36px;
`;

const Container = styled(ContainerFlexColumn)`
  grid-gap: 34px;
`;

const InputContainer = styled.div`
  position: relative;
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

const Rules = styled.p<IProps>`
  position: absolute;
  left: 12px;
  top: 58px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: ${({ isError }) => (isError ? '#F42C4F' : '#A7A7A7')};
`;

const Error = styled.p`
  padding-left: 12px;
  padding-top: 2px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #f42c4f;
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

const El = styled.span<IProps>`
  color: ${({ isPartError }) => (isPartError ? '#F42C4F' : '#A7A7A7')};
`;

export { CheckBox, Container, El, Error, EyeBox, FormBox, InputContainer, Note, Rules, StyledForm, Text, Wrapper };
