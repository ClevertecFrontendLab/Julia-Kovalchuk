import { useEffect, useState } from 'react';

import { CloseIcon, ColumnIcon, SearchIcon, SortIconDown, SortIconUp, SquareIcon } from '../../assets';
import { useViewContext } from '../../context/button-view-context/button-view-context';
import { useInput } from '../../hooks/use-input';
import { useWindowSize } from '../../hooks/use-window-size';
import { changeSortType, sortBySortType, updateSearchValue } from '../../store/feautures/all-books-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';

import {
  ButtonColumn,
  ButtonSquare,
  CloseButton,
  Filter,
  Search,
  SearchButton,
  SearchInput,
  SortIconContainer,
  StyledNavigation,
  Text,
  WrapperInputs,
  WrapperSorting,
} from './styles';

export const Navigation = () => {
  const { width = 0 } = useWindowSize();
  const { view, setView } = useViewContext();
  const [isOpen, setIsopen] = useState(false);
  const [isActiveInput, setActiveInput] = useState(false);
  const { inputValue, onChange } = useInput();

  const { sortType, searchValue } = useAppSelector(getAllBooks);
  const dispatch = useAppDispatch();

  const handleSquareView = () => {
    setView(view);
  };

  const handleColumnView = () => {
    setView(view);
  };

  const handleSearchView = () => {
    setIsopen(!isOpen);
  };

  const handleSort = () => {
    dispatch(changeSortType());
    dispatch(sortBySortType());
  };

  const handleActive = () => {
    setActiveInput(true);
  };

  const handleBlur = () => {
    setActiveInput(false);
  };

  useEffect(() => {
    dispatch(updateSearchValue(inputValue));
  }, [dispatch, inputValue]);

  return (
    <StyledNavigation>
      <WrapperInputs $isOpen={isOpen}>
        <Search $isOpen={isOpen}>
          <SearchButton
            type='button'
            data-test-id='button-search-open'
            $isOpen={isOpen}
            $isActiveInput={isActiveInput}
            onClick={handleSearchView}
          >
            <SearchIcon />
          </SearchButton>
          <SearchInput
            placeholder='Поиск книги или автора…'
            type='text'
            data-test-id='input-search'
            $isOpen={isOpen}
            onFocus={handleActive}
            onBlur={handleBlur}
            value={inputValue}
            onChange={onChange}
          />
          <CloseButton type='button' onClick={handleSearchView} data-test-id='button-search-close' $isOpen={isOpen}>
            <CloseIcon />
          </CloseButton>
        </Search>

        {!isOpen && (
          <Filter type='button' onClick={handleSort} data-test-id='sort-rating-button'>
            <SortIconContainer>{sortType === 'down' ? <SortIconDown /> : <SortIconUp />}</SortIconContainer>
            <Text>По рейтингу</Text>
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
