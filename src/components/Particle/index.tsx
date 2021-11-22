import Particles from '../../../node_modules/react-particles-js'

import particleConfigDark from '../../config/particlesjs-config.json'
import particleConfigLight from '../../config/particlesjs-config-light.json'

import * as S from './styles'

type Props = {
  theme: 'light' | 'dark'
}

const Particle: React.FC<Props> = ({ theme }: Props) => (
  <S.Wrapper>
    <Particles
      // @ts-ignore: params type
      params={theme === 'light' ? particleConfigLight : particleConfigDark}
    />
  </S.Wrapper>
)

export default Particle
