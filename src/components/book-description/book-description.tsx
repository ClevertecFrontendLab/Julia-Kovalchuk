import { IBookInfo } from '../../types/types';
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
  book: IBookInfo;
}

export const BookDescription = ({ book }: IProps) => {
  const { rating, publish, issueYear, pages, format, cover, weight, ISBN, producer, categories, comments } = book;

  return (
    <StyledBookDescription>
      <Rating>
        <SecondarySmallTitle>Рейтинг</SecondarySmallTitle>

        <Separator />

        {rating === null ? (
          <NoRatingRow>
            <NoRating />
            <RatingText>еще нет оценок</RatingText>
          </NoRatingRow>
        ) : (
          <RatingRow>
            {/* <Stars rating={rating} /> */}
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
              <Info>{publish}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Год издания</InfoTitle>
              <Info>{issueYear}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Страниц</InfoTitle>
              <Info>{pages}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Переплет</InfoTitle>
              <Info>{cover}</Info>
            </DescriptionRow>

            <DescriptionRow>
              <InfoTitle>Формат</InfoTitle>
              <Info>{format}</Info>
            </DescriptionRow>
          </DescriptionContainer>

          <DescriptionContainer>
            <DescriptionRow>
              <InfoTitle>Жанр</InfoTitle>
              {categories ? <Info>{categories.join(', ')}</Info> : <Info>-</Info>}
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
              <Info>{producer}</Info>
            </DescriptionRow>
          </DescriptionContainer>
        </WrapperDescription>
      </Description>

      <ReviewsList comments={comments} />
    </StyledBookDescription>
  );
};
