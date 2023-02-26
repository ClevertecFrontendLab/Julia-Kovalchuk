/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../store/feautures/categories-slice';
import { useAppDispatch } from '../../store/hooks/hooks';
import { Footer, Header } from '..';

import { StyledMainTemplate, StyledOutlet } from './styles';

export const MainTemplate = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <StyledMainTemplate>
      <Header />

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>

      <Footer />
    </StyledMainTemplate>
  );
};
