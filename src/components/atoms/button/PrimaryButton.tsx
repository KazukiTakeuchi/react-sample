import { FC } from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButton';

interface props {
  children: string;
}

export const PrimaryButton:FC<props> = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: blue;
`;
