import PowerButton from 'components/PowerButton'
import Logo from 'components/Logo'
import SocialIcons from 'components/SocialIcons'

import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Container>
      <SocialIcons />
      <PowerButton />
      <Logo />
    </S.Container>
  </S.Wrapper>
)

export default Main
