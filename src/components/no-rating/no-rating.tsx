import { v4 as uuidv4 } from 'uuid';

import { StarIcon } from '../../assets';

import { StyledNoRating } from './styles';

export const NoRating = () => (
  <StyledNoRating>
    {[...Array(5)].map(() => (
      <StarIcon key={uuidv4()} />
    ))}
  </StyledNoRating>
);
