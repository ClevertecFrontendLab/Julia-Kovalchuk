import { useState } from 'react';

import { CloseIcon, ColumnIcon, SearchIcon, SortIcon, SquareIcon } from '../../assets';
import { useViewContext } from '../../context/button-view-context/button-view-context';
import { useWindowSize } from '../../hooks/use-window-size';
import { Breackpoint } from '../../ui/media';

import {
  ButtonColumn,
  ButtonSquare,
  CloseButton,
  Filter,
  Search,
  SearchButton,
  SearchInput,
  SelectOption,
  SortIconContainer,
  StyledNavigation,
  StyledSelect,
  Text,
  WrapperInputs,
  WrapperSorting,
} from './styles';

export const Navigation = () => {
  const { width = 0 } = useWindowSize();
  const { view, setView } = useViewContext();
  const [isOpen, setIsopen] = useState(false);

  const handleSquareView = () => {
    setView(view);
  };

  const handleColumnView = () => {
    setView(view);
  };

  const handleSearchView = () => {
    setIsopen(!isOpen);
  };

  return (
    <StyledNavigation>
      <WrapperInputs $isOpen={isOpen}>
        <Search $isOpen={isOpen}>
          <SearchInput placeholder='Поиск книги или автора…' type='text' data-test-id='input-search' $isOpen={isOpen} />
          <CloseButton type='button' onClick={handleSearchView} data-test-id='button-search-close' $isOpen={isOpen}>
            <CloseIcon />
          </CloseButton>
        </Search>

        <SearchButton type='button' onClick={handleSearchView} data-test-id='button-search-open' $isOpen={isOpen}>
          <SearchIcon />
        </SearchButton>

        {!isOpen && (
          <Filter>
            <SortIconContainer>
              <SortIcon />
            </SortIconContainer>
            <StyledSelect name='sort' id='sort-select'>
              <SelectOption value='rating' selected={width > Breackpoint.SM}>
                <Text>По рейтингу</Text>
              </SelectOption>
              <SelectOption value='date'>
                <Text>По дате</Text>
              </SelectOption>
              <SelectOption value='price'>
                <Text>По цене</Text>
              </SelectOption>
            </StyledSelect>
          </Filter>
        )}
      </WrapperInputs>

      {!isOpen && (
        <WrapperSorting>
          <ButtonSquare
            onClick={handleSquareView}
            $isSquare={view.isSquare}
            type='button'
            data-test-id='button-menu-view-window'
          >
            <SquareIcon fill={view.isSquare ? '#FFFFFF' : '#A7A7A7'} />
          </ButtonSquare>
          <ButtonColumn
            onClick={handleColumnView}
            $isColumn={view.isColumn}
            type='button'
            data-test-id='button-menu-view-list'
          >
            <ColumnIcon fill={view.isColumn ? '#FFFFFF' : '#A7A7A7'} />
          </ButtonColumn>
        </WrapperSorting>
      )}
    </StyledNavigation>
  );
};
