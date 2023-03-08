import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useWindowSize } from '../../hooks/use-window-size';
import { clearError, setStep } from '../../store/feautures/register-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { signUp } from '../../store/selectors/register-selector';
import { Breackpoint } from '../../ui/media';
import { PrimaryButton } from '../primary-button/primary-button';
import { Title } from '../title/title';

import { Text, Wrapper } from './styles';

interface IProps {
  title: string;
  buttonTitle: string;
  children: ReactNode;
  to: any;
}

export const ModalWindow = ({ title, buttonTitle, children, to }: IProps) => {
  const { width = 0 } = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { step } = useAppSelector(signUp);

  const handleClick = () => {
    if (step === 'error') dispatch(setStep('1'));
    dispatch(clearError);
    navigate(to);
  };

  return (
    <Wrapper data-test-id='status-block'>
      <Title size={width > Breackpoint.SM ? 24 : 18} color='black' margin={0} weight={700}>
        {title}
      </Title>

      <Text>{children}</Text>

      <PrimaryButton
        large={350}
        middle={306}
        padding={14}
        fontSize={16}
        isBig={true}
        type='button'
        onClick={handleClick}
      >
        {buttonTitle}
      </PrimaryButton>
    </Wrapper>
  );
};
