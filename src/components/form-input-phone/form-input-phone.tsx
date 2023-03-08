/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputMaskChangeEvent } from 'primereact/inputmask';

import { Container, FormFieldName, StyledFormInput } from './styles';

interface IProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: InputMaskChangeEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  formFieldName?: string;
  inFocus?: boolean;
  isErrorField?: boolean;
  mask?: string;
  slotChar: string;
  autoClear: boolean;
  name?: string;
}

export const FormInputPhone = ({
  placeholder,
  type,
  value,
  onChange,
  formFieldName,
  inFocus,
  onFocus,
  onBlur,
  isErrorField,
  mask,
  name,
  slotChar,
  autoClear,
}: IProps) => (
  <Container>
    <StyledFormInput
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      inFocus={inFocus}
      onFocus={onFocus}
      onBlur={onBlur}
      isErrorField={isErrorField}
      mask={mask}
      slotChar={slotChar}
      autoClear={autoClear}
      name={name}
    />
    <FormFieldName inFocus={inFocus} isErrorField={isErrorField}>
      {formFieldName}
    </FormFieldName>
  </Container>
);
