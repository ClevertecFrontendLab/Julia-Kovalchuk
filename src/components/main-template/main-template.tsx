/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../store/feautures/categories-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { getCategories } from '../../store/selectors/categories-selector';
import { Footer, Header, MessageWindow } from '..';

import { StyledMainTemplate, StyledOutlet } from './styles';

export const MainTemplate = () => {
  const dispatch = useAppDispatch();
  const { errorCategories } = useAppSelector(getCategories);
  const { error } = useAppSelector(getAllBooks);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <StyledMainTemplate>
      <Header />
      {(errorCategories || error) && <MessageWindow type='error'>{error}</MessageWindow>}
      <StyledOutlet>{!errorCategories && !error && <Outlet />}</StyledOutlet>
      <Footer />
    </StyledMainTemplate>
  );
};
