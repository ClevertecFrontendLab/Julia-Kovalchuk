/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { v4 as uuidv4 } from 'uuid';

import { IBookImage } from '../../types/types';

import { Image, ImagePreview, StyledSwiper, Wrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
  images: IBookImage[];
}

export const Slider = ({ images }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <Wrapper>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        data-test-id='slide-big'
      >
        {images.map(({ url }) => (
          <SwiperSlide key={uuidv4()}>
            <Image src={`https://strapi.cleverland.by${url}`} alt='Slide image' />
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledSwiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={30}
        slidesPerView={5}
        modules={[Navigation, Thumbs]}
      >
        {images.map(({ url }) => (
          <SwiperSlide data-test-id='slide-mini' key={uuidv4()}>
            <ImagePreview src={`https://strapi.cleverland.by${url}`} alt='Slide image' />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  );
};
