import React from 'react';

import styled from 'styled-components';

import Text from 'src/components/Text';
import Button from 'src/components/Button';

import BaseLayout from './BaseLayout';

import { useTranslation } from 'react-i18next';

export default function Stack() {
  const [t] = useTranslation();

  return (
    <BaseLayout>
      <StyledTextContainer>
        <Text type="Xlarge" fontWeight={400}>
          Stack
        </Text>
      </StyledTextContainer>

      <StyledStackSectionContainer>
        <Text type="large">Frontend</Text>
        <Text type="normal">
          JavaScript, TypeScript, ES6 +, React, react-native, React Hook, redux,
          redux-saga, Jest, Mocha, apollo client, StoryBook, DocZ, webpack
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Backend</Text>
        <Text type="normal">
          Node, ts-node, Express, Adonis, Sequelize, apollo server, testing,
          Elixir and Pheonix
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Mobile</Text>
        <Text type="normal">
          Flutter, react-native, Swift
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Databases</Text>
        <Text type="normal">Postgres SQL, MongoDB, MySQL, SQL Script.</Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Best Praticies</Text>
        <Text type="normal">Clean Code, TDD, DDD</Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Operating Systems</Text>
        <Text type="normal">
          Unix like systems (MacOS, Linux and Windows WSL)
        </Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Agile methodologies</Text>
        <Text type="normal">Scrum, Kanbam</Text>
      </StyledStackSectionContainer>

      <StyledStackSectionContainer>
        <Text type="large">Others</Text>
        <Text type="normal">
          Git, GitHub, GitLab, ZSH, Vim Editor, CI/CD, App Delivery (App Store
          and Google Play)
        </Text>
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
