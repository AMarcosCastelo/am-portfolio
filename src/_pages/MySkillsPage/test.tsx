import { render, screen } from '@testing-library/react'

import MySkillsPage from '.'

describe('<MySkillsPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<MySkillsPage />)

    expect(
      screen.getByRole('heading', { name: /MySkillsPage/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
