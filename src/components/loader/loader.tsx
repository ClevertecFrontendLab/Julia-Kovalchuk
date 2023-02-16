import Lottie from 'lottie-react';

import loader from '../../assets/animations/loader.json';
import { useWindowSize } from '../../hooks/use-window-size';
import { Breackpoint } from '../../ui/media';

import { Wrapper } from './styles';

export const Loader = () => {
  const { width = 0 } = useWindowSize();

  let size = 69;

  if (width <= Breackpoint.MD) {
    size = 44;
  } else if (width <= Breackpoint.SM) {
    size = 22;
  }
  const style = {
    height: size,
  };

  return (
    <Wrapper>
      <Lottie animationData={loader} loop={true} style={style} data-test-id='loader' />
    </Wrapper>
  );
};
