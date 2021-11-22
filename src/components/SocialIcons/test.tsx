import { renderWithTheme } from 'helpers'

import SocialIcons from '.'

describe('<SocialIcons />', () => {
  it('should render the SocialIcons', () => {
    const { container } = renderWithTheme(<SocialIcons theme="light" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the SocialIcons with dark theme', () => {
    const { container } = renderWithTheme(<SocialIcons theme="dark" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
