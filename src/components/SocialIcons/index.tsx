import NextLink from 'next/link'

import { Facebook, Github, Twitter } from 'components/AllSvgs'

import * as S from './styles'
import { DARK_THEME, LIGHT_THEME } from 'styles'

const SocialIcons = ({ theme }: { theme: 'dark' | 'light' }) => {
  const NAV_ITEMS = [
    {
      name: 'Github',
      url: '#',
      icon: (
        <Github
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DARK_THEME.palette.text.main
              : LIGHT_THEME.palette.text.main
          }
        />
      )
    },
    {
      name: 'Facebook',
      url: '#',
      icon: (
        <Facebook
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DARK_THEME.palette.text.main
              : LIGHT_THEME.palette.text.main
          }
        />
      )
    },
    {
      name: 'Twitter',
      url: '#',
      icon: (
        <Twitter
          width={25}
          height={25}
          fill={
            theme === 'dark'
              ? DARK_THEME.palette.text.main
              : LIGHT_THEME.palette.text.main
          }
        />
      )
    }
  ]

  return (
    <S.Icons>
      {NAV_ITEMS.map(({ name, url, icon }) => (
        <div key={name}>
          <NextLink href={url}>
            <a>{icon}</a>
          </NextLink>
        </div>
      ))}

      <S.Line themeType={theme} />
    </S.Icons>
  )
}

export default SocialIcons
