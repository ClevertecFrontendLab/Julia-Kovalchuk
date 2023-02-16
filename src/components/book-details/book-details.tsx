import React from 'react';

import { NoImageIcon } from '../../assets';
import { useWindowSize } from '../../hooks/use-window-size';
import { IBook } from '../../types/types';
import { Breackpoint } from '../../ui/media';
import { Title } from '../../ui/typography';
import { SliderMini } from '../slider-mini/slider-mini';
import { ButtonOccupied, ButtonOccupiedUntil, PrimaryButton, Slider } from '..';

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
  book: IBook;
}

export const BookDetails = ({ book }: IProps) => {
  const { width = 0 } = useWindowSize();
  const { image, title, author, year, isBooked, bookedTill } = book;

  return (
    <React.Fragment>
      <StyledBookDetails>
        <WrapperImage>
          {image.length? (image.length === 1 ? (
            <Image src={image[0]} alt={title} />
          ) : (
            width > Breackpoint.MD? <Slider image={image}/> : <SliderMini image={image}/>
          )) : (
            <NoImage>
              <NoImageIcon />
            </NoImage>
          ) }
        </WrapperImage>

        <WrapperContent>
          <Title>{title}</Title>

          <Author>
            <WrapperText>{author}, </WrapperText>
            <WrapperText>{year}</WrapperText>
          </Author>

          {isBooked === true && bookedTill === '' && (
            <ButtonOccupied large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Забронировано
            </ButtonOccupied>
          )}
          {isBooked === true && bookedTill !== '' && (
            <ButtonOccupiedUntil large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Занята до 25.02
            </ButtonOccupiedUntil>
          )}
          {isBooked === false && (
            <PrimaryButton large={350} middle={306} small={288} padding={14} fontSize={16} isBig={true}>
              Забронировать
            </PrimaryButton>
          )}

          {width > Breackpoint.MD && (
            <WrapperDekstopDescription>
              <TitleDescription>О книге</TitleDescription>
              <Description>
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А
                грокать алгоритмы — это веселое и увлекательное занятие.
              </Description>
            </WrapperDekstopDescription>
          )}
        </WrapperContent>
      </StyledBookDetails>

      {width < Breackpoint.MD && (
        <WrapperTabletDescription>
          <TitleDescription>О книге</TitleDescription>
          <Description>
            Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
            решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
            изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
            время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
            алгоритмы — это веселое и увлекательное занятие.
          </Description>
        </WrapperTabletDescription>
      )}
    </React.Fragment>
  );
};
