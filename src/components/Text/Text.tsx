import React, { ReactNode } from 'react';
import styled from 'styled-components';

type StyledTextProps = {
  fontSize?: string;
  fontWeight?: number | 'normal';
};

type Props = StyledTextProps & {
  type?: 'small' | 'normal' | 'large' | 'Xlarge';
  children: ReactNode;
};

export default function Text({
  type = 'normal',
  children,
  fontWeight = 100,
}: Props) {
  const point = 4;

  function getFontSize() {
    switch (type) {
      case 'small':
        return `${point * 2}px`;
      case 'normal':
        return `${point * 4}px`;
      case 'large':
        return `${point * 8}px`;
      case 'Xlarge':
        return `${point * 12}px`;
    }
  }

  return (
    <StyledText fontSize={getFontSize()} fontWeight={fontWeight}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.div<StyledTextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
`;
