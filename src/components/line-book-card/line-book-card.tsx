import { useCallback } from 'react';

import { NoImageIcon } from '../../assets';
import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { IBookShortInfo } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, Hightlight, PrimaryButton, Stars } from '..';

import {
  Image,
  NoImage,
  StyledLineBookCard,
  Text,
  Title,
  WrapperContent,
  WrapperImage,
  WrapperRow,
  WrapperText,
} from './styles';

interface IProps {
  book: IBookShortInfo;
}

export const LineBookCard = ({ book }: IProps) => {
  const { image, issueYear, authors, title, rating, booking } = book;
  const { searchValue } = useAppSelector(getAllBooks);

  const highlightText = useCallback((str: string) => <Hightlight filter={searchValue} str={str} />, [searchValue]);

  return (
    <StyledLineBookCard data-test-id='card'>
      <WrapperImage>
        {image ? (
          <Image src={`https://strapi.cleverland.by${image.url}`} alt={title} />
        ) : (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        )}
      </WrapperImage>

      <WrapperContent>
        <Title>{highlightText(title)}</Title>

        <WrapperText>
          <Text>{authors?.join(', ')}, </Text>
          <Text>{issueYear}</Text>
        </WrapperText>

        <WrapperRow>
          <Stars rating={rating} />

          {booking?.order === true && (
            <ButtonOccupied large={174} middle={174} small={186}>
              Забронировано
            </ButtonOccupied>
          )}
          {/* {booking?.order === true && bookedTill !== '' && (
            <ButtonOccupiedUntil large={174} middle={174} small={186}>
              Занята до 25.02
            </ButtonOccupiedUntil>
          )} */}
          {booking === null && (
            <PrimaryButton large={174} middle={174} small={186}>
              Забронировать
            </PrimaryButton>
          )}
        </WrapperRow>
      </WrapperContent>
    </StyledLineBookCard>
  );
};
