import { render } from '@testing-library/react'

import {
  Anchor,
  Design,
  Develope,
  Facebook,
  Github,
  Link,
  PowerBtn,
  Twitter,
  YinYang,
  YouTube
} from '.'

describe('Render all svgs', () => {
  it('should render the Anchor svg', () => {
    const { container } = render(<Anchor />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Design svg', () => {
    const { container } = render(<Design />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Develope svg', () => {
    const { container } = render(<Develope />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Facebook svg', () => {
    const { container } = render(<Facebook />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Github svg', () => {
    const { container } = render(<Github />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Link svg', () => {
    const { container } = render(<Link />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the PowerBtn svg', () => {
    const { container } = render(<PowerBtn />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the Twitter svg', () => {
    const { container } = render(<Twitter />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the YinYang svg', () => {
    const { container } = render(<YinYang />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the YouTube svg', () => {
    const { container } = render(<YouTube />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
