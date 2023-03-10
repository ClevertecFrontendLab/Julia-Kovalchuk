import { Navigate } from 'react-router-dom';

import { FormSignUp, ModalWindow, Title } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { signUp } from '../../store/selectors/register-selector';
import { Breackpoint } from '../../ui/media';

import { Wrapper } from './styles';

export const SignUpPage = () => {
  const { width = 0 } = useWindowSize();
  const { errorStatus, registerStep } = useAppSelector(signUp);
  const isAuth = localStorage.getItem('isAuth');

  return isAuth === 'true' ? (
    <Navigate to={`${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`} />
  ) : (
    <Wrapper data-test-id='auth'>
      <Title
        size={width > Breackpoint.SM ? 32 : 18}
        color='white'
        margin={width > Breackpoint.SM ? 46 : 8}
        weight={700}
      >
        Cleverland
      </Title>

      {registerStep === 'success' ? (
        <ModalWindow title='Регистрация успешна' buttonTitle='вход' to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>
          Регистрация прошла успешно. Зайдите в личный кабинет, используя свои логин и пароль
        </ModalWindow>
      ) : registerStep === 'error' ? (
        errorStatus === 400 ? (
          <ModalWindow
            title='Данные не сохранились'
            buttonTitle='назад к регистрации'
            to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}
          >
            Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.
          </ModalWindow>
        ) : (
          <ModalWindow title='Данные не сохранились' buttonTitle='повторить' to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>
            Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз
          </ModalWindow>
        )
      ) : (
        <FormSignUp />
      )}
    </Wrapper>
  );
};
