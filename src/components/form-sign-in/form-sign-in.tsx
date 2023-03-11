import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ArrowLeftIcon, EyeClosedIcon, EyeIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { clearAuthError, fetchAuth } from '../../store/feautures/auth-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { signIn } from '../../store/selectors/auth-selector';
import { SignInValues } from '../../types/types';
import { FormInput, Loader, PrimaryButton, Title } from '..';

import {
  Container,
  Error,
  ErrorBox,
  EyeBox,
  ForgotText,
  FormBox,
  InputContainer,
  LinkNote,
  Note,
  RestoreLink,
  Rules,
  StyledForm,
  Text,
  Wrapper,
} from './styles';

export const FormSignIn = () => {
  const [passwordHiden, setPasswordHiden] = useState(true);
  const dispatch = useAppDispatch();
  const { isAuthLoading, errorAuthMessage, errorStatus } = useAppSelector(signIn);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<SignInValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<SignInValues> = (userData) => {
    dispatch(fetchAuth(userData))
      .unwrap()
      .then(() => {
        navigate(`${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`);
      })
      .finally(() => {
        reset();
      });
  };

  const handlePasswordHiden = () => {
    setPasswordHiden(!passwordHiden);
  };

  const handleFocus = () => {
    dispatch(clearAuthError());
    // clearErrors('identifier');
    // clearErrors('password');
  };

  const validationRules = {
    identifier: {
      required: 'Поле не может быть пустым',
    },
    password: {
      required: 'Поле не может быть пустым',
    },
  };

  return (
    <Wrapper>
      <Title size={24} color='black' weight={700} margin={32}>
        Вход в личный кабинет
      </Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)} data-test-id='auth-form'>
        <FormBox>
          <Container>
            <Controller
              control={control}
              name='identifier'
              rules={validationRules.identifier}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputContainer>
                  <FormInput
                    name='identifier'
                    onChange={onChange}
                    value={value}
                    type='text'
                    formFieldName='Логин'
                    inFocus={!!value || errorStatus === 400}
                    onBlur={onBlur}
                    onFocus={handleFocus}
                    isErrorField={!errorAuthMessage || !!errors.identifier}
                  />
                  {errors.identifier && value === undefined && (
                    <Rules data-test-id='hint'>{errors.identifier.message}</Rules>
                  )}
                </InputContainer>
              )}
            />

            <Controller
              control={control}
              name='password'
              rules={validationRules.password}
              render={({ field: { value, onChange, onBlur } }) => (
                <InputContainer>
                  <FormInput
                    name='password'
                    onChange={onChange}
                    type={passwordHiden ? 'password' : 'text'}
                    formFieldName='Пароль'
                    inFocus={!!value || errorStatus === 400}
                    onBlur={onBlur}
                    onFocus={handleFocus}
                    isErrorField={!errorAuthMessage || !!errors.password}
                  />

                  {value && (
                    <EyeBox type='button' onClick={handlePasswordHiden}>
                      {passwordHiden && <EyeClosedIcon data-test-id='eye-closed' />}
                      {!passwordHiden && <EyeIcon data-test-id='eye-opened' />}
                    </EyeBox>
                  )}
                  {errors.password && value === undefined && (
                    <Rules data-test-id='hint'>{errors.password.message}</Rules>
                  )}
                </InputContainer>
              )}
            />
            {!errorAuthMessage && (
              <ForgotText to={`${ROUTE.HOME}${ROUTE.FORGOT_PASSWORD}`}>Забыли логин или пароль?</ForgotText>
            )}
            {errorStatus === 400 && (
              <ErrorBox>
                <Error>{errorAuthMessage}</Error>
                <RestoreLink to={`${ROUTE.HOME}${ROUTE.FORGOT_PASSWORD}`}>Восстановить?</RestoreLink>
              </ErrorBox>
            )}
          </Container>

          <PrimaryButton large={350} middle={306} padding={14} fontSize={16} isBig={true} type='submit'>
            вход
          </PrimaryButton>
        </FormBox>

        {isAuthLoading && <Loader />}

        <Note>
          <Text>Нет учётной записи?</Text>{' '}
          <LinkNote to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>
            <p>Регистрация</p> <ArrowLeftIcon />
          </LinkNote>
        </Note>
      </StyledForm>
    </Wrapper>
  );
};
