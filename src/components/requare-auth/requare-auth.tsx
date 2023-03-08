import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

export const RequareAuth = () => {
  //   const { isAuth } = useAppSelector(getUserInfo);
  const isAuth = false;

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
