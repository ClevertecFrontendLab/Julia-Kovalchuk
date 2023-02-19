import { NoImageIcon } from '../../assets';
import { IBookShortInfo } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, Stars } from '..';

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
        <Title>{title}</Title>

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
