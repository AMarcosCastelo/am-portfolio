import styled from 'styled-components'

import { DARK_THEME, LIGHT_THEME } from 'styles'

interface LogoProps {
  themeType: 'dark' | 'light'
}

export const Logo = styled.h1<LogoProps>`
  display: inline-block;
  color: ${({ themeType }) =>
    themeType === 'dark'
      ? DARK_THEME.palette.text.main
      : LIGHT_THEME.palette.text.main};
  font-family: ${({ theme }) => theme.font.family_3};

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`
