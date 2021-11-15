import { render, screen } from '@testing-library/react'

import PowerButton from '.'

describe('<PowerButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<PowerButton />)

    expect(
      screen.getByRole('heading', { name: /PowerButton/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
