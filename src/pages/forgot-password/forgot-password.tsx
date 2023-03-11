import { Link, Navigate } from 'react-router-dom';

import { Title } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { Breackpoint } from '../../ui/media';

import { Wrapper } from './styles';

export const ForgotPasswordPage = () => {
  const { width = 0 } = useWindowSize();
  // const { errorStatus, authStep } = useAppSelector(signIn);
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
      {/* {authStep === 'error' ? (
        <ModalWindow title='Вход не выполнен' buttonTitle='повторить' to={`${ROUTE.HOME}${ROUTE.SIGN_IN}`}>
          Что-то пошло не так. Попробуйте ещё раз
        </ModalWindow>
      ) : (
        <FormSignIn />
      )} */}
    </Wrapper>
  );
};
