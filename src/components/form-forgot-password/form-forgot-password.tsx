import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { fetchForgotPassword } from '../../store/feautures/forgot-password-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { forgorPassword } from '../../store/selectors/forgot-password-selector';
import { ForgotPasswordValues } from '../../types/types';
import { validationRules } from '../../utils/validation-rules';
import { FormInput, Loader, PrimaryButton, Title } from '..';

import {
  Container,
  Error,
  FormBox,
  InputContainer,
  LinkNote,
  Note,
  Rules,
  SingInLink,
  StyledForm,
  Text,
  Wrapper,
} from './styles';

export const FormForgotPassword = () => {
  const [emptyError, setEmptyError] = useState(false);
  // в браузере поведение валидации было согласно тестам, в тестах - валидация не работала - об этом много людей писало в телеге. Пришлось выкручиваться, поэтому в этом коже танцы с бубнами, точнее со стейтами

  const dispatch = useAppDispatch();
  const { errorForgotMessage, isForgotLoading } = useAppSelector(forgorPassword);

  const {
    handleSubmit,
    control,
    formState: { errors },
    clearErrors,
  } = useForm<ForgotPasswordValues>({ mode: 'all' });

  const onSubmit: SubmitHandler<ForgotPasswordValues> = (email) => {
    dispatch(fetchForgotPassword(email));
  };

  const handleFocus = () => {
    clearErrors('email');
    setEmptyError(false);
  };

  return (
    <React.Fragment>
      <SingInLink to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>
        <ArrowRightIcon />
        <p>вход в личный кабинет</p>
      </SingInLink>
      <Wrapper>
        <Title size={24} color='black' weight={700} margin={32}>
          Восстановление пароля
        </Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)} data-test-id='send-email-form'>
          <FormBox>
            <Container>
              <Controller
                control={control}
                name='email'
                rules={validationRules.email}
                render={({ field: { value, onChange } }) => (
                  <InputContainer>
                    <FormInput
                      name='email'
                      onChange={onChange}
                      value={value}
                      type='text'
                      formFieldName='Email'
                      inFocus={!!value}
                      onBlur={() => {
                        if (value === undefined) setEmptyError(true);
                      }}
                      onFocus={handleFocus}
                      isErrorField={!errorForgotMessage || !!errors.email}
                    />
                    {errors.email?.type === 'pattern' && <Error data-test-id='hint'>{errors.email.message}</Error>}
                    {errorForgotMessage && <Error data-test-id='hint'>{errorForgotMessage}</Error>}
                    {value === undefined && emptyError && <Error data-test-id='hint'>Поле не может быть пустым</Error>}

                    <Rules data-test-id='hint'>
                      На это email будет отправлено письмо с инструкциями по восстановлению пароля
                    </Rules>
                  </InputContainer>
                )}
              />
            </Container>

            <PrimaryButton large={350} middle={306} padding={14} fontSize={16} isBig={true} type='submit'>
              восстановить
            </PrimaryButton>
          </FormBox>

          {isForgotLoading && <Loader />}

          <Note>
            <Text>Нет учётной записи?</Text>{' '}
            <LinkNote to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>
              <p>регистрация</p> <ArrowLeftIcon />
            </LinkNote>
          </Note>
        </StyledForm>
      </Wrapper>
    </React.Fragment>
  );
};
