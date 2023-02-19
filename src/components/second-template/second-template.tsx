import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks/hooks';
import { getCategories } from '../../store/selectors/categories-selector';
import { AsideBar } from '..';

import { ContentBox, Wrapper } from './styles';
import { getAllBooks } from '../../store/selectors/all-books-selector';

export const SecondTemplate = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { isCategoriesLoading, errorCategories } = useAppSelector(getCategories);
  const { isLoading, error } = useAppSelector(getAllBooks);

  const handleCategoryView = () => {
    setIsOpen(!isOpen);
  };

  const handleView = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      {!isCategoriesLoading && !errorCategories && !isLoading && !error && (
        <AsideBar
          data-test-id='navigation-showcase'
          isOpen={isOpen}
          handleCategoryView={handleCategoryView}
          handleView={handleView}
        />
      )}
      <ContentBox>
        <Outlet />
      </ContentBox>
    </Wrapper>
  );
};
