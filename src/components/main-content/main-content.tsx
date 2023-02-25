import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useViewContext } from '../../context/button-view-context/button-view-context';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { LineBookCard, SquareBookCard } from '..';

import { StyledLineBooksContent, StyledSquareBooksContent } from './styles';

export const MainContent = () => {
  const { view } = useViewContext();
  const { renderedBooks } = useAppSelector(getAllBooks);
  const { state } = useLocation();

  const { isSquare } = view;
  const { isColumn } = view;

  return (
    <React.Fragment>
      {isColumn && (
        <StyledLineBooksContent>
          {renderedBooks.map((book) => (
            <Link
              to={`${ROUTE.BOOKS}/${state && state?.value.path !== null ? state.value.path : 'all'}/${book.id}`}
              key={book.id}
              state={{
                category: state && state?.value.name !== null ? state.value.name : 'Все книги',
                path: state && state?.value.path !== null ? state.value.path : `${ROUTE.ALLBOOKS}`,
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
          {renderedBooks.map((book) => (
            <Link
              to={`${ROUTE.CATEGORY}/${state && state?.value.path !== null ? state.value.path : 'all'}/${book.id}`}
              key={book.id}
              state={{
                category: state && state?.value.name !== null ? state.value.name : 'Все книги',
                path: state && state?.value.path !== null ? state.value.path : `${ROUTE.ALLBOOKS}`,
                booksName: book.title,
              }}
            >
              <SquareBookCard book={book} />
            </Link>
          ))}
        </StyledSquareBooksContent>
      )}
    </React.Fragment>
  );
};
