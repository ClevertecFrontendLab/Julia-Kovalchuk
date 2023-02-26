import { useLocation } from 'react-router-dom';

import { ROUTE } from '../../routes/routes';

import { BreadcrumbsContent, StyledBreadcrumbs, StyledLink, Text } from './styles';

export const Breadcrumbs = () => {
  const { state } = useLocation();

  return (
    <StyledBreadcrumbs>
      <BreadcrumbsContent>
        <StyledLink to={`${ROUTE.BOOKS}/${state.path}`} data-test-id='breadcrumbs-link'>
          {state.category}
        </StyledLink>
        <Text> / </Text>
        <Text data-test-id='book-name'>{state.booksName}</Text>
      </BreadcrumbsContent>
    </StyledBreadcrumbs>
  );
};
