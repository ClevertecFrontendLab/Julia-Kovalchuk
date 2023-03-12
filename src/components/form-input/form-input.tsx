import { ChangeEvent } from 'react';

import { Container, FormFieldName, StyledFormInput } from './styles';

interface IProps {
  placeholder?: string;
  type: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  defaultValue?: string;
  formFieldName: string;
  inFocus?: boolean;
  isErrorField: boolean;
  name?: string;
}

export const FormInput = ({
  placeholder,
  type,
  value,
  onChange,
  defaultValue,
  formFieldName,
  inFocus,
  onFocus,
  onBlur,
  isErrorField,
  name,
}: IProps) => (
  <Container>
    <StyledFormInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      inFocus={inFocus}
      onFocus={onFocus}
      onBlur={onBlur}
      isErrorField={isErrorField}
      name={name}
    />
    <FormFieldName inFocus={inFocus} isErrorField={isErrorField}>
      {formFieldName}
    </FormFieldName>
  </Container>
);
