import NextLink from 'next/link'

import { Facebook, Github, Twitter } from 'components/AllSvgs'

import * as S from './styles'

const NAV_ITEMS = [
  {
    name: 'Github',
    url: '#',
    icon: <Github width={25} height={25} fill="currentColor" />
  },
  {
    name: 'Facebook',
    url: '#',
    icon: <Facebook width={25} height={25} fill="currentColor" />
  },
  {
    name: 'Twitter',
    url: '#',
    icon: <Twitter width={25} height={25} fill="currentColor" />
  }
]

const SocialIcons = () => (
  <S.Icons>
    {NAV_ITEMS.map(({ name, url, icon }) => (
      <div key={name}>
        <NextLink href={url}>{icon}</NextLink>
      </div>
    ))}

    <S.Line />
  </S.Icons>
)

export default SocialIcons
