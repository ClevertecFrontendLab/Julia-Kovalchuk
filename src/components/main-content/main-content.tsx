/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useViewContext } from '../../context/button-view-context/button-view-context';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { IBookShortInfo } from '../../types/types';
import { LineBookCard, SquareBookCard } from '..';

import { NoBooksText, StyledLineBooksContent, StyledSquareBooksContent } from './styles';

export const MainContent = () => {
  const { view } = useViewContext();
  const { renderedBooks, foundBooks, searchValue } = useAppSelector(getAllBooks);
  const { state } = useLocation();
  const [curentBooks, setCurentBooks] = useState<IBookShortInfo[]>(renderedBooks);
  const { isSquare } = view;
  const { isColumn } = view;

  useEffect(() => {
    searchValue ? setCurentBooks(foundBooks) : setCurentBooks(renderedBooks);
  }, [renderedBooks, foundBooks, searchValue]);

  return curentBooks.length > 0 ? (
    <React.Fragment>
      {isColumn && (
        <StyledLineBooksContent>
          {curentBooks.map((book) => (
            <Link
              to={`${ROUTE.BOOKS}/${state && state?.value.path !== null ? state.value.path : 'all'}/${book.id}`}
              key={book.id}
              state={{
                category: state && state?.value.name !== null ? state.value.name : 'Все книги',
                path: state && state?.value.path !== null ? state.value.path : `${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`,
                booksName: book.title,
              }}
            >
              <LineBookCard book={book} />
            </Link>
          ))}
        </StyledLineBooksContent>
      )}

      {isSquare && (
        <StyledSquareBooksContent>
          {curentBooks.map((book) => (
            <Link
              to={`${ROUTE.BOOKS}/${state && state?.value.path !== null ? state.value.path : 'all'}/${book.id}`}
              key={book.id}
              state={{
                category: state && state?.value.name !== null ? state.value.name : 'Все книги',
                path: state && state?.value.path !== null ? state.value.path : `${ROUTE.BOOKS}${ROUTE.ALLBOOKS}`,
                booksName: book.title,
              }}
            >
              <SquareBookCard book={book} />
            </Link>
          ))}
        </StyledSquareBooksContent>
      )}
    </React.Fragment>
  ) : searchValue ? (
    <NoBooksText data-test-id='search-result-not-found'>По запросу ничего не найдено</NoBooksText>
  ) : (
    <NoBooksText data-test-id='empty-category'>В этой категории книг ещё нет</NoBooksText>
  );
};
