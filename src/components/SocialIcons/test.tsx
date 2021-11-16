import { screen } from '@testing-library/react'
import { renderWithTheme } from 'helpers'

import SocialIcons from '.'

describe('<SocialIcons />', () => {
  it('should render the SocialIcons', () => {
    const { container } = renderWithTheme(<SocialIcons theme="light" />)

    expect(
      screen.getByRole('heading', { name: /SocialIcons/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
