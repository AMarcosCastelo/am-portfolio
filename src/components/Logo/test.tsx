import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the Logo', () => {
    const { container } = renderWithTheme(<Logo theme="light" />)

    expect(screen.getByRole('heading', { name: /AM/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
