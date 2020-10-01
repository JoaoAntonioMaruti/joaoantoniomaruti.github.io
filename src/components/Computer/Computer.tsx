import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

type StyledCursorProps = {
  active: boolean;
};

export default function Computer() {
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCursorActive(!cursorActive);
    }, 500);
  }, [cursorActive]);

  return (
    <StyledComputer>
      <div className="screen">
        <StyledCursor active={cursorActive} />
      </div>
      <div className="disk" />
    </StyledComputer>
  );
}

const StyledCursor = styled.div<StyledCursorProps>`
  width: 10px;
  height: 20px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  background-color: ${({ active }) => (active ? '#000' : 'transparent')};
`;

const StyledComputer = styled.div`
  width: 100px;
  height: 160px;
  background: #dfd8c5;
  position: relative;
  list-style: none;
  border-radius: 4px;

  .screen {
    width: 40px;
    height: 40px;
    background: blue;
    margin: 10px;
    position: absolute;
    border: 20px;
    border-style: inset;
    border-radius: 4px;

    &:before {
      content: '';
      width: 70px;
      height: 70px;
      top: -15px;
      left: -15px;
      background: black;
      position: absolute;
    }

    &:after {
      content: '';
      width: 60px;
      height: 60px;
      top: -15px;
      left: -15px;
      background: #3cff00;
      position: absolute;
      border-radius: 4px;
      margin: 4px;
    }
  }

  .disk {
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: 50px;
    z-index: 9;
    border: 1px;
    border-top-style: inset;
    border-bottom-style: inset;
    &:after {
      position: absolute;
      width: 40px;
      height: 3px;
      right: 10px;
      content: '';
      background: black;
    }
  }

  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    height: 30px;
    background: #877e6a;
    width: 100%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
