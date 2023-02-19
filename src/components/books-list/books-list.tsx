import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { getCategories } from '../../store/selectors/categories-selector';
import { Loader, MainContent, Navigation } from '..';

import { StyledBooklist } from './styles';

export const BooksList = () => {
  const { isCategoriesLoading } = useAppSelector(getCategories);
  const { isLoading } = useAppSelector(getAllBooks);

  return isCategoriesLoading || isLoading ? (
    <Loader />
  ) : (
    <StyledBooklist>
      <Navigation />
      <MainContent />
    </StyledBooklist>
  );
};
