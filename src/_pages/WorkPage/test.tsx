import { render, screen } from '@testing-library/react'

import WorkPage from '.'

describe('<WorkPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<WorkPage />)

    expect(
      screen.getByRole('heading', { name: /WorkPage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
