import { renderWithTheme } from 'helpers'

import PageWrapper from '.'

describe('<PageWrapper />', () => {
  it('should render the PageWrapper', () => {
    const { container } = renderWithTheme(<PageWrapper />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
