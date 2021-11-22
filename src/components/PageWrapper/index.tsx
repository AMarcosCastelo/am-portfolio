import Router from 'next/router'

import Logo from 'components/Logo'
import PowerButton from 'components/PowerButton'
import SocialIcons from 'components/SocialIcons'

import * as S from './styles'

const PageWrapper: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      {Router.router?.route !== '/' && (
        <>
          <SocialIcons theme="light" />
          <PowerButton />
          <Logo theme="light" />
        </>
      )}
      {children}
    </S.Wrapper>
  )
}

export default PageWrapper
