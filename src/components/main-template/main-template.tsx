/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { fetchCategories } from '../../store/feautures/categories-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { getCategories } from '../../store/selectors/categories-selector';
import { Footer, Header, Loader, MessageWindow } from '..';

import { StyledMainTemplate, StyledOutlet } from './styles';

export const MainTemplate = () => {
  const dispatch = useAppDispatch();
  // const { isCategoriesLoading, errorCategories } = useAppSelector(getCategories);
  // const { isLoading, error } = useAppSelector(getAllBooks);

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
