import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, ArrowUpIcon } from '../../assets';
import { ROUTE } from '../../routes/routes';
import { useAppSelector } from '../../store/hooks/hooks';
import { getCategories } from '../../store/selectors/categories-selector';
import { CustomAsidelink } from '../custom-aside-link/custom-aside-link';

import { ButtonHide, CategoryBox, ContainerLink, Wrapper } from './styles';

interface IProps {
  isOpen: boolean;
  handleCategoryView: () => void;
  handleView: () => void;
}

export const AsideBar = ({ isOpen, handleCategoryView, handleView }: IProps) => {
  const { categories } = useAppSelector(getCategories);

  return (
    <Wrapper>
      <div>
        <ButtonHide type='button' onClick={handleCategoryView} data-test-id='navigation-showcase'>
          <CustomAsidelink to={ROUTE.HOME} type='secondary'>
            <ContainerLink>
              <div>Витрина книг</div>
              {isOpen ? <ArrowUpIcon fill='inherit' /> : <ArrowDownIcon fill='inherit' />}
            </ContainerLink>
          </CustomAsidelink>
        </ButtonHide>

        <CategoryBox $isOpen={isOpen}>
          <CustomAsidelink to='' type='primary'>
            <div data-test-id='navigation-books'>Все книги</div>
          </CustomAsidelink>
          {categories.map(({ name, path }) => (
            <CustomAsidelink to={`${ROUTE.BOOKS}/${path}`} type='tertiary' key={uuidv4()}>
              <p>
                {name}
                {/* <Amount>{amount}</Amount> */}
              </p>
            </CustomAsidelink>
          ))}
        </CategoryBox>
      </div>
      <CustomAsidelink to={ROUTE.RULES} onClick={handleView} type='secondary'>
        <div data-test-id='navigation-terms'>Правила пользования</div>
      </CustomAsidelink>
      <CustomAsidelink to={ROUTE.OFFER} onClick={handleView} type='secondary' data-test-id='navigation-contract'>
        <div data-test-id='navigation-contract'>Договор оферты</div>
      </CustomAsidelink>
    </Wrapper>
  );
};
