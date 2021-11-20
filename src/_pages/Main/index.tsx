import { useState } from 'react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'
import PowerButton from 'components/PowerButton'
import Logo from 'components/Logo'
import SocialIcons from 'components/SocialIcons'
import { YinYang } from 'components/AllSvgs'
import Intro from 'components/Intro'

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
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi...
            </motion.h2>
          </S.Contact>
        </NextLink>

        <NextLink href="/work" passHref>
          <S.Work click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Work
            </motion.h2>
          </S.Work>
        </NextLink>

        <S.BottomBar>
          <NextLink href="/about" passHref>
            <S.About click={click}>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                About
              </motion.h2>
            </S.About>
          </NextLink>

          <NextLink href="/mySkills" passHref>
            <S.MySkills>
              <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                My Skills
              </motion.h2>
            </S.MySkills>
          </NextLink>
        </S.BottomBar>
      </S.Container>

      {click && <Intro />}
    </S.Wrapper>
  )
}

export default Main
