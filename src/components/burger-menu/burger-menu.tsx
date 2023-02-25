import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, ArrowUpIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getCategories } from '../../store/selectors/categories-selector';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { ButtonHide, CategoryBox, Container, ContainerLink, ProfileContainer, Wrapper } from './styles';

interface IProps {
  isOpen: boolean;
  isOpenCategory: boolean;
  handleBurgerView: () => void;
  handleView: () => void;
  handleCategoryView: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurgerView, handleView, handleCategoryView, isOpenCategory }: IProps) => {
  const { categories } = useAppSelector(getCategories);

  const handleClick = () => {
    handleView();
    handleBurgerView();
  };

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
          <CustomAsidelink to={ROUTE.BOOKS} type='primary'>
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
              <p data-test-id={`burger-${path}`}>
                {name}
                {/* <Amount>{amount}</Amount> */}
              </p>
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
