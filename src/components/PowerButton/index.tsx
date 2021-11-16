import NextLink from 'next/link'
import { PowerBtn } from 'components/AllSvgs'

import * as S from './styles'

const PowerButton = () => (
  <S.Power>
    <NextLink href="/">
      <PowerBtn width={30} height={30} fill="currentColor" />
    </NextLink>
  </S.Power>
)

export default PowerButton
