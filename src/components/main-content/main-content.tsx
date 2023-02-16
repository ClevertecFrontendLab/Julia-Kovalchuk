import React from 'react';
import { Link } from 'react-router-dom';

import { useViewContext } from '../../context/button-view-context/button-view-context';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { LineBookCard, SquareBookCard } from '..';

import { StyledHorizontalBooksContent, StyledVerticalBooksContent } from './styles';

export const MainContent = () => {
  const { view } = useViewContext();
  const { allBooks } = useAppSelector(getAllBooks);

  const { isSquare } = view;
  const { isColumn } = view;

  return (
    <React.Fragment>
      {isColumn && (
        <StyledHorizontalBooksContent>
          {allBooks.map((book) => (
            <Link to={ROUTE.DETAILS} key={book.id}>
              <LineBookCard book={book} />
            </Link>
          ))}
        </StyledHorizontalBooksContent>
      )}

      {isSquare && (
        <StyledVerticalBooksContent>
          {allBooks.map((book) => (
            <Link to={ROUTE.DETAILS} key={book.id}>
              <SquareBookCard book={book} />
            </Link>
          ))}
        </StyledVerticalBooksContent>
      )}
    </React.Fragment>
  );
};
