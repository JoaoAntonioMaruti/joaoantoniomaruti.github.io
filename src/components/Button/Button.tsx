import React, { ReactNode } from 'react';

import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

export default function Button({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  border: solid 2px #000;
  padding: 16px 32px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &: hover {
    color: #FFF;
    background: #000;
  }
`;
