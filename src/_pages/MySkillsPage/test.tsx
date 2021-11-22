import { render } from '@testing-library/react'

import MySkillsPage from '.'

describe('<MySkillsPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<MySkillsPage />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
