import { renderWithTheme } from 'helpers'

import Particle from '.'

describe('<Particle />', () => {
  it('should render the Particle', () => {
    const { container } = renderWithTheme(<Particle theme="light" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Particle with dark theme', () => {
    const { container } = renderWithTheme(<Particle theme="dark" />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
