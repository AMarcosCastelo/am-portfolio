import * as S from './styles'

const Logo = ({ theme }: { theme: 'dark' | 'light' }) => (
  <S.Logo themeType={theme}>AM</S.Logo>
)

export default Logo
