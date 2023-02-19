import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AsideBar } from '..';

import { ContentBox, Wrapper } from './styles';

export const SecondTemplate = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCategoryView = () => {
    setIsOpen(!isOpen);
  };

  const handleView = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <AsideBar
        data-test-id='navigation-showcase'
        isOpen={isOpen}
        handleCategoryView={handleCategoryView}
        handleView={handleView}
      />
      <ContentBox>
        <Outlet />
      </ContentBox>
    </Wrapper>
  );
};
