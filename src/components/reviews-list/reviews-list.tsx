import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ArrowDownIcon, ArrowUpIcon } from '../../assets';
import reviewerAvatarIcon from '../../assets/images/reviewer-avatar.png';
import { IComment } from '../../types/types';
import { ContainerFlex } from '../../ui/containers';
import { SmallTitle } from '../../ui/typography';
import { PrimaryButton } from '../primary-button/primary-button';
import { Stars } from '../stars/stars';
import { Separator } from '..';

import {
  Box,
  ButtonHideReviews,
  Content,
  Info,
  InfoText,
  Review,
  ReviewsAmount,
  Text,
  TitleBox,
  Wrapper,
} from './styles';

interface IProps {
  comments: IComment[] | null;
}

export const ReviewsList = ({ comments }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRewievsView = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <TitleBox>
        <ContainerFlex>
          <SmallTitle>
            Отзывы<ReviewsAmount>{comments?.length}</ReviewsAmount>
          </SmallTitle>
          <ButtonHideReviews type='button' onClick={handleRewievsView} data-test-id='button-hide-reviews'>
            {isOpen ? <ArrowUpIcon fill='#363636' /> : <ArrowDownIcon fill='363636' />}
          </ButtonHideReviews>
        </ContainerFlex>
      </TitleBox>

      {!!comments?.length && isOpen && (
        <React.Fragment>
          <Separator />
          <Content>
            {comments?.map(({ user, text, rating, createdAt }) => (
              <Review key={uuidv4()}>
                <Info>
                  <img src={reviewerAvatarIcon} alt='avatar' />
                  <Box>
                    <InfoText>
                      {user.firstName} {user.lastName}
                    </InfoText>
                    <InfoText>{createdAt}</InfoText>
                  </Box>
                </Info>
                <Stars rating={rating} />
                <Text>{text}</Text>
              </Review>
            ))}
          </Content>
        </React.Fragment>
      )}

      <PrimaryButton large={350} padding={14} fontSize={16} isBig={true} data-test-id='button-rating'>
        Оценить книгу
      </PrimaryButton>
    </Wrapper>
  );
};
