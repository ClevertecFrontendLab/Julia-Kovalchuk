/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { CheckIcon, EyeClosedIcon, EyeIcon } from '../../assets';
import { fetchResetPassword } from '../../store/feautures/reset-password-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { resetPassword } from '../../store/selectors/reset-password-selector';
import { IResetPasswordValues } from '../../types/types';
import { validationRules } from '../../utils/validation-rules';
import { FormInput, Loader, PrimaryButton, Title } from '..';

import {
  CheckBox,
  Container,
  El,
  Error,
  EyeBox,
  FormBox,
  InputContainer,
  Note,
  Rules,
  StyledForm,
  Text,
  Wrapper,
} from './styles';

export const FormResetPassword = () => {
  const [passwordHiden, setPasswordHiden] = useState(true);
  const [passwordConfirmationHiden, setPasswordConfirmationHiden] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const dispatch = useAppDispatch();
  const { isResetLoading } = useAppSelector(resetPassword);

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    watch,
  } = useForm<IResetPasswordValues>({ mode: 'onBlur' });
  const [emptyErrorPassword, setEmptyErrorPassword] = useState(false);
  const [emptyErrorpasswordConfirmation, setEmptyErrorPpasswordConfirmation] = useState(false);

  const onSubmit: SubmitHandler<IResetPasswordValues> = (resetData) => {
    const data = { ...resetData, code: localStorage.getItem('code') };

    dispatch(fetchResetPassword(data));
  };

  const handlePasswordHiden = () => {
    setPasswordHiden(!passwordHiden);
  };

  const handlePasswordConfirmationHiden = () => {
    setPasswordConfirmationHiden(!passwordConfirmationHiden);
  };

  const password = useRef({});
  const passwordConfirmation = useRef({});

  password.current = watch('password', '');
  passwordConfirmation.current = watch('passwordConfirmation', '');

  // ?? ???????????????? ?????????????????? ?????????????????? ???????? ???????????????? ????????????, ?? ???????????? - ?????????????????? ???? ???????????????? - ???? ???????? ?????????? ?????????? ???????????? ?? ????????????. ???????????????? ??????????????????????????, ?????????????? ?? ???????? ???????? ?????????? ?? ??????????????, ???????????? ???? ????????????????
  const validationRulesConfirmation = {
    passwordConfirmation: {
      required: '???????? ???? ?????????? ???????? ????????????',
      validate: (value: string) => value === password.current || '???????????? ???? ??????????????????',
    },
  };

  return (
    <Wrapper>
      <Title size={24} color='black' weight={700} margin={32}>
        ???????????????????????????? ????????????
      </Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)} data-test-id='reset-password-form'>
        <FormBox>
          <Container>
            <Controller
              control={control}
              name='password'
              rules={validationRules.password}
              render={({ field: { value, onChange } }) => {
                let bigLetterError = false;
                let numberError = false;
                let lengthError = false;

                if (value) {
                  value.match(/[A-Z]/) ? (bigLetterError = false) : (bigLetterError = true);
                  value.match(/[0-9]/) ? (numberError = false) : (numberError = true);
                  value.length >= 8 ? (lengthError = false) : (lengthError = true);
                }

                return (
                  <InputContainer>
                    <FormInput
                      name='password'
                      onChange={onChange}
                      type={passwordHiden ? 'password' : 'text'}
                      formFieldName='?????????? ????????????'
                      inFocus={!!value}
                      onBlur={() => {
                        if (value === undefined) setEmptyErrorPassword(true);
                      }}
                      onFocus={() => clearErrors('password')}
                      isErrorField={!errors.password}
                    />
                    {value && !bigLetterError && !numberError && (
                      <CheckBox>
                        <CheckIcon data-test-id='checkmark' />
                      </CheckBox>
                    )}
                    {value && (
                      <EyeBox type='button' onClick={handlePasswordHiden}>
                        {passwordHiden && <EyeClosedIcon data-test-id='eye-closed' />}
                        {!passwordHiden && <EyeIcon data-test-id='eye-opened' />}
                      </EyeBox>
                    )}

                    {(!errors.password ||
                      errors.password.type === 'pattern' ||
                      errors.password.type === 'minLength') && (
                      <Rules
                        isError={
                          !!errors.password &&
                          errors.password.type !== 'pattern' &&
                          errors.password.type !== 'minLength'
                        }
                        data-test-id='hint'
                      >
                        ???????????? <El isPartError={lengthError}>???? ?????????? 8 ????????????????</El>,{' '}
                        <El isPartError={bigLetterError}>?? ?????????????????? ????????????</El> ??{' '}
                        <El isPartError={numberError}>????????????</El>
                      </Rules>
                    )}
                    {value === undefined && emptyErrorPassword && (
                      <Error data-test-id='hint'>???????? ???? ?????????? ???????? ????????????</Error>
                    )}
                  </InputContainer>
                );
              }}
            />

            <Controller
              control={control}
              name='passwordConfirmation'
              rules={validationRulesConfirmation.passwordConfirmation}
              render={({ field: { value, onChange } }) => (
                <InputContainer>
                  <FormInput
                    name='passwordConfirmation'
                    onChange={onChange}
                    type={passwordConfirmationHiden ? 'password' : 'text'}
                    formFieldName='?????????????????? ????????????'
                    inFocus={!!value}
                    onBlur={() => {
                      if (value === undefined) setEmptyErrorPpasswordConfirmation(true);
                      if (value !== undefined && password.current !== passwordConfirmation.current)
                        setIsPasswordMatch(false);
                      if (value !== undefined && password.current === passwordConfirmation.current)
                        setIsPasswordMatch(true);
                    }}
                    onFocus={() => {
                      clearErrors('passwordConfirmation');
                      setIsPasswordMatch(true);
                    }}
                    isErrorField={!errors.passwordConfirmation}
                  />

                  {value && (
                    <EyeBox type='button' onClick={handlePasswordConfirmationHiden}>
                      {passwordHiden && <EyeClosedIcon data-test-id='eye-closed' />}
                      {!passwordHiden && <EyeIcon data-test-id='eye-opened' />}
                    </EyeBox>
                  )}
                  {!isPasswordMatch && <Error data-test-id='hint'>???????????? ???? ??????????????????</Error>}
                  {value === undefined && emptyErrorpasswordConfirmation && (
                    <Error data-test-id='hint'>???????? ???? ?????????? ???????? ????????????</Error>
                  )}
                </InputContainer>
              )}
            />
          </Container>

          <PrimaryButton
            large={350}
            middle={306}
            padding={14}
            fontSize={16}
            isBig={true}
            type='submit'
            disabled={!isPasswordMatch}
          >
            ?????????????????? ??????????????????
          </PrimaryButton>
        </FormBox>

        {isResetLoading && <Loader />}

        <Note>
          <Text>?????????? ???????????????????? ?????????????? ?? ????????????????????, ?????????????????? ?????????? ????????????</Text>
        </Note>
      </StyledForm>
    </Wrapper>
  );
};
