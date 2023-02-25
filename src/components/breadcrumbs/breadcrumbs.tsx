import { useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

import { BreadcrumbsContent, StyledBreadcrumbs, StyledLink, Text } from './styles';

export const Breadcrumbs = () => {
  const { state } = useLocation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        <StyledLink to={`${ROUTE.BOOKS}/${state.path}`}>
          <p data-test-id='breadcrumbs-link'>{state?.category ? state.category : 'Все книги'}</p>
        </StyledLink>
        <Text> / </Text>
        <Text>
          <p data-test-id='book-name'>{state.booksName}</p>
        </Text>
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
