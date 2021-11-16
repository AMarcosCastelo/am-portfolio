import { useState } from 'react'
import NextLink from 'next/link'

import PowerButton from 'components/PowerButton'
import Logo from 'components/Logo'
import SocialIcons from 'components/SocialIcons'
import { YinYang } from 'components/AllSvgs'

import * as S from './styles'

const Main = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <SocialIcons theme={click ? 'dark' : 'light'} />
        <PowerButton />
        <Logo theme={click ? 'dark' : 'light'} />

        <S.DarkDiv click={click} />

        <S.Center click={click}>
          <YinYang
            onClick={handleClick}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
          />
          <span>click here</span>
        </S.Center>

        <NextLink href="mailto:marcos-12marcos@hotmail.com" passHref>
          <S.Contact target="_blank">
            <h2>Say hi...</h2>
          </S.Contact>
        </NextLink>

        <NextLink href="/work" passHref>
          <S.Work click={click}>
            <h2>Work</h2>
          </S.Work>
        </NextLink>

        <S.BottomBar>
          <NextLink href="/about" passHref>
            <S.About click={click}>
              <h2>About</h2>
            </S.About>
          </NextLink>

          <NextLink href="/mySkills" passHref>
            <S.MySkills>
              <h2>My Skills</h2>
            </S.MySkills>
          </NextLink>
        </S.BottomBar>
      </S.Container>
    </S.Wrapper>
  )
}

export default Main
