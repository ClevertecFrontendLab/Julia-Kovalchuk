import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

export const RequareAuth = () => {
  const isAuth = localStorage.getItem('isAuth');

  if (isAuth === null) localStorage.setItem('isAuth', 'false');

  const resetPage = useLocation().search;

  return isAuth === 'true' ? (
    <Outlet />
  ) : resetPage ? (
    <Navigate to={`${ROUTE.FORGOT_PASSWORD}${resetPage}`} />
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};
