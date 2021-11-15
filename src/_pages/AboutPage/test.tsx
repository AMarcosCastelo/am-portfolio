import { render, screen } from '@testing-library/react'

import AboutPage from '.'

describe('<AboutPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutPage />)

    expect(
      screen.getByRole('heading', { name: /AboutPage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
