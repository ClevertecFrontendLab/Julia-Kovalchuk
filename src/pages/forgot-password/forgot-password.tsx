import { Navigate, useLocation } from 'react-router-dom';

import { FormForgotPassword, FormResetPassword, ModalWindow, Title } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { forgorPassword } from '../../store/selectors/forgot-password-selector';
import { resetPassword } from '../../store/selectors/reset-password-selector';
import { Breackpoint } from '../../ui/media';

import { Wrapper } from './styles';

export const ForgotPasswordPage = () => {
  const { width = 0 } = useWindowSize();
  const { forgotPasswordStep } = useAppSelector(forgorPassword);
  const { resetPasswordStep } = useAppSelector(resetPassword);
  const isAuth = localStorage.getItem('isAuth');

  const resetPage = useLocation().search;

  localStorage.setItem('code', useLocation().search.split('?code=')[1]);

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
      {resetPage ? (
        resetPasswordStep === 'reset' ? (
          <FormResetPassword />
        ) : resetPasswordStep === 'success' ? (
          <ModalWindow
            title='Новые данные сохранены'
            buttonTitle='вход'
            to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}
            showButton={true}
          >
            Зайдите в личный кабинет, используя свои логин и новый пароль
          </ModalWindow>
        ) : (
          <ModalWindow
            title='Данные не сохранились'
            buttonTitle='повторить'
            to={`${ROUTE.HOME}${ROUTE.FORGOT_PASSWORD}`}
            showButton={true}
          >
            Зайдите в личный кабинет, используя свои логин и новый пароль
          </ModalWindow>
        )
      ) : forgotPasswordStep === 'success' ? (
        <ModalWindow title='Письмо выслано' buttonTitle='' to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`} showButton={false}>
          Перейдите в вашу почту, чтобы воспользоваться подсказками по восстановлению пароля
        </ModalWindow>
      ) : (
        <FormForgotPassword />
      )}
    </Wrapper>
  );
};
