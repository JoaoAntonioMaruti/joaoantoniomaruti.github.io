import React from 'react';

import styled from 'styled-components';

import Text from 'src/components/Text';

import BaseLayout from './BaseLayout';

export default function Community() {
  return (
    <BaseLayout>
      <StyledTextContainer>
        <Text type="Xlarge" fontWeight={400}>
          Community
        </Text>
      </StyledTextContainer>

      <StyledStackSectionContainer>
        <Text type="large">GitHub</Text>
        <Text type="normal">
          <a href="https://github.com/JoaoAntonioMaruti" target="_blank">
            @joaoantoniomaruti
          </a>
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">CodePen</Text>
        <Text type="normal">
          <a href="https://codepen.io/joaoantoniomaruti" target="_blank">
            @joaoantoniomaruti
          </a>
        </Text>
      </StyledStackSectionContainer>

      <StyledTextContainer>
        <Text type="Xlarge" fontWeight={400}>
          Repositories
        </Text>
      </StyledTextContainer>

      <StyledStackSectionContainer>
        <Text type="large">My Vim dotfiles</Text>
        <Text type="normal">
          <a
            href="https://github.com/JoaoAntonioMaruti/dotfiles"
            target="_blank"
          >
            https://github.com/JoaoAntonioMaruti/dotfiles
          </a>
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Personal website</Text>
        <a
          href="https://github.com/JoaoAntonioMaruti/joaoantoniomaruti.github.io"
          target="_blank"
        >
          https://github.com/JoaoAntonioMaruti/joaoantoniomaruti.github.io
        </a>
      </StyledStackSectionContainer>
    </BaseLayout>
  );
}

const StyledStackSectionContainer = styled.div`
  margin-bottom: 16px;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 24px;
  width: 240px;
`;
