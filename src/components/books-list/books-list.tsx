import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { getCategories } from '../../store/selectors/categories-selector';
import { Loader, MainContent, MessageWindow, Navigation } from '..';

import { StyledBooklist } from './styles';

export const BooksList = () => {
  const { isCategoriesLoading, errorCategories } = useAppSelector(getCategories);
  const { isLoading, error } = useAppSelector(getAllBooks);

  return isCategoriesLoading || isLoading ? (
    <Loader />
  ) : errorCategories || error ? (
    <MessageWindow type='error'>{error}</MessageWindow>
  ) : (
    <StyledBooklist>
      <Navigation />
      <MainContent />
    </StyledBooklist>
  );
};
