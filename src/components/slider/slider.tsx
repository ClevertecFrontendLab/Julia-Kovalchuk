/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { v4 as uuidv4 } from 'uuid';

import { Image, ImagePreview, StyledSwiper, Wrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IProps {
  image: string[];
}

export const Slider = ({ image }: IProps) => {
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
        {image.map((item) => (
          <SwiperSlide key={uuidv4()}>
            <Image src={item} alt='Slide image' />
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
        {image.map((item) => (
          <SwiperSlide data-test-id='slide-mini'>
            <ImagePreview src={item} alt='Slide image' />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  );
};
