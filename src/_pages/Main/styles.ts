import styled from 'styled-components'

export const Wrapper = styled.main`
  background: ${({ theme }) => theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

export const Container = styled.div`
  padding: 2rem;
`
