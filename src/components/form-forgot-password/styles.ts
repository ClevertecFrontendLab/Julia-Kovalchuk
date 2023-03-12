import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled.div`
  max-width: 528px;
  min-width: 528px;
  padding: 32px 56px 48px;
  border-radius: 30px;

  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background: #ffffff;

  ${Media.SM} {
    max-width: 100%;
    min-width: 100%;
    padding: 24px 16px 27px;
  }
`;
const SingInLink = styled(Link)`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  padding: 26px 19px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: #727272;
  background: #f9f9fa;
`;

const StyledForm = styled.form`
  max-width: 100%;
`;

const FormBox = styled(ContainerFlexColumn)`
  grid-gap: 36px;
`;

const Container = styled(ContainerFlexColumn)``;

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

const Rules = styled.p`
  padding-left: 12px;
  padding-top: 2px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #727272;
`;

const Error = styled.p`
  padding-left: 12px;
  padding-top: 2px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #f42c4f;
`;

export { Container, Error, FormBox, InputContainer, LinkNote, Note, Rules, SingInLink, StyledForm, Text, Wrapper };
