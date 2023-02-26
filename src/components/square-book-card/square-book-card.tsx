/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useCallback } from 'react';

import { NoImageIcon } from '../../assets';
import { useAppSelector } from '../../store/hooks/hooks';
import { getAllBooks } from '../../store/selectors/all-books-selector';
import { IBookShortInfo } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, Hightlight, PrimaryButton, Stars } from '..';

import {
  Image,
  NoImage,
  StyledSquareBookCard,
  SubTitle,
  Text,
  Title,
  WrapperImage,
  WrapperText,
  WrapperTitle,
} from './styles';

interface IProps {
  book: IBookShortInfo;
}

export const SquareBookCard = ({ book }: IProps) => {
  const { image, issueYear, authors, title, rating, booking } = book;
  const { searchValue } = useAppSelector(getAllBooks);

  const highlightText = useCallback((str: string) => <Hightlight filter={searchValue} str={str} />, [searchValue]);

  return (
    <StyledSquareBookCard data-test-id='card'>
      <WrapperImage>
        {image ? (
          <Image src={`https://strapi.cleverland.by${image.url}`} alt={title} />
        ) : (
          <NoImage>
            <NoImageIcon />
          </NoImage>
        )}
      </WrapperImage>

      <Stars rating={rating} gap={6} />

      <WrapperTitle>
        <Title>{highlightText(title)}</Title>
      </WrapperTitle>

      <SubTitle>
        <WrapperText>
          <Text>{authors?.join(', ')}, </Text>
          <Text>{issueYear}</Text>
        </WrapperText>
      </SubTitle>
      {booking?.order === true && <ButtonOccupied>Забронировано</ButtonOccupied>}
      {/* {isBooked === true && bookedTill !== '' && <ButtonOccupiedUntil>Занята до 25.02</ButtonOccupiedUntil>} */}
      {booking === null && <PrimaryButton>Забронировать</PrimaryButton>}
    </StyledSquareBookCard>
  );
};
