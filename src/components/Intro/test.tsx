import { renderWithTheme } from 'helpers'

import Intro from '.'

describe('<Intro />', () => {
  it('should render the Intro', () => {
    const { container } = renderWithTheme(<Intro />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
