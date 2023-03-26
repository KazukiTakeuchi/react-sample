import { FC } from 'react';
import styled from 'styled-components';

interface props {
  children: string;
}

export const PrimaryButton:FC<props> = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border-radius: 9999px;
  &:hover {
    background-color: #32403d;
    cursor: pointer;
  }
`;
