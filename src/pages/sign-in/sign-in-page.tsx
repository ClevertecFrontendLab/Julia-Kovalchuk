import { Link } from 'react-router-dom';

import { Title } from '../../components';
import { useWindowSize } from '../../hooks/use-window-size';
import { ROUTE } from '../../routes/routes';
import { Breackpoint } from '../../ui/media';

import { Wrapper } from './styles';

export const SignInPage = () => {
  const { width = 0 } = useWindowSize();

  return (
    <Wrapper data-test-id='auth'>
      <Title
        size={width > Breackpoint.SM ? 32 : 18}
        color='white'
        margin={width > Breackpoint.SM ? 46 : 8}
        weight={700}
      >
        Cleverland
      </Title>
      {/* <FormSignUp /> */}
      <Link to={`${ROUTE.HOME}${ROUTE.SIGN_UP}`}>регистрация</Link>
    </Wrapper>
  );
};
