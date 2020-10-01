import React, { useState } from 'react';

import { FullPage, Slide } from 'react-full-page';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Computer from 'src/components/Computer';
import LanguageSwitch from 'src/components/LanguageSwitch';

import { useTranslation } from 'react-i18next';

type SectionType = {
  component: JSX.Element;
  name: string;
};

type SectionItemType = {
  active: boolean;
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [t] = useTranslation();

  const slides = [
    {
      component: (
        <StyledSlideContainer>
          <StyledLanguageSwitchContainer>
            <LanguageSwitch />
          </StyledLanguageSwitchContainer>
          <StyledComputer>
            <Computer />
            <StyledInfo>
              <StyledName>João Antonio Maruti Milagres</StyledName>
              <StyledPosition>{t('position')}</StyledPosition>
              <StyledCompany>
                <FontAwesomeIcon icon={['far', 'building']} />  brainn.co
              </StyledCompany>
            </StyledInfo>
          </StyledComputer>
        </StyledSlideContainer>
      ),
      name: 'Home',
    },
    {
      component: <h1>Second section</h1>,
      name: 'Section b',
    },
  ] as SectionType[];

  return (
    <>
      <Sections>
        {slides.map((_, index: number) => {
          return (
            <SectionItem
              onClick={() => setCurrentSlide(index)}
              active={currentSlide === index}
              key={index}
            />
          );
        })}
      </Sections>

      <FullPage active={currentSlide}>
        {slides.map((slide, index) => {
          return <Slide key={index}>{slide.component}</Slide>;
        })}
      </FullPage>
    </>
  );
}

const StyledLanguageSwitchContainer = styled.div`
  position: absolute;
  right: 16px;
`;

const Sections = styled.div`
  height: 100px;
  z-index: 9;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  right: 0;
`;

const SectionItem = styled.div<SectionItemType>`
  width: 10px;
  height: 10px;
  margin: 8px;
  background: #000000;
  cursor: pointer;
  border-radius: 50%;
  opacity: ${({ active }) => (active ? 0.8 : 0.1)};
`;

const StyledSlideContainer = styled.div`
  background: #f8e0ff;
  width: 100%;
  height: 100%;
  z-index: -3;
`;

const StyledInfo = styled.div`
  margin-left: 20px;
`;

const StyledName = styled.div`
  font-weight: 100;
  font-size: 24px;
`;

const StyledCompany = styled.a``;

const StyledPosition = styled.div``;

const StyledComputer = styled.div`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;
