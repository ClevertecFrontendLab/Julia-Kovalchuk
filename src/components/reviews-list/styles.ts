import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';

const Wrapper = styled(ContainerFlexColumn)`
  width: 100%;
  margin-bottom: 42px;

  ${Media.MD} {
    margin-bottom: 48px;
  }

  ${Media.SM} {
    margin-bottom: 20px;
  }
`;

const Content = styled(ContainerFlexColumn)`
  grid-gap: 45px;
  margin-bottom: 42px;

  ${Media.SM} {
    margin-bottom: 20px;
  }
`;

const Review = styled(ContainerFlexColumn)`
  grid-gap: 18px;
`;

const TitleBox = styled.div`
  padding-bottom: 16px;

  ${Media.MD} {
    padding-bottom: 18px;
  }

  ${Media.SM} {
    padding-bottom: 20px;
  }
`;

const ButtonHideReviews = styled.button`
margin-left: 29px;

&:hover {
  stroke: #F83600;
}
`

const ReviewsAmount = styled.span`
  height: 100%;
  vertical-align: middle;
  margin-left: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;
`;

const Info = styled(ContainerFlex)`
  grid-gap: 24px;

  ${Media.SM} {
    grid-gap: 18px;
  }
`;

const Box = styled(ContainerFlex)`
  grid-gap: 24px;

  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 3px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #727272;

  ${Media.SM} {
    font-size: 15px;
    line-height: 20px;
  }
`;

const Text = styled(InfoText)`
  width: 730px;
  color: #363636;

  ${Media.MD} {
    width: 100%;
  }
`;

export { Wrapper, Review, Content, ReviewsAmount, TitleBox, Info, InfoText, Text, Box, ButtonHideReviews };
