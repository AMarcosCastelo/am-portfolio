import NextLink from 'next/link'
import { PowerBtn } from 'components/AllSvgs'

import * as S from './styles'

const PowerButton = () => (
  <S.Power>
    <NextLink href="/">
      <a>
        <PowerBtn width={30} height={30} fill="currentColor" />
      </a>
    </NextLink>
  </S.Power>
)

export default PowerButton
