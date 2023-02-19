/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { BooksList } from '../../components';
import { fetchAllBooks } from '../../store/feautures/all-books-slice';
import { useAppDispatch } from '../../store/hooks/hooks';

export const MainPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, []);

  return <BooksList />;
};
