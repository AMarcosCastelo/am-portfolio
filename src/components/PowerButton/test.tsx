import { renderWithTheme } from 'helpers'

import PowerButton from '.'

describe('<PowerButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<PowerButton />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
