/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { ArrowLeftIcon, CheckIcon, EyeClosedIcon, EyeIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import {
  fetchRegister,
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
  setPhone,
  setRegisterStep,
  setUsername,
} from '../../store/feautures/register-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { signUp } from '../../store/selectors/register-selector';
import { SignUpValues } from '../../types/types';
import { validationRules } from '../../utils/validation-rules';
import { FormInput, FormInputPhone, Loader, PrimaryButton, Title } from '..';

import {
  CheckBox,
  Container,
  El,
  EyeBox,
  FormBox,
  InputContainer,
  LinkNote,
  Note,
  Rules,
  Text,
  Wrapper,
} from './styles';

export const FormSignUp = () => {
  const [inFocus, setInFocus] = useState(false);
  const [passwordHiden, setPasswordHiden] = useState(true);
  const dispatch = useAppDispatch();
  const { isRegisterLoading, registerStep } = useAppSelector(signUp);

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm<SignUpValues>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<SignUpValues> = (userData) => {
    if (registerStep === '1') {
      if (!errors.username) {
        setError('username', { type: 'required', message: 'Поле не может быть пустым' });
      }
      if (!errors.password) {
        setError('password', { type: 'custom', message: 'Поле не может быть пустым' });
      }
      dispatch(setUsername(userData.username));
      dispatch(setPassword(userData.password));
      dispatch(setRegisterStep('2'));
    }

    if (registerStep === '2') {
      if (!errors.lastName) {
        setError('lastName', { type: 'required', message: 'Поле не может быть пустым' });
      }
      if (!errors.firstName) {
        setError('firstName', { type: 'required', message: 'Поле не может быть пустым' });
      }
      dispatch(setFirstName(userData.firstName));
      dispatch(setLastName(userData.lastName));
      dispatch(setRegisterStep('3'));
    }

    if (registerStep === '3') {
      dispatch(setPhone(userData.phone));
      dispatch(setEmail(userData.email));
      dispatch(fetchRegister(userData));
    }
  };

  const handlePasswordHiden = () => {
    setPasswordHiden(!passwordHiden);
  };

  return (
    <Wrapper>
      <Title size={24} color='black' weight={700} margin={8}>
        Регистрация
      </Title>
      <Title size={14} color='black' weight={700} margin={32}>
        {registerStep} шаг из 3
      </Title>
      <form onSubmit={handleSubmit(onSubmit)} data-test-id='register-form'>
        {registerStep === '1' && (
          <FormBox>
            <Container>
              <Controller
                control={control}
                name='username'
                rules={validationRules.username}
                render={({ field: { value, onChange, onBlur } }) => {
                  let letterError = false;
                  let numberError = false;

                  if (value) {
                    value.match(/[A-Z]/gi) ? (letterError = false) : (letterError = true);
                    value.match(/[0-9]/) ? (numberError = false) : (numberError = true);
                  }

                  return (
                    <InputContainer>
                      <FormInput
                        name='username'
                        onChange={onChange}
                        value={value}
                        type='text'
                        formFieldName='Придумайте логин для входа'
                        inFocus={!!value}
                        onBlur={onBlur}
                        onFocus={() => clearErrors('username')}
                        isErrorField={!errors.username}
                      />

                      {(!errors.username || errors.username.type === 'pattern') && (
                        <Rules isError={!!errors.username} data-test-id='hint'>
                          Используйте для логина <El isPartError={letterError}>латинский алфавит</El> и{' '}
                          <El isPartError={numberError}>цифры</El>
                        </Rules>
                      )}
                      {errors.username && (
                        <Rules isError={true} data-test-id='hint'>
                          {errors.username.message}
                        </Rules>
                      )}
                    </InputContainer>
                  );
                }}
              />

              <Controller
                control={control}
                name='password'
                rules={validationRules.password}
                render={({ field: { value, onChange, onBlur } }) => {
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
                        formFieldName='Пароль'
                        inFocus={!!value}
                        onBlur={onBlur}
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
                      {errors.password && (
                        <Rules isError={true} data-test-id='hint'>
                          {errors.password.message}
                        </Rules>
                      )}
                    </InputContainer>
                  );
                }}
              />
            </Container>
            <PrimaryButton
              large={350}
              middle={306}
              padding={14}
              fontSize={16}
              isBig={true}
              disabled={!!errors.username || !!errors.password}
              type='submit'
            >
              Следующий шаг
            </PrimaryButton>
          </FormBox>
        )}

        {registerStep === '2' && (
          <FormBox>
            <Container>
              <Controller
                control={control}
                name='firstName'
                rules={validationRules.firstName}
                render={({ field: { value, onChange } }) => (
                  <InputContainer>
                    <FormInput
                      name='firstName'
                      onChange={onChange}
                      value={value}
                      type='text'
                      formFieldName='Имя'
                      inFocus={!!value}
                      onBlur={() => {
                        if (value === undefined)
                          setError('firstName', { type: 'required', message: 'Поле не может быть пустым' });
                      }}
                      onFocus={() => clearErrors('firstName')}
                      isErrorField={!errors.firstName}
                    />

                    {errors.firstName && (
                      <Rules isError={!!errors.firstName} data-test-id='hint'>
                        {errors.firstName.message}
                      </Rules>
                    )}
                  </InputContainer>
                )}
              />

              <Controller
                control={control}
                name='lastName'
                rules={validationRules.lastName}
                render={({ field: { value, onChange } }) => (
                  <InputContainer>
                    <FormInput
                      name='lastName'
                      onChange={onChange}
                      value={value}
                      type='text'
                      formFieldName='Фамилия'
                      inFocus={!!value}
                      onBlur={() => {
                        if (value === undefined)
                          setError('lastName', { type: 'required', message: 'Поле не может быть пустым' });
                      }}
                      onFocus={() => clearErrors('lastName')}
                      isErrorField={!errors.lastName}
                    />

                    {errors.lastName?.message && (
                      <Rules isError={!!errors.lastName} data-test-id='hint'>
                        {errors.lastName.message}
                      </Rules>
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
              disabled={!!errors.firstName || !!errors.lastName}
              type='submit'
            >
              Последний шаг
            </PrimaryButton>
          </FormBox>
        )}

        {registerStep === '3' && (
          <FormBox>
            <Container>
              <Controller
                control={control}
                name='phone'
                rules={validationRules.phone}
                render={({ field: { value, onChange } }) => (
                  <InputContainer>
                    <FormInputPhone
                      name='phone'
                      onChange={onChange}
                      value={value}
                      mask='+375 (99) 999-99-99'
                      slotChar='x'
                      formFieldName='Номер телефона'
                      inFocus={inFocus}
                      onBlur={() => {
                        if (value === undefined)
                          setError('phone', { type: 'required', message: 'Поле не может быть пустым' });
                      }}
                      onFocus={() => {
                        clearErrors('phone');
                        setInFocus(true);
                      }}
                      isErrorField={!errors.phone}
                      autoClear={false}
                      placeholder=' '
                      type='tel'
                    />
                    <Rules isError={!!errors.phone} data-test-id='hint'>
                      {errors.phone ? errors.phone.message : 'В формате +375 (xx) xxx-xx-xx'}
                    </Rules>
                  </InputContainer>
                )}
              />

              <Controller
                control={control}
                name='email'
                rules={validationRules.email}
                render={({ field: { value, onChange } }) => (
                  <InputContainer>
                    <FormInput
                      name='email'
                      onChange={onChange}
                      type='email'
                      formFieldName='E-mail'
                      inFocus={!!value}
                      onBlur={() => {
                        if (value === undefined)
                          setError('email', { type: 'required', message: 'Поле не может быть пустым' });
                      }}
                      onFocus={() => clearErrors('email')}
                      isErrorField={!errors.email}
                    />

                    <Rules isError={!!errors.email} data-test-id='hint'>
                      {errors.email ? errors.email.message : 'Введите корректный e-mail'}
                    </Rules>
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
              disabled={!!errors.phone || !!errors.email}
              type='submit'
            >
              зарегистрироваться
            </PrimaryButton>
          </FormBox>
        )}

        {isRegisterLoading && <Loader />}

        <Note>
          <Text>Есть учётная запись? </Text>{' '}
          <LinkNote to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>
            <p>Войти</p> <ArrowLeftIcon />
          </LinkNote>
        </Note>
      </form>
    </Wrapper>
  );
};
