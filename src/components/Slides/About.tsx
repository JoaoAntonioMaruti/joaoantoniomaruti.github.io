import React from 'react';

import styled from 'styled-components';

import Text from 'src/components/Text';
import Button from 'src/components/Button';

import BaseLayout from './BaseLayout';

import { useTranslation } from 'react-i18next';

export default function About() {
  const [t] = useTranslation();

  return (
    <BaseLayout background={'#f0e1e1'}>
      <StyledTextContainer>
        <Text type="Xlarge" fontWeight={500}>
          {t('aboutTitle')}
        </Text>
      </StyledTextContainer>
      <Text>{t('aboutDescription')}</Text>
      <StyledButtontContainer>
        <Button>{t('complteResume')}</Button>
      </StyledButtontContainer>
    </BaseLayout>
  );
}

const StyledButtontContainer = styled.div`
  position: absolute;
  bottom: 48px;
`;

const StyledTextContainer = styled.div`
  margin-bottom: 48px;
  width: 240px;
`;
