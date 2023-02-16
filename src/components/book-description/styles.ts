import styled from 'styled-components';

import { ContainerFlex, ContainerFlexColumn } from '../../ui/containers';
import { Media } from '../../ui/media';
import { SecondarySmallTitle } from '../../ui/typography';

const StyledBookDescription = styled(ContainerFlexColumn)`
  grid-gap: 62px;
  margin-top: 42px;

  ${Media.MD} {
    grid-gap: 52px;
    margin-top: 52px;
  }

  ${Media.SM} {
    grid-gap: 42px;
    margin-top: 42px;
  }
`;

const Rating = styled(ContainerFlexColumn)``;

const RatingRow = styled(ContainerFlex)``;

const NumberRating = styled(SecondarySmallTitle)`
  margin-left: 24px;
`;

const NoRatingRow = styled(ContainerFlex)`
  ${Media.SM} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const RatingText = styled.p`
  margin-left: 24px;

  ${Media.SM} {
    margin-left: 0;
    margin-top: 8px;
  }
`;

const Description = styled(ContainerFlexColumn)``;

const WrapperDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 146px;

  ${Media.MD} {
    grid-gap: 30px;
  }

  ${Media.SM} {
    grid-template-columns: 100%;
    grid-gap: 16px;
  }
`;

const DescriptionContainer = styled(ContainerFlexColumn)`
  justify-content: space-between;
  grid-gap: 16px;
`;

const DescriptionRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const InfoTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: #a7a7a7;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }

  ${Media.SM} {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

const Info = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;

  ${Media.MD} {
    font-size: 14px;
    line-height: 18px;
  }

  ${Media.SM} {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.2px;
  }
`;

export {
  StyledBookDescription,
  Rating,
  RatingRow,
  NumberRating,
  NoRatingRow,
  RatingText,
  Description,
  WrapperDescription,
  DescriptionContainer,
  DescriptionRow,
  InfoTitle,
  Info,
};
