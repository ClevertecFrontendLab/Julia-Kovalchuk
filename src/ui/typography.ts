import styled from 'styled-components';

import { Media } from './media';

const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.1px;
  color: #363636;

  ${Media.MD} {
    font-size: 24px;
    line-height: 30px;
  }

  ${Media.SM} {
    font-size: 18px;
    line-height: 28px;
  }
`;

const SectionName = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
`;

const SmallTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;
`;

const SecondarySmallTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.1px;

  ${Media.MD} {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  ${Media.SM} {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
  }
`;

export { Title, SmallTitle, Text, SectionName, SecondarySmallTitle };
