import { NoImageIcon } from '../../assets';
import { IBookShortInfo } from '../../types/types';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, Stars } from '..';

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
        <Title>{title}</Title>
      </WrapperTitle>

      <SubTitle>
        <WrapperText>
          <Text>{authors.join(', ')}, </Text>
          <Text>{issueYear}</Text>
        </WrapperText>
      </SubTitle>
      {booking?.order === true && <ButtonOccupied>Забронировано</ButtonOccupied>}
      {/* {isBooked === true && bookedTill !== '' && <ButtonOccupiedUntil>Занята до 25.02</ButtonOccupiedUntil>} */}
      {booking === null && <PrimaryButton>Забронировать</PrimaryButton>}
    </StyledSquareBookCard>
  );
};
