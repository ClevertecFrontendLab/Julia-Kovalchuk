import React from 'react';

import books from '../../books.json';
import { BookDescription,BookDetails, Breadcrumbs } from '../../components';

export const BookPage = () => (
  <React.Fragment>
    <Breadcrumbs />
    <BookDetails book={books.business[0]} />
    <BookDescription book={books.business[0]} />
  </React.Fragment>
);