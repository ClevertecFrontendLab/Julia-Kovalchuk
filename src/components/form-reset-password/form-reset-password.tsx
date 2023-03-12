/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { CheckIcon, EyeClosedIcon, EyeIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { IResetPasswordValues } from '../../types/types';
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
import { validationRules } from '../../utils/validation-rules';

export const FormResetPassword = () => {
  // const dispatch = useAppDispatch();
  // const { errorForgotMessage, isForgotLoading } = useAppSelector(forgorPassword);
  // const navigate = useNavigate();
  const [passwordHiden, setPasswordHiden] = useState(true);
  const [passwordConfirmationHiden, setPasswordConfirmationHiden] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

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

    // dispatch(fetchForgotPassword(email));
    //   .unwrap()
    //   .then(() => {
    //     navigate(`${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`);
    //   })
    //   .finally(() => {
    //     reset();
    //   });
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

  // в браузере поведение валидации было согласно тестам, в тестах - валидация не работала - об этом много людей писало в телеге. Пришлось выкручиваться, поэтому в этом коже танцы с бубнами, точнее со стейтами
  const validationRulesConfirmation = {
    passwordConfirmation: {
      required: 'Поле не может быть пустым',
      validate: (value: string) => value === password.current || 'Пароли не совпадают',
    },
  };

  return (
    <Wrapper>
      <Title size={24} color='black' weight={700} margin={32}>
        Восстановление пароля
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
                      formFieldName='Новый пароль'
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
                        Пароль <El isPartError={lengthError}>не менее 8 символов</El>,{' '}
                        <El isPartError={bigLetterError}>с заглавной буквой</El> и{' '}
                        <El isPartError={numberError}>цифрой</El>
                      </Rules>
                    )}
                    {value === undefined && emptyErrorPassword && (
                      <Error data-test-id='hint'>Поле не может быть пустым</Error>
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
                    formFieldName='Повторите пароль'
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
                  {!isPasswordMatch && <Error data-test-id='hint'>Пароли не совпадают</Error>}
                  {value === undefined && emptyErrorpasswordConfirmation && (
                    <Error data-test-id='hint'>Поле не может быть пустым</Error>
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
            сохранить изменения
          </PrimaryButton>
        </FormBox>

        {/* {isForgotLoading && <Loader />} */}

        <Note>
          <Text>После сохранения войдите в библиотеку, используя новый пароль</Text>
        </Note>
      </StyledForm>
    </Wrapper>
  );
};
