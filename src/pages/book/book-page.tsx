import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { BookDescription, BookDetails, Breadcrumbs, Loader, MessageWindow } from '../../components';
import { fetchBook } from '../../store/feautures/book-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getBook } from '../../store/selectors/book-selector';

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, book, error } = useAppSelector(getBook);
  const { state } = useLocation();

  useEffect(() => {
    if (id) dispatch(fetchBook(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <Breadcrumbs crumbs={state} />
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
