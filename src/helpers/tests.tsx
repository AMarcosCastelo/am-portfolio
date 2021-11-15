import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { lightTheme, darkTheme } from 'styles'

export const renderWithTheme = (
  children: React.ReactNode,
  theme?: 'light' | 'dark'
): RenderResult =>
  render(
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
