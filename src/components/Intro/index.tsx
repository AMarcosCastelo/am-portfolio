import { motion } from 'framer-motion'

import * as S from './styles'

const Intro = () => (
  <S.Box
    initial={{ height: 0 }}
    animate={{ height: '55vh' }}
    transition={{ type: 'spring', duration: 2, delay: 1 }}
  >
    <S.SubBox>
      <S.Text>
        <h1>Hi,</h1>
        <h2>{"I'm Antonio Marcos."}</h2>
        <h6>{"I'm a front-end developer."}</h6>
      </S.Text>
    </S.SubBox>

    <S.SubBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          className="pic"
          src="/assets/images/profile-img.png"
          alt="Profile Pic"
        />
      </motion.div>
    </S.SubBox>
  </S.Box>
)

export default Intro
