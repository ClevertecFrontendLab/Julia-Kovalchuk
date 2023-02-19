import React from 'react';

import { NoImageIcon } from '../../assets';
import { useWindowSize } from '../../hooks/use-window-size';
import { IBookInfo } from '../../types/types';
import { Breackpoint } from '../../ui/media';
import { Title } from '../../ui/typography';
import { SliderMini } from '../slider-mini/slider-mini';
import { ButtonOccupied, PrimaryButton, Slider } from '..';

import {
  Author,
  Description,
  Image,
  NoImage,
  StyledBookDetails,
  TitleDescription,
  WrapperContent,
  WrapperDekstopDescription,
  WrapperImage,
  WrapperTabletDescription,
  WrapperText,
} from './styles';

interface IProps {
  book: IBookInfo;
}

export const BookDetails = ({ book }: IProps) => {
  const { width = 0 } = useWindowSize();
  const { images, title, authors, issueYear, booking, description } = book;

  return (
    <React.Fragment>
      <StyledBookDetails>
        <WrapperImage>
          {images ? (
            images.length === 1 ? (
              <Image src={`https://strapi.cleverland.by${images[0].url}`} alt={title} />
            ) : width > Breackpoint.MD ? (
              <Slider images={images} />
            ) : (
              <SliderMini images={images} />
            )
          ) : (
            <NoImage>
              <NoImageIcon />
            </NoImage>
          )}
        </WrapperImage>

        <WrapperContent>
          <Title>{title}</Title>

          <Author>
            {authors && <WrapperText>{authors?.join(', ')}, </WrapperText>}
            <WrapperText>{issueYear}</WrapperText>
          </Author>

          {booking?.order === true && (
            <ButtonOccupied large={350} middle={306} padding={14} fontSize={16} isBig={false}>
              Забронировано
            </ButtonOccupied>
          )}
          {/* {isBooked === true && bookedTill !== '' && (
            <ButtonOccupiedUntil large={350} middle={306} padding={14} fontSize={16} isBig={false}>
              Занята до 25.02
            </ButtonOccupiedUntil>
          )} */}
          {booking === null && (
            <PrimaryButton large={350} middle={306} padding={14} fontSize={16} isBig={false}>
              Забронировать
            </PrimaryButton>
          )}

          {width > Breackpoint.MD && (
            <WrapperDekstopDescription>
              <TitleDescription>О книге</TitleDescription>
              {description ? (
                <Description>{description}</Description>
              ) : (
                <Description>Данная информация отсутствует</Description>
              )}
            </WrapperDekstopDescription>
          )}
        </WrapperContent>
      </StyledBookDetails>

      {width < Breackpoint.MD && (
        <WrapperTabletDescription>
          <TitleDescription>О книге</TitleDescription>
          {description ? (
            <Description>{description}</Description>
          ) : (
            <Description>Данная информация отсутствует</Description>
          )}
        </WrapperTabletDescription>
      )}
    </React.Fragment>
  );
};
