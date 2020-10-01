import React, { useState } from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { defaultLanguage } from 'src/utils/i18n';

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  const [locale, setLocale] = useState<'pt' | 'en'>(defaultLanguage);

  function toogleLanguage() {
    const value = locale === 'pt' ? 'en' : 'pt';

    setLocale(value);

    i18n.changeLanguage(value);
  }

  return (
    <SwtyledSwitch>
      <label className="language-switcher">
        <input type="checkbox" onChange={toogleLanguage} />
        <span className="slider round"></span>
        <span className="select-fr">
          {defaultLanguage === 'pt' ? 'PT' : 'EN'}
        </span>
        <span className="select-en">
          {defaultLanguage === 'pt' ? 'EN' : 'PT'}
        </span>
      </label>
    </SwtyledSwitch>
  );
}

const SwtyledSwitch = styled.div`
  cursor: pointer;
  user-select: none;

  .language-switcher {
    position: relative;
    display: inline-block;
    width: calc(32px * 2);
    height: 32px;
    -webkit-transform: translateY(40%);
    -moz-transform: translateY(40%);
    -ms-transform: translateY(40%);
    -o-transform: translateY(40%);
    transform: translateY(40%);
    -webkit-transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);
    -moz-transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);
    -ms-transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);
    -o-transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);
    transition: transform 0.17s cubic-bezier(0.26, 0.48, 0.08, 0.9);
  }
  .language-switcher input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .language-switcher .select-fr,
  .language-switcher .select-en {
    position: absolute;
    font-size: 12.8px;
    top: 8px;
    color: #fff;
    mix-blend-mode: difference;
  }
  .language-switcher .select-fr {
    left: 9.1428571429px;
  }
  .language-switcher .select-en {
    right: 8px;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #1e3470;
    box-shadow: 0 3px 64px rgba(30, 52, 112, 0.1);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 32px;
    width: 32px;
    left: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 3px 64px rgba(30, 52, 112, 0.16);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #1e3470;
  }

  input:focus + .slider {
    box-shadow: none;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(32px);
    -ms-transform: translateX(32px);
    transform: translateX(32px);
  }

  .slider.round {
    border-radius: 32px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
