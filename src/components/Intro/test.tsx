import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers'

import Intro from '.'

describe('<Intro />', () => {
  it('should render the Intro', () => {
    const { container } = renderWithTheme(<Intro />)

    expect(screen.getByRole('heading', { name: /Intro/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
