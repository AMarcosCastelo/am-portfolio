import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { LIGHT_THEME, DARK_THEME } from 'styles'

export const renderWithTheme = (
  children: React.ReactNode,
  theme?: 'light' | 'dark'
): RenderResult =>
  render(
    <ThemeProvider theme={theme === 'dark' ? DARK_THEME : LIGHT_THEME}>
      {children}
    </ThemeProvider>
  )
