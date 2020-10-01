import React, { ReactNode } from 'react';

import styled from 'styled-components';

type StyledBaseLayoutProps = {
  background?: string;
};

type Props = StyledBaseLayoutProps & {
  children: ReactNode;
};

export default function BaseLayout({
  children,
  background = '#FFFFFF',
}: Props) {
  return (
    <StyledBaseLayout background={background}>
      <StyledMargin>{children}</StyledMargin>
    </StyledBaseLayout>
  );
}

const StyledMargin = styled.div`
  padding: 48px;
`;

const StyledBaseLayout = styled.div<StyledBaseLayoutProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${({ background }) => background};
`;
