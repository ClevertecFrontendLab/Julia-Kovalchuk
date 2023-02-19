/* eslint-disable import/no-extraneous-dependencies */
import styled, { css } from 'styled-components'
import { Swiper } from 'swiper/react';

import { Media } from '../../ui/media';

const PaginationStyles = css`
.swiper-wrapper {
  padding-bottom: 25px;
}

.swiper-pagination {
    bottom: 0px;
  }

.swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #363636;
    border-radius: 50%;
  }
`

const Wrapper = styled.div`
  width: 445px;
  max-width: 445px;

  ${Media.MD} {
    ${PaginationStyles}
    width: 136px;
    max-width: 136px;
  }

  ${Media.SM} {
    width: 188px;
    max-width: 188px;
  }
`;

const Image = styled.img`
  width: 445px;
  height: 593px;
  object-fit: cover;
  border: 1px solid #a7a7a7;
  border-radius: 10px;

  ${Media.MD} {
    width: 136px;
    height: 198px;
    border-radius: 3px;
  }

  ${Media.SM} {
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

const ImagePreview = styled.img`
width: 65px;
height: 86px;
object-fit: cover;
border-radius: 3px;
margin-top: 17px;
`;

const WrapperStyles = css`
.swiper-wrapper {
    justify-content: center;
  }`;

  const ScrollBarStyles = css`
  ::-webkit-scrollbar { width: 6px;
    height: 6px;
   }

::-webkit-scrollbar-track {
  background: white;
  border-radius: 5px;
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background: #A7A7A7;
  border-radius: 5px;
  max-width: 190px;
}
  `

const StyledSwiper = styled(Swiper)`
${WrapperStyles}
${ScrollBarStyles}
overflow-x: scroll;
`;



export {Wrapper, Image, ImagePreview, StyledSwiper}