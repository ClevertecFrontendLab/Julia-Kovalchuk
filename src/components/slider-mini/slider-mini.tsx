/* eslint-disable import/no-extraneous-dependencies */
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

import { Image, Wrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
  image: string[];
}

export const SliderMini = ({ image }: IProps) => (
  <Wrapper>
    <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} data-test-id='slide-big'>
      {image.map((item) => (
        <SwiperSlide key={uuidv4()}>
          <Image src={item} alt='Slide image' />
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);
