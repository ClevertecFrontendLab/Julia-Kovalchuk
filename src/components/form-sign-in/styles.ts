import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled.div`
  max-width: 528px;
  min-width: 528px;
  padding: 48px 56px;
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
  grid-gap: 36px;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Error = styled.p`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #f42c4f;
`;

const ErrorBox = styled(ContainerFlexColumn)`
  grid-gap: 3px;
`;

const RestoreLink = styled(Link)`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #363636;
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

const ForgotText = styled(Link)`
  padding-left: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
`;

const Rules = styled.p`
  position: absolute;
  left: 12px;
  top: 58px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #f42c4f;
`;

export {
  Error,
  InputContainer,
  FormBox,
  Container,
  Note,
  LinkNote,
  Text,
  EyeBox,
  Wrapper,
  ForgotText,
  ErrorBox,
  RestoreLink,
  Rules,
  StyledForm,
};
