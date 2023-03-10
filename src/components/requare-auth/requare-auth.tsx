import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { signIn } from '../../store/selectors/auth-selector';

export const RequareAuth = () => {
  // const { isAuth } = useAppSelector(signIn);

  const isAuth = localStorage.getItem('isAuth');

  if (isAuth === null) localStorage.setItem('isAuth', 'false');

  console.log(isAuth);

  return isAuth === 'true' ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
