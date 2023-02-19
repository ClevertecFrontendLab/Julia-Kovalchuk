import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { BookDescription, BookDetails, Breadcrumbs, Loader, MessageWindow } from '../../components';
import { fetchBook } from '../../store/feautures/book-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getBook } from '../../store/selectors/book-selector';

export const BookPage = () => {
  interface INullState {
    category: string;
    booksName: string;
  }

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, book, error } = useAppSelector(getBook);
  const { state } = useLocation();
  // Вся странная конструкция снизу - для прохождения теста, когда тест открывает не по клику книгу, а по ссылке
  const nullState = {} as INullState;

  if (!state) {
    nullState.category = 'Все книги';
    nullState.booksName = book.title;
  }

  useEffect(() => {
    if (id) dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <Breadcrumbs crumbs={state ? state : nullState} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <MessageWindow type='error'>{error}</MessageWindow>
      ) : (
        <React.Fragment>
          <BookDetails book={book} />
          <BookDescription book={book} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
