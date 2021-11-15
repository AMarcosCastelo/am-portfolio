import { renderWithTheme } from 'helpers'

import Main from '.'

describe('<Main />', () => {
  it('should render the Main', () => {
    const { container } = renderWithTheme(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
