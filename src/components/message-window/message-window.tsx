import { ReactNode } from 'react';

import { Close, ErrorIcon, SuccessIcon } from '../../assets';

import { MessageContainer, Wrapper } from './styles';

interface IProps {
  type: 'error' | 'success';
  children: ReactNode;
}

export const MessageWindow = ({ type, children }: IProps) => (
  <Wrapper $type={type} data-test-id='error'>
    <MessageContainer>
      {type === 'error' ? <ErrorIcon /> : <SuccessIcon />}
      {children}
    </MessageContainer>

    <Close />
  </Wrapper>
);
