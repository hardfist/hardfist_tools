import React, { useContext } from 'react';
import 'styled-components/macro';

import styled, { css } from 'styled-components';
import { ThemeContext } from 'context/theme';
import MoonIcon from 'assets/moon.png';
import SunIcon from 'assets/sun.png';
const ToggleWrapper = styled.div`
  width: 50px;
  height: 24px;
  padding: 0;
  border-radius: 30px;
  background-color: #0f1114;
  transition: all 0.2s ease;
  position: relative;
  cursor: pointer;
`;
const IconWrapper = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  left: 5px;
  top: 0;
  bottom: 0;
  line-height: 0;
  margin-bottom: auto;
  margin-top: auto;
`;
const Moon = styled.img.attrs({
  src: MoonIcon
})`
  width: 16px;
  height: 16px;
`;
const Sun = styled.img.attrs({
  src: SunIcon
})`
  width: 16px;
  height: 16px;
`;
const ToggleThumb = styled.div<{
  checked: boolean;
}>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fafafa;
  box-sizing: border-box;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: ${p => (!p.checked ? 'translateX(0)' : 'translateX(26px)')};
`;
export const Toggle = (props: spa.util.withClassName) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ToggleWrapper className={props.className}>
      <IconWrapper>
        <Moon />
      </IconWrapper>
      <IconWrapper
        css={css`
          right: 5px;
          left: auto;
        `}
      >
        <Sun />
      </IconWrapper>
      <ToggleThumb
        checked={theme === 'dark'}
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      />
    </ToggleWrapper>
  );
};
