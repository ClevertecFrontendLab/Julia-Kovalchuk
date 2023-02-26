import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, ArrowUpIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { fetchAllBooks, searchBooks, sortByCategory } from '../../store/feautures/all-books-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { getCategories } from '../../store/selectors/categories-selector';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { Amount, ButtonHide, CategoryBox, Container, ContainerLink, ProfileContainer, Wrapper } from './styles';

interface IProps {
  isOpen: boolean;
  isOpenCategory: boolean;
  handleBurgerView: () => void;
  handleView: () => void;
  handleCategoryView: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurgerView, handleView, handleCategoryView, isOpenCategory }: IProps) => {
  const { categories } = useAppSelector(getCategories);
  const { categoriesAmount, searchValue } = useAppSelector(getAllBooks);
  const currentPath = useParams();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    handleView();
    handleBurgerView();
  };

  useEffect(() => {
    const categoryName = categories.find((category) => category.path === currentPath.category)?.name;

    if (categoryName) {
      dispatch(sortByCategory(categoryName));
    } else {
      dispatch(fetchAllBooks());
    }
  }, [categories, currentPath, dispatch]);

  useEffect(() => {
    if (searchValue) dispatch(searchBooks(searchValue));
  }, [dispatch, searchValue, currentPath]);

  return (
    <Wrapper $isOpen={isOpen}>
      <Container>
        <ButtonHide type='button' onClick={handleCategoryView} data-test-id='burger-showcase'>
          <CustomAsidelink to='' type='secondary'>
            <ContainerLink>
              <div>Витрина книг</div>
              {isOpen ? <ArrowUpIcon fill='inherit' /> : <ArrowDownIcon fill='inherit' />}
            </ContainerLink>
          </CustomAsidelink>
        </ButtonHide>

        <CategoryBox $isOpen={isOpenCategory}>
          <CustomAsidelink to={ROUTE.BOOKS} type='primary' state={{ name: 'Все книги', path: 'all' }}>
            <div data-test-id='burger-books'>Все книги</div>
          </CustomAsidelink>
          {categories.map(({ name, path }) => (
            <CustomAsidelink
              to={`${ROUTE.BOOKS}/${path}`}
              onClick={handleBurgerView}
              type='tertiary'
              key={uuidv4()}
              state={{ name, path }}
            >
              <p data-test-id={`burger-${path}`}>{name}</p>
              <Amount data-test-id={`burger-book-count-for-${path}`}>
                {categoriesAmount[name] ? categoriesAmount[name] : 0}
              </Amount>
            </CustomAsidelink>
          ))}
        </CategoryBox>
      </Container>

      <Container>
        <CustomAsidelink to={ROUTE.RULES} onClick={handleClick} type='secondary'>
          <div data-test-id='burger-terms'>Правила пользования</div>
        </CustomAsidelink>
      </Container>

      <Container>
        <CustomAsidelink to={ROUTE.OFFER} onClick={handleClick} type='secondary'>
          <div data-test-id='burger-contract'>Договор оферты</div>
        </CustomAsidelink>
      </Container>
      <ProfileContainer>
        <CustomAsidelink to={ROUTE.PROFILE} onClick={handleClick} type='primary'>
          Профиль
        </CustomAsidelink>
        <CustomAsidelink to={ROUTE.OFFER} onClick={handleClick} type='primary'>
          Выход
        </CustomAsidelink>
      </ProfileContainer>
    </Wrapper>
  );
};
