import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, ArrowUpIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { Amount, ButtonHide, CategoryBox, Container, ContainerLink, ProfileContainer, Wrapper } from './styles';

interface ICategory {
  category: string;
  name: string;
  amount: number;
}

const dataCategories: ICategory[] = [
  {
    category: 'business',
    name: 'Бизнес-книги',
    amount: 5,
  },
  {
    category: 'detective',
    name: 'Детективы',
    amount: 3,
  },
  {
    category: 'children',
    name: 'Детские книги',
    amount: 15,
  },
  {
    category: 'foreign',
    name: 'Зарубежная литература',
    amount: 1,
  },
  {
    category: 'history',
    name: 'История',
    amount: 21,
  },
  {
    category: 'classic',
    name: 'Классическая литература',
    amount: 17,
  },
  {
    category: 'psychology',
    name: 'Книги по психологии',
    amount: 55,
  },
  {
    category: 'computers',
    name: 'Компьютерная литература',
    amount: 18,
  },
  {
    category: 'culture',
    name: 'Культура и искусство',
    amount: 1,
  },
  {
    category: 'science',
    name: 'Наука и образование',
    amount: 62,
  },
  {
    category: 'publicistic',
    name: 'Публицистическая литература',
    amount: 8,
  },
  {
    category: 'references',
    name: 'Справочники',
    amount: 5,
  },
  {
    category: 'scifi',
    name: 'Фантастика',
    amount: 4,
  },
  {
    category: 'humor',
    name: 'Юмористическая литература',
    amount: 0,
  },
];

interface IProps {
  isOpen: boolean;
  isOpenCategory: boolean;
  handleBurgerView: () => void;
  handleView: () => void;
  handleCategoryView: () => void;
}

export const BurgerMenu = ({ isOpen, handleBurgerView, handleView, handleCategoryView, isOpenCategory }: IProps) => {
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
          {dataCategories.map(({ category, name, amount }) => (
            <CustomAsidelink
              to={`${ROUTE.BOOKS}/${category}`}
              onClick={handleBurgerView}
              type='tertiary'
              key={uuidv4()}
            >
              <p>
                {name}
                <Amount>{amount}</Amount>
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
