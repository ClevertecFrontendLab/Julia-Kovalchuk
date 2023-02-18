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
  const { allBooks } = useAppSelector(getAllBooks);
  const { state } = useLocation();

  const { isSquare } = view;
  const { isColumn } = view;

  return (
    <React.Fragment>
      {isColumn && (
        <StyledLineBooksContent>
          {allBooks.map((book) => (
            <Link
              to={`/${ROUTE.DETAILS}${book.id}`}
              key={book.id}
              state={{ category: state?.from, booksName: book.title }}
            >
              <LineBookCard book={book} />
            </Link>
          ))}
        </StyledLineBooksContent>
      )}

      {isSquare && (
        <StyledSquareBooksContent>
          {allBooks.map((book) => (
            <Link
              to={`/${ROUTE.DETAILS}${book.id}`}
              key={book.id}
              state={{ category: state?.from, booksName: book.title }}
            >
              <SquareBookCard book={book} />
            </Link>
          ))}
        </StyledSquareBooksContent>
      )}
    </React.Fragment>
  );
};
