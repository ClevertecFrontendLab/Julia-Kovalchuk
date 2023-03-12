import { InputMask } from 'primereact/inputmask';
import styled from 'styled-components';

import { ContainerFlexColumn } from '../../ui/containers';

interface IProps {
  inFocus?: boolean;
  isErrorField?: boolean;
}

const Container = styled(ContainerFlexColumn)`
  width: 100%;
  position: relative;
`;

const StyledFormInput = styled(InputMask)<IProps>`
  width: 100%;
  position: relative;
  background: #f9f9fa;
  border-radius: 4px;
  border: none;
  border-bottom: ${({ isErrorField }) => (isErrorField ? '1px solid #bfc4c9' : '1px solid #F42C4F')};
  padding-inline: 12px;
  padding-top: ${({ inFocus }) => (inFocus ? '26px' : '19px')};
  padding-bottom: ${({ inFocus }) => (inFocus ? '12px' : '19px')};
  color: #363636;
`;

const FormFieldName = styled.p<IProps>`
  position: absolute;
  top: ${({ inFocus }) => (inFocus ? '6px' : '19px')};
  left: 12px;
  font-size: ${({ inFocus }) => (inFocus ? '12px' : '14px')};
  color: ${({ inFocus }) => (inFocus ? '#A7A7A7' : '#363636')};
  pointer-events: none;
`;

const Rules = styled.p<IProps>`
  display: ${(isErrorField) => (isErrorField ? 'none' : 'block')};
  padding-left: 12px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #a7a7a7;
`;

export { StyledFormInput, FormFieldName, Container, Rules };
