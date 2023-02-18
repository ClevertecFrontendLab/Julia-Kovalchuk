/* eslint-disable import/no-extraneous-dependencies */
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import { IBookImage } from '../../types/types';

import { Image, Wrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
  images: IBookImage[];
}

export const SliderMini = ({ images }: IProps) => (
  <Wrapper>
    <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} data-test-id='slide-big'>
      {images.map(({ url }) => (
        <SwiperSlide key={uuidv4()}>
          <Image src={`https://strapi.cleverland.by${url}`} alt='Slide image' />
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);
