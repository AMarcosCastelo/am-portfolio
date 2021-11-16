import styled from 'styled-components'

import { DARK_THEME, LIGHT_THEME } from 'styles'

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`

interface LineProps {
  readonly themeType: 'dark' | 'light'
}

export const Line = styled.span<LineProps>`
  width: 2px;
  height: 8em;
  background-color: ${({ themeType }) =>
    themeType === 'dark'
      ? DARK_THEME.palette.text.main
      : LIGHT_THEME.palette.text.main};
`
