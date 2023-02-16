import { IBook } from '../../types/types';
import { SecondarySmallTitle } from '../../ui/typography';
import { NoRating, ReviewsList, Separator, Stars } from '..';

import {
  Description,
  DescriptionContainer,
  DescriptionRow,
  Info,
  InfoTitle,
  NoRatingRow,
  NumberRating,
  Rating,
  RatingRow,
  RatingText,
  StyledBookDescription,
  WrapperDescription,
} from './styles';

interface IProps {
  book: IBook;
}

export const BookDescription = ({ book }: IProps) => {
  const { rating, publishing, year, pages, format, binding, weight, ISBN, manufacturer, category } = book;

  return (
    <StyledBookDescription>
      <Rating>
        <SecondarySmallTitle>Рейтинг</SecondarySmallTitle>

        <Separator />

        {rating === '' ? (
          <NoRatingRow>
            <NoRating />
            <RatingText>еще нет оценок</RatingText>
          </NoRatingRow>
        ) : (
          <RatingRow>
            <Stars rating={rating} />
            <NumberRating>{rating}</NumberRating>
          </RatingRow>
        )}
      </Rating>

      <Description>
        <SecondarySmallTitle>Подробная информация</SecondarySmallTitle>

        <Separator />
        <WrapperDescription>
          <DescriptionContainer>
            <DescriptionRow>
              <InfoTitle>Издательство</InfoTitle>
              <Info>{publishing}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Год издания</InfoTitle>
              <Info>{year}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Страниц</InfoTitle>
              <Info>{pages}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Переплет</InfoTitle>
              <Info>{binding}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Формат</InfoTitle>
              <Info>{format}</Info>
            </DescriptionRow>
          </DescriptionContainer>

          <DescriptionContainer>
            <DescriptionRow>
              <InfoTitle>Жанр</InfoTitle>
              <Info>{category}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Вес</InfoTitle>
              <Info>{weight}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>ISBN</InfoTitle>
              <Info>{ISBN}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Изготовитель</InfoTitle>
              <Info>{manufacturer}</Info>
            </DescriptionRow>
          </DescriptionContainer>
        </WrapperDescription>
      </Description>

      <ReviewsList comments={book.comments || []} />
    </StyledBookDescription>
  );
};
